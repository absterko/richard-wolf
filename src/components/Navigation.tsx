import React from "react";
import "./Navigation.scss";
type Props = {};

const Navigation = (props: Props) => {
  return (
    <>
      <nav className="navigation">
        <li>
          <a href="#about">Me</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </>
  );
};

export default Navigation;
