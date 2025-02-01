import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import TaSettings from "../components/TaSettings";

const Settings = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[224px] mt-[77px]">
        <SearchBar />
        <TaSettings />
      </div>
    </div>
  );
};

export default Settings;
