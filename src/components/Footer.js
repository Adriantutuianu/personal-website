import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      Copyrights © - {new Date().getFullYear()}
      <span>@Adrian Tut</span> .
    </footer>
  );
};

export default Footer;
