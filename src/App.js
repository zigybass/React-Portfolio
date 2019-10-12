import React from "react";
import Home from "../src/components/Home";
import "../src/css/style.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import None from "./components/None";
import Portfolio from "./components/Portfolio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import Pdf from "../src/resume.pdf";


class App extends React.Component {
  state = {};

  componentDidMount () {
    console.log("mounted!")
  }

  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={None} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
