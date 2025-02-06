import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import InvoiceList from "../components/Invoice";

const Students = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 ml-16 sm:ml-56 mt-[0x] p-4 sm:p-6">
        <SearchBar />
        <div className="flex flex-col">
          <InvoiceList />
        </div>
      </div>
    </div>
  );
};

export default Students;
