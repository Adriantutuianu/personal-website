import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <Link
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        duration={900}
        delay={100}
      >
        About
      </Link>{" "}
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default Header;
