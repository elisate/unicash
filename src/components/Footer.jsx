import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="relative bg-fixed bg-cover bg-center py-16"
        style={{
          backgroundImage:
            "url('https://www.thewaytocoffee.com/wp-content/uploads/2021/06/img_60b5942108f4d.jpg')",
        }}
      ></div>

      <div className="bg-black border border-gray-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">WEVENT</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-2xl hover:text-gray-400">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-gray-400">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-gray-400">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-gray-400">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul>
                <li className="mb-2">123 Catering Lane</li>
                <li className="mb-2">Kigali, Rwanda</li>
                <li className="mb-2">Email: info@wevent.com</li>
                <li className="mb-2">Phone: +250 786 7890</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white p-3 rounded-md mb-4"
                />
                <button
                  type="submit"
                  className="bg-gray-600 text-white p-3 rounded-md hover:bg-gray-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-500 mt-12 pt-6 text-center">
            <p className="text-sm">&copy; 2025 WEVENT. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
