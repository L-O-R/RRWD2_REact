import React from "react";
import { Route, Routes } from "react-router-dom";
import ABoutUs from "../components/ABoutUs";
import DynamicRoute from "../components/DynamicRoute";

const ARoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/aboutus" element={<ABoutUs />}>
        <Route path="/aboutus/" element={<h2>Vision</h2>} />
        <Route
          path="/aboutus/vision"
          element={<h2>Mission</h2>}
        />
      </Route>
      <Route
        path="/contactus"
        element={<h1>Contact US</h1>}
      />

      <Route path="/:param" element={<DynamicRoute />} />
    </Routes>
  );
};

export default ARoutes;
