import React from "react"
import Tabs from "./atoms/Tabs"
// import { Fade } from "react-awesome-reveal"
// import { Pulse } from "react-awesome-reveal"
// import { Jump } from "react-awesome-reveal"
//https://www.npmjs.com/package/react-reveal
//import scrollTo from "gatsby-plugin-smoothscroll"
import { headerData } from "../data-header"
import VoteLogo from './atoms/VoteYourHeartOut.js'


const Header = () => {
  return (
    <>
      <div className="header primary-yellow" id="header">
        <div className="container">
          <div className="header-wrapper">
            {/* <Pulse> */}
            <VoteLogo />
            {/* </Pulse> */}
            {/* <Fade bottom> */}
            <p>
              {headerData.titlename}
            </p>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <p className="bold">
              {headerData.headername}
            </p>
            {/* </Fade> */}
            {/* <Jump> */}
            <p className="bold arrow">
              {headerData.headerParagraph}
              <img src={headerData.arrowImg} alt="down arrow" width={31} />
            </p>
            {/* </Jump> */}
            {/* <Fade> */}
            <img className="sticker" src={headerData.stickerImg} alt="Babes Helpin Babes at Signal Theory" width={200} />
            {/* </Fade> */}
          </div>
        </div>
      </div>
      <div className="header-tabs" id="stateTabs">
        <Tabs />
      </div>
    </>
  )
}

export default Header
