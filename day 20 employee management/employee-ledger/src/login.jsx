import { useState } from "react";
import "./login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "Admin@123") { 
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Personnel Ledger</h1>
        <p>Employee Management System</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}