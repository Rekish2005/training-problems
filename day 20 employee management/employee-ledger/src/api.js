/* =========================================================================
   REAL API LAYER
   Talks to the public "Dummy Rest API" that Postman's own API Network
   links to (used in countless Postman CRUD tutorials):

     GET    /api/v1/employees        -> list everyone
     GET    /api/v1/employee/{id}    -> one record
     POST   /api/v1/create           -> { name, salary, age }
     PUT    /api/v1/update/{id}      -> { name, salary, age }
     DELETE /api/v1/delete/{id}

   It only stores three real fields: employee_name, employee_salary,
   employee_age. It's a database SHARED by everyone testing it, and it
   rate-limits aggressively (expect an occasional 429), so writes are
   applied to server state AND merged into local state immediately in
   App.jsx, rather than trusting a full re-fetch (which would also pull
   in everyone else's test junk).

   To point this at your own backend later, only this file needs to
   change — keep the same exported function names/shapes and nothing
   else in the app has to be touched.
   ========================================================================= */

const API_BASE = "https://dummy.restapiexample.com/api/v1";

async function apiCall(url, options, retries = 1) {
  const res = await fetch(url, options);
  if (res.status === 429 && retries > 0) {
    await new Promise((r) => setTimeout(r, 900));
    return apiCall(url, options, retries - 1);
  }
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

// Normalizes the API's employee_* field names into a flat shape the UI uses.
const fromApi = (rec) => ({
  id: rec.id,
  name: rec.employee_name ?? rec.name ?? "",
  salary: Number(rec.employee_salary ?? rec.salary ?? 0),
  age: Number(rec.employee_age ?? rec.age ?? 0),
});

export const api = {
  async listEmployees() {
    const json = await apiCall(`${API_BASE}/employees`);
    return (json.data || []).map(fromApi);
  },

  async createEmployee(payload) {
    const json = await apiCall(`${API_BASE}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        salary: payload.salary,
        age: payload.age,
      }),
    });
    return fromApi(json.data);
  },

  async updateEmployee(id, payload) {
    const json = await apiCall(`${API_BASE}/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        salary: payload.salary,
        age: payload.age,
      }),
    });
    return fromApi({ id, ...json.data });
  },

  async deleteEmployee(id) {
    await apiCall(`${API_BASE}/delete/${id}`, { method: "DELETE" });
    return true;
  },
};
