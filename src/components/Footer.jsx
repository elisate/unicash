import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h4 className="text-2xl font-semibold text-white mb-4">
          Subscribe to Our Newsletter
        </h4>
        <p className="text-white mb-6">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex justify-center items-center space-x-4 max-w-lg mx-auto mb-6"
        >
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            className="px-4 py-2 w-full rounded-md bg-gray-800 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <div className="flex justify-center space-x-6 text-white">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
