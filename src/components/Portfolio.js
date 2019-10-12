import React from "react";
import PetLife from "../images/petlife.png"

function Portfolio () {
    return (
        <div>
            <div className="container">
                <div className="jumbotron home">
                    <h1>Portfolio</h1>
                    <div className="row">
                    <div className="col-lg-4">
                    <img className="pics" src={PetLife} alt="petlife"/>
                    <div>
                        <h4>PetLife Project</h4>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <img className="pics" src={PetLife} alt="petlife"/>
                    <div>
                        <h4>PetLife Project</h4>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <img className="pics" src={PetLife} alt="petlife"/>
                    <div>
                        <h4>PetLife Project</h4>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;