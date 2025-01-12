import React from "react";

const InspiringJourney = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 transition-colors duration-300 hover:text-blue-500">
          Inspiring Journeys
        </h2>
        <p className="text-lg text-gray-600 mb-8 transition-colors duration-300">
          Discover how others in your community have benefited from Digital
          Bridge. Share your success story and inspire others to take the first
          step toward digital empowerment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="/image.jpg"
              alt="Community member 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              "I started with Digital Bridge and now I'm building my own online
              business!"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="/image.jpg"
              alt="Community member 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              "Digital Bridge helped me gain the skills to get my dream job in
              tech!"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="/image.jpg"
              alt="Community member 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              "Thanks to Digital Bridge, I now teach others how to succeed
              online!"
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none">
            Share Your Success Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspiringJourney;
