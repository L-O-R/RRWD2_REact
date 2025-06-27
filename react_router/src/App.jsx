import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router";
import AboutMe from "./components/AboutMe";
import ABoutUs from "./components/ABoutUs";
import Blog from "./components/Blog";
const App = () => {
  console.log("App component rendered");
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="me" element={<AboutMe />} />
          <Route path="us" element={<ABoutUs />} />
          {/* // dynamic Routing */}
          <Route path=":id" element={<Blog />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
      </Routes>
    </div>
  );
};

export default App;
