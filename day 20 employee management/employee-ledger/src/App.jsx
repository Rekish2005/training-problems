import { useState, useEffect, useRef, useCallback } from "react";
import Login from "./login";

import { api } from "./api";
import { emptyForm } from "./utils";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import EmployeeGrid from "./components/EmployeeGrid";
import EmployeePanel from "./components/EmployeePanel";
import Toast from "./components/Toast";

import "./index.css";

export default function App() {
  // Login State
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  // Employee States
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [panelOpen, setPanelOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [toast, setToast] = useState(null);
  const [formError, setFormError] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const localIdRef = useRef(-1);
  const hasFetchedRef = useRef(false);

  // Load Employees
  const loadEmployees = useCallback(async () => {
    setLoading(true);
    setLoadError(null);

    try {
      const rows = await api.listEmployees();
      setEmployees(rows.slice(-16).reverse());
    } catch (err) {
      setLoadError(err.message || "Could not reach API");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;
    loadEmployees();
  }, [loadEmployees]);

  // Toast
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // New Employee
  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormError(null);
    setPanelOpen(true);
  };

  // Edit Employee
  const openEdit = (emp) => {
    setEditingId(emp.id);
    setForm({
      name: emp.name,
      salary: String(emp.salary),
      age: String(emp.age),
    });

    setFormError(null);
    setPanelOpen(true);
  };

  // Close Panel
  const closePanel = () => {
    setPanelOpen(false);
    setEditingId(null);
    setForm(emptyForm);
    setFormError(null);
    setConfirmDeleteId(null);
  };

  // Save Employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;

    setSyncing(true);
    setFormError(null);

    const payload = {
      name: form.name.trim(),
      salary: Number(form.salary) || 0,
      age: Number(form.age) || 0,
    };

    try {
      if (editingId) {
        await api.updateEmployee(editingId, payload);

        setEmployees((prev) =>
          prev.map((e) =>
            e.id === editingId ? { ...e, ...payload } : e
          )
        );

        showToast("Employee Updated");
      } else {
        const created = await api.createEmployee(payload);

        const id = created.id || localIdRef.current--;

        setEmployees((prev) => [
          { id, ...payload },
          ...prev,
        ]);

        showToast("Employee Added");
      }

      closePanel();
    } catch (err) {
      setFormError(err.message || "API Error");
    }

    setSyncing(false);
  };

  // Delete Employee
  const handleDelete = async (id) => {
    setSyncing(true);

    try {
      await api.deleteEmployee(id);

      setEmployees((prev) =>
        prev.filter((e) => e.id !== id)
      );

      showToast("Employee Deleted");

      closePanel();
    } catch (err) {
      setFormError(err.message || "Delete Failed");
    }

    setSyncing(false);
  };

  // Search + Sort
  const filtered = employees
    .filter(
      (e) =>
        !query.trim() ||
        e.name.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "salary") return b.salary - a.salary;
      if (sortBy === "age") return a.age - b.age;

      return a.name.localeCompare(b.name);
    });

  // Show Login Page First
  if (!loggedIn) {
    return (
      <Login
        onLogin={() => {
          localStorage.setItem("loggedIn", "true");
          setLoggedIn(true);
        }}
      />
    );
  }

  // Dashboard
  return (
    <div className="ledger-root">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header employees={employees} syncing={syncing} />

        <button
          style={{
            marginRight: "25px",
            height: "40px",
            padding: "0 20px",
            cursor: "pointer",
          }}
          onClick={() => {
            localStorage.removeItem("loggedIn");
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      </div>

      <Toolbar
        query={query}
        setQuery={setQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onNew={openNew}
      />

      <EmployeeGrid
        loading={loading}
        loadError={loadError}
        employees={filtered}
        onCardClick={openEdit}
      />

      {panelOpen && (
        <EmployeePanel
          editingId={editingId}
          form={form}
          setForm={setForm}
          syncing={syncing}
          formError={formError}
          confirmDeleteId={confirmDeleteId}
          setConfirmDeleteId={setConfirmDeleteId}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          onClose={closePanel}
        />
      )}

      <Toast message={toast} />

    </div>
  );
}