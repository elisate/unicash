import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function MyAccounts() {
  const [isVisible, setIsVisible] = useState(true);
  const accounts = [
    { title: "Bank of Kigali", balance: "1,200,000 FRW" },
    { title: "Mobile Money", balance: "350,000 FRW" },
  ];

  return (
    <div className="flex">
      <div className="right-0 top-[290px] w-[1080px] p-2 rounded-lg">
        <h2 className="text-lg font-medium mb-2">My Accounts</h2>

        <div className="flex gap-3">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="w-[220px] bg-gray-200 rounded-lg shadow-md"
            >
              <h3 className="text-sm font-semibold text-white bg-[#6B5540] p-2 rounded-t-lg">
                {account.title}
              </h3>
              <div className="flex items-center justify-between p-2">
                <p className="text-xs font-medium text-gray-700">Balance</p>
                <p className="text-xs font-regular text-gray-800">
                  {isVisible ? account.balance : "*******"}
                </p>
                <button onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <FaEyeSlash className="text-gray-500" size={14} />
                  ) : (
                    <FaEye className="text-gray-500" size={14} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
