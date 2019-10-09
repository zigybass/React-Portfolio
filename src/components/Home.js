import React from "react";
import "../css/style.css";

class Home extends React.Component {

    state = {}

    render () {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="home">Chris Zeigler</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;