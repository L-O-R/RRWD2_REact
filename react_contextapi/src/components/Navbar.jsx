import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  // 3. Consume the context value
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#f8f9fa" : "#343a40",
    color: theme === "light" ? "#000" : "#fff",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px",
  };

  return (
    <nav style={styles}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}{" "}
        Mode
      </button>
    </nav>
  );
};

export default Navbar;
