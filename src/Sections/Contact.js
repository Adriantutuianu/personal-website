import React from "react";
import "./contact.scss";
import { Element } from "react-scroll";
import { ReactComponent as MailImage } from "../icons/mail.svg";
import { ReactComponent as LinkedInImage } from "../icons/linkedin.svg";
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
          href="mailto:office@yahoo.com?subject=Contact Adrian"
          title="Email Adrian at office@yahoo.com"
          target="_blank"
          rel="noreferrer"
        >
          <MailImage />
          <span>Mail me</span>
        </a>
        <a
          className="item item--linkedin"
          href="https://www.linkedin.com/in/adrian-tutuianu"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInImage />
          <span>/in/adriantutuianu</span>
        </a>
        <a
          className="item item--github"
          href="https://github.com/Adriantutuianu"
          title="github"
          target="_blank"
          rel="noreferrer"
        >
          <GithubImage />
          <span>Adriantutuianu</span>
        </a>
      </div>
    </Element>
  );
};

export default Contact;
