import React from "react"
import Fade from "react-reveal/Fade"
//https://www.npmjs.com/package/react-reveal
//import scrollTo from "gatsby-plugin-smoothscroll"
import data from "../yourdata"
import VoteLogo from './VoteYourHeartOut.js';
import arrowDown from '../images/arrowDownCircle.svg'

const Header = () => {
  return (
    <div className="header primary-yellow" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <VoteLogo />
          </Fade>
          <Fade bottom>
            <p>
              {data.titlename}
            </p>
          </Fade>
          <Fade bottom>
            <p className="bold">
              {data.headername}
            </p>
          </Fade>
          <Fade bottom>
            <p className="bold arrow">
              {data.headerParagraph}
              <img src={arrowDown} alt="down arrow" width={31} />
            </p>
          </Fade>
        </div>
        <div className="header-tabs">
          <button className="primary-btn">MISSOURI</button><button className="primary-btn">KANSAS</button>
        </div>
      </div>
    </div>
  )
}

export default Header
