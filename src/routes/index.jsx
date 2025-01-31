import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import Dashboard from "../pages/Dashboard";
import Shops from "../pages/Shops";
import Wallet from "../pages/Wallet";
import Analytics from "../pages/Analytics";
import Students from "../pages/Students";
import Settings from "../pages/Settings";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/students" element={<Students />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AllRoutes;
