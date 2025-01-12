import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navbarRef = useRef(null);

  const translations = {
    English: {
      home: "Home",
      courses: "Courses",
      news: "News",
      contact: "Contact",
      login: "Login",
    },
    Kinyarwanda: {
      home: "Ahabanza",
      courses: "Amasomo",
      news: "Amakuru",
      contact: "Twandikire",
      login: "Injira",
    },
    French: {
      home: "Accueil",
      courses: "Cours",
      news: "Actualités",
      contact: "Contact",
      login: "Connexion",
    },
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 w-full z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="logo.png"
                alt="IGA Tech Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
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
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center w-full md:w-auto absolute md:static top-16 left-0 bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 px-4 md:px-0">
              <Link
                to="/"
                className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-4 py-2"
              >
                {translations[language].home}
              </Link>
              <Link
                to="/courses"
                className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-4 py-2"
              >
                {translations[language].courses}
              </Link>
              <Link
                to="/News"
                className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-4 py-2"
              >
                {translations[language].news}
              </Link>
              <Link
                to="/Contact"
                className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-4 py-2"
              >
                {translations[language].contact}
              </Link>
            </div>
            <div className="flex justify-center mt-4 md:mt-0 md:ml-4">
              <Link to="/login">
                <button className="flex items-center bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded-lg">
                  {translations[language].login}
                  <svg
                    className="ml-2 h-4 w-4"
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
            <div className="relative ml-4">
              <button
                onClick={() => setDropdownVisible(!dropdownVisible)}
                className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none text-sm"
              >
                {language}
                <svg
                  className="ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md">
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="block w-full text-left px-4 py-2 text-xs text-gray-800 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("Kinyarwanda")}
                    className="block w-full text-left px-4 py-2 text-xs text-gray-800 hover:bg-gray-100"
                  >
                    Kinyarwanda
                  </button>
                  <button
                    onClick={() => handleLanguageChange("French")}
                    className="block w-full text-left px-4 py-2 text-xs text-gray-800 hover:bg-gray-100"
                  >
                    French
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
