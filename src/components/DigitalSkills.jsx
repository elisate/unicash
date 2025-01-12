import React from "react";

const DigitalSkillsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 pt-16 px-6 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">
            Learn Digital Skills
          </h1>
          <h2 className="text-2xl font-semibold animate__animated animate__fadeIn animate__delay-1s">
            Master the Basics of Digital Literacy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="group bg-white p-6 rounded-lg shadow-lg w-80 h-120 relative hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            <img
              src="/Img1.jpg"
              alt="Smartphone Tutorial"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-all duration-300">
                Video Tutorials
              </h3>
              <ul className="list-disc list-inside text-md leading-loose mt-2 text-gray-600 group-hover:text-white transition-all duration-300">
                <li>How to use a smartphone</li>
                <li>Navigating social media safely</li>
                <li>Understanding online payments</li>
                <li>Creating and managing an email account</li>
              </ul>
            </div>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-lg w-80 h-120 relative hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            <img
              src="/Img1.jpg"
              alt="Interactive Quiz"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-all duration-300">
                Interactive Quizzes
              </h3>
              <p className="text-lg mt-2 text-gray-600 group-hover:text-white transition-all duration-300">
                Test your knowledge and track your progress through fun and
                engaging quizzes.
              </p>
            </div>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-lg w-80 h-120 relative hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            <img
              src="/Img1.jpg"
              alt="Download Resources"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-all duration-300">
                Downloads
              </h3>
              <p className="text-lg mt-2 text-gray-600 group-hover:text-white transition-all duration-300">
                Free guides and resources available for offline learning, so you
                can study anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSkillsPage;
