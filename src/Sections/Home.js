import React from "react";
import "./home.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Home = ({ setTitle }) => {
  return (
    <Element name="home-section" id="home" className="section">
      {" "}
      Home
      <ScrollTo
        destination={"about-section"}
        title={"About - Adrian Tut"}
        setTitle={setTitle}
      />
    </Element>
  );
};

export default Home;
