import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("us");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              apiKey: "9e971c9f76da43c1a663c084017897e1",
              country: region,
              pageSize: 50,
            },
          }
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [region]);

  return (
    <div className="relative bg-gray-950 pt-16 pb-8 overflow-hidden min-h-[60vh] sm:min-h-screen">
      <div className="absolute inset-0 opacity-50 bg-gray-950"></div>
      <div className="text-center text-white z-20 px-4">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Your News From Allover The World
        </h1>
      </div>

      {loading ? (
        <div className="mt-6 sm:mt-8 text-center text-white z-20">
          Loading latest news...
        </div>
      ) : (
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 z-20">
          {news.map((article, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg bg-gray-950 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">
                    {article.title}
                  </h2>
                  <p className="text-white text-sm mt-2 line-clamp-3">
                    {article.description}
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
