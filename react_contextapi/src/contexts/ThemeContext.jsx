import React, { useState, createContext } from "react";

// 1. Create the context with a default value
export const ThemeContext = createContext();

// 2. Create the Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Our shared state

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  // The value prop is where we pass our state and functions
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
