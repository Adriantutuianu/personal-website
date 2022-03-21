import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as ArrowScroll } from "../icons/double-arrow-down.svg";

const ScrollTo = ({ destination, title, setTitle, uniqueKey }) => {
  return (
    <Link
      key={uniqueKey}
      to={destination}
      spy={true}
      smooth={true}
      duration={900}
      delay={100}
      onClick={() => setTitle(title)}
    >
      <ArrowScroll />
    </Link>
  );
};

export default ScrollTo;
