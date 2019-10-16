import React from "react";
import PetLife from "../images/petlifeNEW.png";
import TravelGuide from "../images/travelguideNEW.png";
import FanClub from "../images/fanclubNEW.png";
import FriendFinder from "../images/friendfinder.png";
import ShoppingApp from "../images/shoppingapp.png";


class Portfolio extends React.Component {

  linkPet (e) {
    e.preventDefault();
    console.log("linkPet")
  }

  render () {

  return (
    <div>
      <div className="container">
        <div className="jumbotron home">
          <h1>Portfolio</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
              <a href="https://radiant-fjord-94176.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img className="pics" src={PetLife} alt="petlife" />
                  <div className="overlay">
                    <div className="text">Full MERN app with user authentication and SASS</div>
                  </div>
                </div>
                </a>
                <div className="container">
                  <h4>PetLife</h4>
                  <p className="appInfo">React/Node/MongoDB/Authentication </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
              <a href="https://radiant-fjord-94176.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img className="pics" src={FanClub} href="" alt="petlife" />
                  <div className="overlay">
                    <div className="text"></div>
                  </div>
                </div>
                </a>
                <div className="container">
                  <h4>Fan Club</h4>
                  <p className="appInfo">Express/MySQL/Sequelize</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
              <a href="https://radiant-fjord-94176.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img className="pics" src={TravelGuide} alt="travelGuide" />
                  <div className="overlay">
                    <div className="text"></div>
                  </div>
                </div>
                </a>
                <div className="container">
                  <h4>Travel Guide</h4>
                  <p className="appInfo">Node/APIs/Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
              <a href="https://radiant-fjord-94176.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img className="pics" src={FriendFinder} alt="friendFinder" />
                  <div className="overlay">
                    <div className="text"></div>
                  </div>
                </div>
                </a>
                <div>
                  <h4>Friend Finder</h4>
                  <p className="appInfo">Matching algorithm in JS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
              <a href="https://radiant-fjord-94176.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img
                    className="pics"
                    src={ShoppingApp}
                    href=""
                    alt="shoppingApp"
                  />
                  <div className="overlay">
                    <div className="text"></div>
                  </div>
                </div>
                </a>
                <div>
                  <h4>Shopping App</h4>
                  <p className="appInfo">Node/Express/MySQL/Sequelize</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  )};
}

export default Portfolio;
