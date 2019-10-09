import React from 'react';
import Home from "../src/components/Home";
import "../src/css/style.css";
import { NavLink, Router } from "react-router-dom";
// import Contact from "../src/components/Contact"

class App extends React.Component {

  state = {}
  
  render () {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Router>
        <NavLink to="/">Home></NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </Router>
      </div>
    </nav>
    <Home />
    </>
  );
}
}

export default App;
