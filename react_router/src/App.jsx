import React, { useState } from "react";
import ABC from "./components/ABC";
import ARoutes from "./routes/Routes";
import { Link } from "react-router-dom";
import DynamicRoute from "./components/DynamicRoute";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/aboutus">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ARoutes />
      </main>
      <footer>THis is a footer</footer>
    </>
  );
};

export default App;
