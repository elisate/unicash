import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "1.jpg", comment: "Delicious and fresh! Everyone loved the flavor." },
  {
    src: "2.jpg",
    comment: "Coffee was a hit at the event! Highly recommended.",
  },
  { src: "3.jpg", comment: "The hamburgers were amazing, such a big hit!" },
  { src: "4.jpg", comment: "A cozy coffee setup that everyone enjoyed." },
  {
    src: "5.jpg",
    comment: "Perfectly served meals. Will definitely hire again!",
  },
  { src: "6.jpg", comment: "Great variety of dishes, something for everyone!" },
  { src: "7.jpg", comment: "Professional service and delicious food!" },
  { src: "8.jpg", comment: "Everything was served with love and care!" },
];

const Hero = () => {
  return (
    <div
      className="relative bg-black bg-fixed bg-cover bg-center pb-16"
      style={{
        backgroundImage:
          "url('https://www.thewaytocoffee.com/wp-content/uploads/2021/06/img_60b5942108f4d.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-5xl mx-auto relative z-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:translate-y-2 relative"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
          >
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover rounded-lg transition-transform duration-500 ease-in-out"
            />
            <motion.div
              className="absolute bottom-4 right-4 text-4xl text-white cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              ❤️
            </motion.div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/70 text-white p-2 rounded-md text-center w-full mb-4">
              <p className="text-sm">{image.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
