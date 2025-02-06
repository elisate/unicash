import React, { useState, useEffect } from "react";
import { TbLayoutDashboardFilled, TbSettings2 } from "react-icons/tb";
import {
  FaCalendarAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const getActiveClass = (path) => {
    return currentPath === path
      ? "text-teal-500"
      : "text-white hover:text-gray-300";
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setSidebarCollapsed(true);
      } else {
        setIsMobile(false);
        setSidebarCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <div
        className={`fixed z-50 min-h-screen bg-[#6B5540] rounded-r-[20px] p-6 flex flex-col justify-between transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-56"
        } ${isMobile ? "w-16" : "w-56"} items-center`}
      >
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="absolute top-2 left-4 text-white text-2xl"
          >
            <FaBars />
          </button>
        )}

        <nav>
          <ul className="space-y-8 mt-8">
            <li>
              <Link
                to="/dashboard"
                className={`relative flex items-center space-x-3 text-sm transition-colors ${getActiveClass(
                  "/dashboard"
                )}`}
              >
                <TbLayoutDashboardFilled className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Dashboard</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/shops"
                className={`relative flex items-center space-x-3 text-sm transition-colors ${getActiveClass(
                  "/shops"
                )}`}
              >
                <FaCalendarAlt className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Shops</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/students"
                className={`relative flex items-center space-x-3 text-sm transition-colors ${getActiveClass(
                  "/students"
                )}`}
              >
                <FaCalendarAlt className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Student</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/analytics"
                className={`relative flex items-center space-x-3 text-sm transition-colors ${getActiveClass(
                  "/analytics"
                )}`}
              >
                <MdAnalytics className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Analytics</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/wallet"
                className={`relative flex items-center space-x-3 text-sm transition-colors ${getActiveClass(
                  "/wallet"
                )}`}
              >
                <IoWallet className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Wallet</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className={`relative flex items-center space-x-3 text-sm transition-colors ${getActiveClass(
                  "/settings"
                )}`}
              >
                <TbSettings2 className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Settings</span>}
              </Link>
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
                {!isSidebarCollapsed && <span>Help</span>}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-sm text-white hover:text-gray-300 transition-colors"
              >
                <FaSignOutAlt className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Logout</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-8"></div>
    </div>
  );
};

export default Sidebar;
