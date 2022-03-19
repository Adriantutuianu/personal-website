import React from "react";
import "./contact.scss";
import { Element } from "react-scroll";
import { ReactComponent as MailImage } from "../icons/mail-image.svg";
import { ReactComponent as LinkedInImage } from "../icons/linkedin-logo.svg";
import { ReactComponent as GithubImage } from "../icons/github.svg";

const Contact = () => {
  return (
    <Element name="contact-section" id="contact" className="section">
      <h1>
        Let`s get <span> in touch </span>
      </h1>
      <div className="contact-wrap">
        <a
          className="item item--mail"
          href="mailto:adrian.tut20@yahoo.com?subject=Contact Adrian"
          title="Email Adrian at adrian.tut20@yahoo.com"
        >
          <MailImage />
          <span>adrian.tut20@yahoo.com</span>
        </a>
        <a
          className="item item--linkedin"
          href="https://www.linkedin.com/in/adrian-tutuianu"
          title="LinkedIn"
        >
          <LinkedInImage />
          <span>/in/adriantutuianu</span>
        </a>
        <a
          className="item item--github"
          href="https://github.com/Adriantutuianu"
          title="github"
        >
          <GithubImage />
          <span>Adriantutuianu</span>
        </a>
      </div>
    </Element>
  );
};

export default Contact;
