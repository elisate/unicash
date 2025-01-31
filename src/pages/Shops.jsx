import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

const Shops = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[224px] mt-[77px]">
        <SearchBar />
      </div>
    </div>
  );
};

export default Shops;
