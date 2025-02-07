import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Shops from './pages/Shops';
import Login from './components/login';
import Wallet from './pages/Wallet';
import Students from './pages/Students';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" index element={<Dashboard />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/students" element={<Students />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
