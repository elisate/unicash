import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import AdminDashboard from "../components/AdminDashboard";
import MyAccounts from "../components/MyAccounts";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[224px] mt-[77px]">
        <SearchBar />
        <div className="flex flex-col">
          <AdminDashboard />
          <MyAccounts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
