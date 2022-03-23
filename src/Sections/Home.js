import React from "react";
import "./home.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Home = ({ setTitle }) => {
  return (
    <Element name="home-section" id="home" className="section">
      {" "}
      <h1>Hi, I am Adrian.</h1>
      <h2>I am a web developer located in Sheffield.</h2>
      <ScrollTo
        destination={"about-section"}
        title={"About - Adrian Tut"}
        setTitle={setTitle}
        uniqueKey={10}
      />
    </Element>
  );
};

export default Home;
