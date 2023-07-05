import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Education from "./Education";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
