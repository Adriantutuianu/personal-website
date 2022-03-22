import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as ArrowScroll } from "../icons/double-arrow-down.svg";
import "./scrollTo.scss";

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
      <ArrowScroll className="arrow-scroll" />
    </Link>
  );
};

export default ScrollTo;
