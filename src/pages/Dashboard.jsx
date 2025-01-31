import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import AdminDashboard from "../components/AdminDashboard";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[224px] mt-[77px]">
        <SearchBar />
        <div className="flex flex-col">
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
