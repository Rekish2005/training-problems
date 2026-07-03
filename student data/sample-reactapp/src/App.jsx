import { useState } from "react";
import "./App.css";

function App() {

  // Student List
  const [students, setStudents] = useState([]);

  // Search
  const [search, setSearch] = useState("");

  // Edit Mode
  const [editId, setEditId] = useState(null);

  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    rollNumber: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add Student
  const addStudent = () => {
    if (
      formData.name.trim() === "" ||
      formData.className.trim() === "" ||
      formData.rollNumber.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const student = {
      id: Date.now(),
      name: formData.name,
      className: formData.className,
      rollNumber: formData.rollNumber,
      attendance: "Absent",
    };

    setStudents([...students, student]);

    setFormData({
      name: "",
      className: "",
      rollNumber: "",
    });
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Toggle Attendance
  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              attendance:
                student.attendance === "Absent"
                  ? "Present"
                  : "Absent",
            }
          : student
      )
    );
  };

  // Edit Student
  const editStudent = (student) => {
    setEditId(student.id);

    setFormData({
      name: student.name,
      className: student.className,
      rollNumber: student.rollNumber,
    });
  };

  // Update Student
  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student.id === editId
          ? {
              ...student,
              name: formData.name,
              className: formData.className,
              rollNumber: formData.rollNumber,
            }
          : student
      )
    );

    setEditId(null);

    setFormData({
      name: "",
      className: "",
      rollNumber: "",
    });
  };

  // Dashboard Statistics
  const totalStudents = students.length;

  const presentStudents = students.filter(
    (student) => student.attendance === "Present"
  ).length;

  const absentStudents = students.filter(
    (student) => student.attendance === "Absent"
  ).length;

  // Search Filter
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.className.toLowerCase().includes(search.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(search.toLowerCase())
  );
    return (
    <div className="container">

      {/* Header */}
      <h1>🎓 Student Management Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="dashboard">

        <div className="card total">
          <h2>{totalStudents}</h2>
          <p>Total Students</p>
        </div>

        <div className="card present">
          <h2>{presentStudents}</h2>
          <p>Present</p>
        </div>

        <div className="card absent">
          <h2>{absentStudents}</h2>
          <p>Absent</p>
        </div>

      </div>

      {/* Form */}

      <div className="form">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="className"
          placeholder="Class"
          value={formData.className}
          onChange={handleChange}
        />

        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
        />

        {editId ? (
          <button onClick={updateStudent}>
            Update Student
          </button>
        ) : (
          <button onClick={addStudent}>
            Add Student
          </button>
        )}

      </div>

      {/* Search */}

      <div className="searchBox">

        <input
          type="text"
          placeholder="🔍 Search by Name, Class or Roll Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Student Table */}

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Roll No</th>

              <th>Name</th>

              <th>Class</th>

              <th>Attendance</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.length === 0 ? (

              <tr>

                <td colSpan="5">

                  No Student Found

                </td>

              </tr>

            ) : (

              filteredStudents.map((student) => (

                <tr key={student.id}>

                  <td>{student.rollNumber}</td>

                  <td>{student.name}</td>

                  <td>{student.className}</td>

                  <td>

                    <span
                      className={
                        student.attendance === "Present"
                          ? "presentText"
                          : "absentText"
                      }
                    >
                      {student.attendance}
                    </span>

                  </td>

                  <td>

                    <button
                      className="attendanceBtn"
                      onClick={() => toggleAttendance(student.id)}
                    >
                      {student.attendance === "Absent"
                        ? "Mark Present"
                        : "Mark Absent"}
                    </button>

                    <button
                      className="editBtn"
                      onClick={() => editStudent(student)}
                    >
                      Edit
                    </button>

                    <button
                      className="deleteBtn"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default App;