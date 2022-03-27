import React from "react";
import "./home.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";
import Lottie from "react-lottie";
import * as animationData from "../icons/39610-design.json";

const Home = ({ setTitle }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
      <Lottie options={defaultOptions} />
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
