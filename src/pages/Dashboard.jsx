import React from "react";

import AdminDashboard from "../components/AdminDashboard";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-1 transition-all duration-300 ml-16 sm:ml-56 mt-[-0x] p-4 sm:p-6">
        <div className="flex flex-col">
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
