import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <h1 className="text-3xl font-bold text-center mt-8">Courses</h1>
        <p className="text-center mt-4">
          The Couses Are Not yet Uploaded.
          <br /> Please Wait..
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
