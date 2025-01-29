import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Catering",
    description:
      "Customized menus for your big day, with exceptional quality and service.",
    icon: "🍽️",
  },
  {
    title: "Corporate Events",
    description:
      "Providing delicious meals and snacks for meetings, conferences, and corporate events.",
    icon: "🏢",
  },
  {
    title: "Buffet Services",
    description:
      "A wide range of buffet options to suit all tastes and dietary needs.",
    icon: "🍴",
  },
];

const testimonials = [
  {
    name: "John Doe",
    image: "a.png",
    testimonial:
      "The wedding catering was exceptional! Every dish was perfect, and the service was impeccable. Highly recommend!",
  },
  {
    name: "Jane Smith",
    image: "b.png",
    testimonial:
      "Our corporate event was a huge success thanks to the amazing catering services. Everything was seamless and delicious!",
  },
  {
    name: "Emily Johnson",
    image: "c.png",
    testimonial:
      "The buffet spread was amazing! There was something for everyone, and the quality was top-notch.",
  },
  {
    name: "Michael Brown",
    image: "d.png",
    testimonial:
      "I’ve never had such a wonderful catering experience. They made our event unforgettable, and the food was incredible.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="relative bg-black border border-gray-500 py-12 overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-3/4 bg-contain bg-right bg-no-repeat opacity-80 pointer-events-none"
          style={{ backgroundImage: "url('cate.png')" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-2xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-black/70 p-6 max-w-xs mx-auto rounded-lg shadow-lg text-center border border-gray-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="text-4xl mb-4 text-white">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/70 p-6 max-w-xs mx-auto rounded-lg shadow-lg text-center border border-gray-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {testimonial.name}
                </h3>
                <p className="text-white">{testimonial.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
