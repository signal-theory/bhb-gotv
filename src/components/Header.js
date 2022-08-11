import React from "react"
import Fade from "react-reveal/Fade"
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
//https://www.npmjs.com/package/react-reveal
//import scrollTo from "gatsby-plugin-smoothscroll"
import { headerData } from "../data-header"
import VoteLogo from './atoms/VoteYourHeartOut.js';

const Header = () => {
  return (
    <div className="header primary-yellow" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Pulse>
            <VoteLogo />
          </Pulse>
          <Fade bottom>
            <p>
              {headerData.titlename}
            </p>
          </Fade>
          <Fade bottom>
            <p className="bold">
              {headerData.headername}
            </p>
          </Fade>
          <Jump>
            <p className="bold arrow">
              {headerData.headerParagraph}
              <img src={headerData.arrowImg} alt="down arrow" width={31} />
            </p>
          </Jump>
          <Fade>
            <img className="sticker" src={headerData.stickerImg} alt="Babes Helpin Babes at Signal Theory" width={200} />
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
