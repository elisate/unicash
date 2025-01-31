import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ShopsDashboard from "../components/ShopsDashboard";
import AddRemove from "../components/AddRemove";

const Shops = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[224px] mt-[77px]">
        <SearchBar />
        <ShopsDashboard />
      </div>
    </div>
  );
};

export default Shops;
