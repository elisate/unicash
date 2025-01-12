import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <img
              src="/logo.png"
              alt="IGA Tech Logo"
              className="h-12 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-lg">
              Empowering communities with digital skills. Join the revolution.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
            <ul className="flex justify-center md:justify-start space-x-6">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
            <div className="mt-6 text-center md:text-left">
              <p className="text-sm">Phone: +250 788 788 890</p>
              <p className="text-sm">Email: support@igatech.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} IGA Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
