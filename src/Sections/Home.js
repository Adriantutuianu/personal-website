import React from "react";
import "./home.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Home = ({ setTitle }) => {
  return (
    <Element name="home-section" id="home" className="section">
      {" "}
      <div className="left-side">
        <h1 className="title">Hi, I'm Adrian.</h1>
        <h2 className="sub-title">
          A passionate web developer based in Sheffield.
        </h2>
      </div>
      <div className="right-side">Right Side</div>
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
