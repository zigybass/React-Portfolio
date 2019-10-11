import React from "react";
import "../css/style.css";

class Home extends React.Component {

    state = {}

    render () {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron home">
                            <h2>Software Developer Here</h2>
                            <p>React, Node.js, Express, MySQL/Mongo</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                            <h4>More info about stuff</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;