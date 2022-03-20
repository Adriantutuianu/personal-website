import React from "react";
import "./header.scss";
import NavigationMenu from "./NavigationMenu";
import logo from "../icons/adrian-tut-logo.png";

const Header = ({ setTitle }) => {
  return (
    <header className="header">
      <div className="content-wrap">
        <img
          className="logo"
          style={{ height: "100%" }}
          src={logo}
          alt="Product logo"
        />
        <NavigationMenu setTitle={setTitle} />
      </div>
    </header>
  );
};

export default Header;
