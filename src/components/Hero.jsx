import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const quotes = [
  { text: "WEVENT made my wedding truly magical!", position: "top-left" },
  {
    text: "A seamless experience from start to finish.",
    position: "top-right",
  },
  { text: "Their attention to detail is unmatched.", position: "bottom-left" },
  {
    text: "Best event planners I’ve ever worked with!",
    position: "bottom-right",
  },
];

const getPositionClass = (position) => {
  switch (position) {
    case "top-left":
      return "top-8 left-8";
    case "top-right":
      return "top-8 right-8";
    case "bottom-left":
      return "bottom-16 left-8";
    case "bottom-right":
      return "bottom-16 right-8";
    default:
      return "";
  }
};

const Hero = () => {
  return (
    <div
      className="relative h-[70vh] overflow-hidden bg-black"
      style={{
        backgroundImage: `url('https://www.thewaytocoffee.com/wp-content/uploads/2021/06/img_60b5942108f4d.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-6 text-center">
        <motion.div
          className="bg-black/70 border border-black/70 rounded-xl px-4 py-4 md:px-6 md:py-5 backdrop-blur-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-xl font-bold text-white drop-shadow-lg">
            “Crafting Unforgettable Moments.”
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-3 drop-shadow-md">
            At <span className="font-semibold">WEVENT</span>, we bring elegance
            and flavor to every occasion.
          </p>
        </motion.div>
      </div>

      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          className={`absolute ${getPositionClass(
            quote.position
          )} bg-black/70 border border-black/70 rounded-lg px-3 py-2 text-sm text-white backdrop-blur-md max-w-xs`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
          transition={{
            duration: 6,
            delay: index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {quote.text}
        </motion.div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.p
          className="text-gray-300 text-xs mb-2"
          animate={{ opacity: [0, 1], y: [5, 0] }}
          transition={{ duration: 1.8, delay: 2 }}
        >
          Discover More
        </motion.p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
