import React, { useState } from "react";
import Child from "./components/Child";
import { useAppStore } from "./zustand/store";
import Login from "./components/Login";
import PRofile from "./components/PRofile";

const App = () => {
  return (
    <div>
      <Login />
      <PRofile />
    </div>
  );
};

export default App;
