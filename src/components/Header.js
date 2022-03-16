import React from "react";
import "./header.scss";
import NavigationMenu from "./NavigationMenu";

const Header = ({ setTitle }) => {
  return (
    <header className="header">
      <div className="content-wrap">
        <p className="logo">LOGO</p>
        <NavigationMenu setTitle={setTitle} />
      </div>
    </header>
  );
};

export default Header;
