import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const stats = [
    { label: "Pro Teachers", value: 12 },
    { label: "Skill Courses", value: 20 },
    { label: "Students Enrolled", value: 300 },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const intervalIds = stats.map((stat, index) => {
        const increment = Math.ceil(stat.value / 100);
        return setInterval(() => {
          setAnimatedValues((prev) => {
            const updatedValues = [...prev];
            if (updatedValues[index] < stat.value) {
              updatedValues[index] = Math.min(
                updatedValues[index] + increment,
                stat.value
              );
            }
            return updatedValues;
          });
        }, 20);
      });

      return () => intervalIds.forEach((id) => clearInterval(id));
    } else {
      setAnimatedValues(stats.map(() => 0));
    }
  }, [isInView, stats]);

  return (
    <div
      className="space-y-20 px-4 sm:px-8 md:px-16 py-12 bg-[#31ABB4]"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            About Us
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100">
            At IGA Tek, we are dedicated to empowering communities by providing
            exceptional educational resources. Our mission is to bridge the gap
            in digital literacy and provide tools for growth and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-[#31ABB4] rounded-lg p-4 shadow-lg transform transition duration-300 hover:bg-[#31ABB4]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                {animatedValues[index].toLocaleString()}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
