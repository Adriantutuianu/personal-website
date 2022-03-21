import React from "react";
import { Link } from "react-scroll";

const ScrollTo = ({ destination }) => {
  return (
    <Link
      key={0}
      to={destination}
      spy={true}
      smooth={true}
      duration={900}
      delay={100}
      // onClick={() => setTitle(item.title)}
    >
      GO
    </Link>
  );
};

export default ScrollTo;
