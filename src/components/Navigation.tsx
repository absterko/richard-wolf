import React from "react";
import "./Navigation.scss";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavItem target="#about" label="me" />
      <NavItem target="#work" label="work" />
      <NavItem target="#contact" label="contact" />
    </nav>
  );
};

interface NavItemProps {
  target: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ target, label }) => (
  <li>
    <a href={target}>{label}</a>
  </li>
);

export default Navigation;
