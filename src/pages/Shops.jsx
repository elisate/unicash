import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ShopsDashboard from "../components/ShopsDashboard";
import AddRemove from "../components/AddRemove";

const Shops = () => {
  return (
    <div className="flex">
      <div className="flex-1 transition-all duration-300 ml-16 sm:ml-56 mt-[0x] p-4 sm:p-6">
        <ShopsDashboard />
      
      </div>
    </div>
  );
};

export default Shops;
