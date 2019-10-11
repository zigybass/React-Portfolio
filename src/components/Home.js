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
              <h2>Software Developer</h2>
              <p>React, Node.js, Express, MySQL/Mongo</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
