import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import DigitalSkills from "../components/DigitalSkills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <DigitalSkills />
      <Footer />
    </div>
  );
};

export default App;
