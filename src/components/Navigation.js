import React from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css";

function Navigation() {
  return (
    <nav id="navigation">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
