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
      <Link
        activeClass="active"
        to="home-section"
        spy={true}
        smooth={true}
        duration={900}
        delay={100}
      >
        Home
      </Link>{" "}
    </div>
  );
};

export default Header;
