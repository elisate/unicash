import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingYouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet,contentDetails,statistics",
              chart: "mostPopular",
              regionCode: "US",
              videoCategoryId: "24",
              key: "AIzaSyD_6J8BtyVbMy6ygw9ZVvRuonWYVaclBMo",
              maxResults: 30,
            },
          }
        );
        setVideos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching YouTube trending videos:", error);
        setLoading(false);
      }
    };
    fetchTrendingVideos();
  }, []);

  return (
    <div className="relative bg-gray-950 pt-16 pb-8 overflow-hidden min-h-[60vh] sm:min-h-screen">
      <div className="absolute inset-0 opacity-50 bg-gray-950"></div>
      <div className="text-center text-white z-20 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Trending YouTube Entertainment Videos
        </h1>
      </div>

      {loading ? (
        <div className="mt-6 sm:mt-8 text-center text-white z-20">
          Loading trending YouTube videos...
        </div>
      ) : (
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 px-4 z-20">
          {videos.map((video, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg bg-gray-950 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group">
                  {video.snippet.thumbnails.high && (
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-50 transition-all duration-300"
                    />
                  )}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 11l-2 2-2-2m0 0l-2 2 2 2m2-2l2 2-2 2"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <iframe
                      className="w-full h-full absolute top-0 left-0 rounded-lg"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
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

export default TrendingYouTubeVideos;
