import React from "react";
import "../css/style.css";
// import Pdf from "../resume.pdf";

function Contact () {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="jumbotron home">
                        <h1>Contact info</h1>
                        <div className="contactMain">
                            <p>Email: <span>zigybass@gmail.com</span></p>
                            <p>GitHub: <a href="https://github.com/zigybass" target="blank">Here</a></p>
                            <p>LinkedIn: <a href="https://www.linkedin.com/in/christopher-zeigler/" target="blank">Here</a></p>
                            <p>Resume: <a href="https://docs.google.com/document/d/1-ldSKJHM86tnsuqRcYcVZkZHLaW4hn0Iqzuz6An0KxA/edit?ts=5d8a3022" target="blank">Here</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;