import React from "react";
import { Link, Outlet, Route, Routes } from "react-router";
import AboutMe from "../components/AboutMe";
import ABoutUs from "../components/ABoutUs";

const About = () => {
  return (
    <div>
      <h1>ABout</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about/me">About Me</Link>
          </li>
          <li>
            <Link to="/about/us">About Us</Link>
          </li>
          <li>
            <Link to="/about/1">Blog with Id 1</Link>
          </li>
          <li>
            <Link to="/about/2">Blog with Id 2</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
