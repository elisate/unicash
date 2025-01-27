import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet",
              chart: "mostPopular",
              videoCategoryId: "10",
              regionCode: "US",
              maxResults: 10,
              key: "AIzaSyD_6J8BtyVbMy6ygw9ZVvRuonWYVaclBMo",
            },
          }
        );
        setVideos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="relative bg-gray-950 pt-16 pb-8 overflow-hidden min-h-[60vh] sm:min-h-screen">
      <div className="absolute inset-0 opacity-50 bg-gray-950"></div>
      <div className="text-center text-white z-20 px-4">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Latest Music Videos on YouTube
        </h1>
      </div>

      {loading ? (
        <div className="mt-6 sm:mt-8 text-center text-white z-20">
          Loading latest music videos...
        </div>
      ) : (
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 z-20">
          {videos.map((video, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg bg-gray-950 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative">
                  {video.snippet.thumbnails.high && (
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">
                    {video.snippet.title}
                  </h2>
                  <p className="text-white text-sm mt-2 line-clamp-3">
                    {video.snippet.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
