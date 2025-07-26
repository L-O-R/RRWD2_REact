import React from "react";
import { Link, Outlet } from "react-router-dom";

const ABoutUs = () => {
  return (
    <div>
      ABoutUs
      <nav>
        <ul>
          <li>
            <Link to="/aboutus/">Mission </Link>
          </li>
          <li>
            <Link to="/aboutus/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default ABoutUs;
