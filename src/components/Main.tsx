import React from "react";
import Typewriter from "react-ts-typewriter";
import { Slide, Fade } from "react-awesome-reveal";
import "./Main.scss";

import snake from "../img/snake.png";
import musicer from "../img/musicer.png";
import dogShelter from "../img/dog-donation.png";
import profile from "../img/profile.jpg";
import organizer from "../img/organizer.png";

const projects = [
  {
    link: "https://absterko.github.io/html-snake/",
    image: snake,
    className: "ios-template",
    text: "HTML5 game like a snake",
  },
  {
    link: "https://absterko.github.io/musicer/",
    image: musicer,
    className: "android-template",
    text: "Typescript app for fetching the data from iTunes servers",
  },
  {
    link: "",
    image: dogShelter,
    className: "pc-template",
    text: "React and Redux donation form for dog shelters",
  },
  {
    link: "https://absterko.github.io/organizer/",
    image: organizer,
    className: "pc-template",
    text: "Organize your time with me",
  },
];

const socialLinks = [
  { link: "https://github.com/absterko", text: "github" },
  { link: "https://www.linkedin.com/in/richardwolf/", text: "linkedin" },
  { link: "mailto:ab11sup@gmail.com", text: "mail" },
];

const Main: React.FC = () => (
  <>
    <Fade>
      <div className="typewrite">
        <a href="#about">
          <h1>Richard Wolf</h1>
          <span className="typewrite">
            <Typewriter
              speed={70}
              text="about me, hobby projects and contact."
            />
          </span>
        </a>
      </div>
    </Fade>
    <Slide>
      <div className="about">
        <h1 id="about">About me</h1>
        <div className="about-text">
          <p>
            Around year 2019, I fell in love with coding. As a person who loves
            technology, I started to educate myself through various courses
            until the moment when I got a job as a front-end developer at the
            international blockchain start-up project. My task was the
            preparation of a web application, including a design proposal, and
            subsequent connection to blockchain technologies in the Solidity
            language. After a year on the project, I joined a large software
            company as a software developer where I was part of many large and
            small e-commerce projects primarily technologically based on React,
            NodeJS and Mongo, but I also encountered Java, CI processes or work
            with Docker. As a software developer, I went through all phases of
            application development, from solution proposals, implementation to
            testing and bug fixing. In the future, I am interested in working on
            interesting projects with fine people building awesome things.
          </p>
          <img src={profile} alt="" className="profile" />
          <h1>2021 - 2022</h1>
          <p>
            Yearnagnostic.io was the first big project I was taking a part in
            where my job was to prepare react web-app for start-up project. In
            international team we were building a big Web-3 platform written in
            Solidity/React. My response was to prepare the front-end of the
            project and secure the connection between FE and blockchain part of
            the project.
          </p>
          <h1>2022 - 2023</h1>
          <p>
            Other significant projects were carried out under the umbrella of
            Unicorn. While this may sound like a metaphor, at Unicorn, I was
            involved in numerous large-scale initiatives spanning the fields of
            energy, tourism, and management. My role in these projects varied
            from conceptualizing the task's implementation to proposing the
            design, executing the implementation, and verifying the solution's
            correctness through testing. I also contributed to the back-end of
            the application, where I gained insights into the integration of
            various technologies. The experience garnered from these projects
            significantly enhanced my skills in React and Node.js.
          </p>
          <h1> 2023 - present </h1>
          <p>
            Freelance development of the client's project is my focus. My aim is
            to provide the best service to the client and help them grow their
            businesses with the smart solutions resulting from my development
            work. Currently the technologies I'm working with are
            Typescript/Next/Tailwind.
          </p>
        </div>
      </div>
    </Slide>
    <Slide cascade direction="right">
      <div className="container">
        <h1 id="work">Hobby projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="image-container">
            <a href={project.link}>
              <img className={project.className} alt="" src={project.image} />
              <div className="text-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{project.text}</p>
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Slide>
    <Fade>
      <div id="contact" className="contact">
        <h1>Get in touch</h1>
        <nav className="navigation">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.link}>
                <p>{link.text}</p>
              </a>
            </li>
          ))}
        </nav>
      </div>
    </Fade>
  </>
);

export default Main;
