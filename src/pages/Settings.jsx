import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import TaSettings from "../components/TaSettings";

const Settings = () => {
  return (
    <div className="flex">
   
      <div className="flex-1 transition-all duration-300 ml-16 sm:ml-56 mt-[0x] p-4 sm:p-6">
       
        <TaSettings />
      </div>
    </div>
  );
};

export default Settings;
