import React from "react";
import { Link } from "react-scroll";

const ScrollTo = ({ destination, title, setTitle }) => {
  return (
    <Link
      key={0}
      to={destination}
      spy={true}
      smooth={true}
      duration={900}
      delay={100}
      onClick={() => setTitle(title)}
    >
      GO
    </Link>
  );
};

export default ScrollTo;
