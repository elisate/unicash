import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Services from "../components/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
