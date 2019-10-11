import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navTop">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
