import React from "react";
import "./Navigation.scss";
type Props = {};

const Navigation = (props: Props) => {
  return (
    <>
      <nav className="navigation">
        <li>
          <a href="#about">ME</a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </nav>
    </>
  );
};

export default Navigation;
