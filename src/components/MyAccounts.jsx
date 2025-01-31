import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegBell } from "react-icons/fa";

export default function MyAccounts() {
  const [isVisible, setIsVisible] = useState(true);
  const accounts = [
    { title: "Bank of Kigali", balance: "1,200,000 FRW" },
    { title: "Mobile Money", balance: "350,000 FRW" },
  ];

  const notifications = [
    {
      id: 1,
      message: "You have used up 80% of your budget.",
      date: "12-01-2025",
      time: "12:30PM",
    },
    {
      id: 2,
      message: "Transaction from Bank of Kigali completed.",
      date: "12-01-2025",
      time: "01:00PM",
    },
    {
      id: 3,
      message: "You have a new message from your bank.",
      date: "12-01-2025",
      time: "02:00PM",
    },
    {
      id: 4,
      message: "Mobile Money payment received.",
      date: "12-01-2025",
      time: "03:00PM",
    },
    {
      id: 5,
      message: "Bank of Kigali account updated.",
      date: "12-01-2025",
      time: "04:00PM",
    },
  ];

  return (
    <div className="flex">
      <div className=" right-0 top-[290px] w-[1080px] p-2 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">My Accounts</h2>

        <div className="flex gap-4">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="w-[260px] bg-gray-200 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-white bg-[#6B5540] p-2 rounded-t-lg">
                {account.title}
              </h3>
              <div className="flex items-center justify-between p-3">
                <p className="text-md font-medium text-gray-700">Balance</p>
                <p className="text-xl font-semibold text-gray-800">
                  {isVisible ? account.balance : "*******"}
                </p>
                <button onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <FaEyeSlash className="text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-600" />
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
