import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <h1 className="text-3xl font-bold text-center mt-8">News</h1>
        <p className="text-center mt-4">There is No latest news and updates.</p>
      </main>
      <Footer />
    </div>
  );
};

export default News;
