import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      {" "}
      @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
    </footer>
  );
};

export default Footer;
