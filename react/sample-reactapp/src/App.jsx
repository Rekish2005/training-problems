import { useState, useEffect } from "react";
import {evaluate} from "mathjs"

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(evaluate(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if ("0123456789+-*/.".includes(key)) {
        setInput((prev) => prev + key);
      } else if (key === "Enter") {
        try {
          setInput(evaluate(input).toString());
        } catch {
          setInput("Error");
        }
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        setInput("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "⌫"
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="calculator">
        <div className="header">
          <h2>Calculator</h2>
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <input type="text" value={input} readOnly />

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;