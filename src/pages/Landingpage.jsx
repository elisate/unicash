import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import DigitalSkills from "../components/DigitalSkills";
import InspiringJourney from "../components/InspiringJourney";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <AboutUs />
      <DigitalSkills />
      <InspiringJourney />
      <Footer />
    </div>
  );
};

export default App;
