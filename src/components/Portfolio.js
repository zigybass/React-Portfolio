import React from "react";
import PetLife from "../images/petlifeNEW.png";
import TravelGuide from "../images/travelguideNEW.png";
import FanClub from "../images/fanclubNEW.png";
import FriendFinder from "../images/friendfinder.png";
import ShoppingApp from "../images/shoppingapp.png";
import Liri from "../images/liri.png";


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
                    <div className="text">Store user's pet info. Add/remove pets or pet sitters</div>
                  </div>
                </div>
                </a>
                <div className="container">
                  <h4>PetLife | <a href="https://github.com/zigybass/PetLife" target="blank">GitHub Page</a> </h4>
                  <p className="appInfo">React/Node/MongoDB/Authentication </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
              <a href="https://arcane-wildwood-00150.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img className="pics" src={FanClub} href="" alt="fanClub"/>
                  <div className="overlay">
                    <div className="text">App with login to store favorite teams and game results</div>
                  </div>
                </div>
                </a>
                <div className="container">
                  <h4>Fan Club | <a href="https://github.com/zigybass/SuperMega_FanClub" target="blank">GitHub Page</a></h4>
                  <p className="appInfo">Express/MySQL/Sequelize</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
              <a href="https://zigybass.github.io/Travel-Guide/" target="blank">
                <div className="portImage">
                  <img className="pics" src={TravelGuide} alt="travelGuide" />
                  <div className="overlay">
                    <div className="text">App that provides various international travel needs</div>
                  </div>
                </div>
                </a>
                <div className="container">
                  <h4>Travel Guide | <a href="https://github.com/zigybass/Travel-Guide" target="blank">GitHub Page</a></h4>
                  <p className="appInfo">Node/APIs/Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
              <a href="https://still-mesa-98774.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img className="pics" src={FriendFinder} alt="friendFinder" />
                  <div className="overlay">
                    <div className="text">Answer 10 questions to find closest celebrity match</div>
                  </div>
                </div>
                </a>
                <div>
                  <h4>Friend Finder | <a href="https://github.com/zigybass/Friend-Finder" target="blank">GitHub Page</a></h4>
                  <p className="appInfo">Matching algorithm in JS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
              <a href="https://tranquil-dawn-00256.herokuapp.com/" target="blank">
                <div className="portImage">
                  <img
                    className="pics"
                    src={ShoppingApp}
                    href=""
                    alt="shoppingApp"
                  />
                  <div className="overlay">
                    <div className="text">Store app with built in inventory management using SQL</div>
                  </div>
                </div>
                </a>
                <div>
                  <h4>Shopping App | <a href="https://github.com/zigybass/Online-Shopping-App" target="blank">GitHub Page</a></h4>
                  <p className="appInfo">Node/Express/MySQL/Sequelize</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="container">
              <a href="https://github.com/zigybass/liri-node-app" target="blank">
                <div className="portImage">
                  <img
                    className="pics"
                    src={Liri}
                    href=""
                    alt="liriApp"
                  />
                  <div className="overlay">
                    <div className="text">CLI App that retrieves data from Spotify/OMDB APIs</div>
                  </div>
                </div>
                </a>
                <div>
                  <h4>Liri Node App | <a href="https://github.com/zigybass/liri-node-app" target="blank">GitHub Page</a></h4>
                  <p className="appInfo">Node/APIs/Axios/File Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};
}

export default Portfolio;
