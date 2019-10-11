import React from "react";
import "../css/style.css";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron home">
              <h1>Chris Zeigler</h1>
              <br></br>
              <h4>Full-Stack Developer</h4>
              <h4>React • Node.js • Express • MySQL/Mongo</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
