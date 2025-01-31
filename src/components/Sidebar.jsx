import React, { useState } from "react";
import { TbLayoutDashboardFilled, TbSettings2 } from "react-icons/tb";
import { FaCalendarAlt, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { IoWallet } from "react-icons/io5";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex">
      <div className="fixed w-56 text-white min-h-screen bg-[#6B5540] rounded-r-[20px] p-8 flex flex-col justify-between">
        <nav>
          <ul className="space-y-8">
            <li>
              <a
                href="/dashboard"
                onClick={() => setActive("dashboard")}
                className={`relative flex items-center space-x-3 text-sm transition-colors ${
                  active === "dashboard"
                    ? "text-teal-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-teal-500 ${
                    active === "dashboard" ? "" : "hidden"
                  }`}
                ></span>
                <TbLayoutDashboardFilled className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("shops")}
                className={`relative flex items-center space-x-3 text-sm transition-colors ${
                  active === "shops"
                    ? "text-teal-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-teal-500 ${
                    active === "shops" ? "" : "hidden"
                  }`}
                ></span>
                <FaCalendarAlt className="h-5 w-5" />
                <span>Shops</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("student")}
                className={`relative flex items-center space-x-3 text-sm transition-colors ${
                  active === "student"
                    ? "text-teal-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-teal-500 ${
                    active === "student" ? "" : "hidden"
                  }`}
                ></span>
                <FaCalendarAlt className="h-5 w-5" />
                <span>Student</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("analytics")}
                className={`relative flex items-center space-x-3 text-sm transition-colors ${
                  active === "analytics"
                    ? "text-teal-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-teal-500 ${
                    active === "analytics" ? "" : "hidden"
                  }`}
                ></span>
                <MdAnalytics className="h-5 w-5" />
                <span>Analytics</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("wallet")}
                className={`relative flex items-center space-x-3 text-sm transition-colors ${
                  active === "wallet"
                    ? "text-teal-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-teal-500 ${
                    active === "wallet" ? "" : "hidden"
                  }`}
                ></span>
                <IoWallet className="h-5 w-5" />
                <span>Wallet</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("settings")}
                className={`relative flex items-center space-x-3 text-sm transition-colors ${
                  active === "settings"
                    ? "text-teal-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-teal-500 ${
                    active === "settings" ? "" : "hidden"
                  }`}
                ></span>
                <TbSettings2 className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <ul className="space-y-8 p-8">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-sm text-white hover:text-gray-300 transition-colors"
              >
                <FaQuestionCircle className="h-5 w-5" />
                <span>Help</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-sm text-white hover:text-gray-300 transition-colors"
              >
                <FaSignOutAlt className="h-5 w-5" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-8"> </div>
    </div>
  );
};

export default Sidebar;
