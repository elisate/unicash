import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-tr from-blue-100 via-white to-blue-200 pt-16 overflow-hidden min-h-[60vh] sm:min-h-screen">
      <img
        src="layer.png"
        alt="Layer Decoration"
        className="absolute top-0 right-0 w-1/2 sm:w-1/3 md:w-2/6 object-contain"
      />
      <img
        src="left.png"
        alt="Animated Decoration"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 sm:w-1/3 md:w-1/2 object-contain z-10 hidden lg:block animate-pulse"
      />
      <div className="absolute right-4 left-4 sm:left-auto sm:right-16 sm:top-1/2 sm:transform sm:-translate-y-1/2 text-center sm:text-left max-w-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Welcome to IGA Tek:
          <br /> Empowering Communities Through Technology
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-8 leading-tight">
          IGA Tek is a platform that helps local citizens access digital
          literacy resources, including account creation, video tutorials, and
          interactive content. It empowers users to confidently navigate the
          digital world.
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
          <button className="flex items-center bg-[#31ABB4] hover:bg-blue-300 text-white px-6 sm:px-10 py-2 rounded-lg">
            Get Started
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
