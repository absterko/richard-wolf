import React from "react";
import snake from "../img/snake.png";
import musicer from "../img/musicer.png";
import dogShelter from "../img/dog-donation.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import mail from "../img/mail.png";
import profile from "../img/profile.jpg";
import Typewriter from "react-ts-typewriter";
import { Slide, Fade } from "react-awesome-reveal";
import "./About.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Fade>
        <div className="typewrite">
          <a href="#about">
            <Typewriter
              speed={100}
              text="Richard Wolf - About me, hobby projects and contact."
            />
          </a>
        </div>
      </Fade>
      <Slide>
        <div className="about">
          <div className="about-text">
            <h1 id="about">About me</h1>
            <p>
              Around year 2019, I started to fall in love with coding. As a
              person who loves technology, I started to educate myself through
              various courses until the moment when I got a job as a front-end
              developer at the international blockchain start-up project. My
              task was the preparation of a web application, including a design
              proposal, and subsequent connection to blockchain technologies in
              the Solidity language. After a year on the project, I joined a
              large software company as a software developer where I was part of
              many large and small e-commerce projects primarily technologically
              based on React, NodeJS and Mongo, but I also encountered Java, CI
              processes or work with Docker. As a software developer, I went
              through all phases of application development, from solution
              proposals, implementation to testing and bugfixing. In the future,
              I am interested in working on interesting projects with
              interesting and fine people.
            </p>
            <img src={profile} alt="" className="profile" />
          </div>
        </div>
      </Slide>
      <Slide cascade direction="right">
        <div className="container">
          <h1 id="work">Hobby projects</h1>
          <a href="https://absterko.github.io/html-snake/">
            <img className="ios-template" alt="" src={snake} />
          </a>
          <a href="https://absterko.github.io/musicer/">
            <img className="android-template" alt="" src={musicer} />
          </a>
          <img className="pc-template" alt="" src={dogShelter} />
        </div>
      </Slide>

      <Fade>
        <div id="contact" className="contact">
          <h1>Let's stay in touch</h1>
          <a href="https://github.com/absterko">
            <img src={github} alt="" className="github-logo" />
          </a>
          <a href="https://www.linkedin.com/in/richardwolf/">
            <img src={linkedin} alt="" className="linkedin-logo" />
          </a>

          <a href="mailto:ab11sup@gmail.com">
            <img src={mail} alt="" className="mail-logo" />
          </a>
        </div>
      </Fade>
    </>
  );
};

export default About;
