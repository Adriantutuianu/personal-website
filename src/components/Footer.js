import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <text className="footer-text">
        @{new Date().getFullYear()} - All rights reserved
      </text>
      <span>@Adrian Tut.</span>
    </footer>
  );
};

export default Footer;
