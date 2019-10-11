import React from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css";

function Navigation() {
  return (
    <nav id="navigation">
      <div className="container">
        <span className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
