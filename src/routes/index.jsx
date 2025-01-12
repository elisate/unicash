import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import LoginRegisterPage from "../pages/LoginRegisterPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginRegisterPage />} />
    </Routes>
  );
};

export default AllRoutes;
