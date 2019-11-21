import React from "react";
import "../css/style.css";
import FontAwesome from "react-fontawesome";
// import Pdf from "../resume.pdf";

function Contact () {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="jumbotron home">
                        <h1>Contact info</h1>
                        <div className="contactMain">
                            <p><FontAwesome className="fas fa-envelope-square tip" size="2x"><span className="tiptext">Email</span> </FontAwesome><span>zigybass@gmail</span></p>

                            <p><a href="https://github.com/zigybass" target="blank"><FontAwesome className="fab fa-github tip" size="2x"><span className="tiptext">GitHub</span></FontAwesome></a></p>

                            <p><a href="https://www.linkedin.com/in/christopher-zeigler/" target="blank"><FontAwesome className="fab fa-linkedin" size="2x"/></a></p>
                            <p>Resume: <a href="https://docs.google.com/document/d/1-ldSKJHM86tnsuqRcYcVZkZHLaW4hn0Iqzuz6An0KxA/edit?ts=5d8a3022" target="blank">Here</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;