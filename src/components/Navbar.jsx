import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-none bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col cursor-pointer">
            <Link to="/">
              <img
                src="logo.png"
                alt="IGA Tech Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto absolute md:static top-32 left-0 bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <div className="flex-grow flex justify-center space-x-8 md:pr-8">
              <Link
                to="/"
                className="block text-[20px] font-normal text-gray-800 hover:text-blue-600 px-4 py-2 md:p-0"
              >
                Home
              </Link>
              <Link
                to="/aboutUs"
                className="block text-[20px] font-normal text-gray-800 hover:text-blue-600 px-4 py-2 md:p-0"
              >
                Courses
              </Link>
              <Link
                to="/News"
                className="block text-[20px] font-normal text-gray-800 hover:text-blue-600 px-4 py-2 md:p-0"
              >
                News
              </Link>
              <Link
                to="/Footer"
                className="block text-[20px] font-normal text-gray-800 hover:text-blue-600 px-4 py-2 md:p-0"
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-300 mx-4"></div>

            <div className="flex justify-end md:ml-4">
              <Link to="/login">
                <button className="flex items-center bg-blue-400 hover:bg-blue-600 text-white px-10 py-2 rounded-lg">
                  Login
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
