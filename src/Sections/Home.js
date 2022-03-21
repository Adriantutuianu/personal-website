import React from "react";
import "./home.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Home = () => {
  return (
    <Element name="home-section" id="home" className="section">
      {" "}
      Home
      <ScrollTo destination={"about-section"} />
    </Element>
  );
};

export default Home;
