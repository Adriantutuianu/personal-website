import React from "react";
import About from "./Sections/About";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

const Header = () => {
  return (
    <div>
      <About />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default Header;
