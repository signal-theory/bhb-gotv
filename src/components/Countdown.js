import React from "react"
import Fade from "react-reveal/Fade"
import { countdownData } from "../data-countdown"

const Countdown = () => {
  return (
    <div className="section" id="countdown">
      <div className="countdown-container">
        <Fade>
          <h1>{countdownData.heading}</h1>
        </Fade>
        <p>{countdownData.paragraph}</p>
      </div>
      <div className="countdown-container">
        <div className="countdown ticker">
          <div className="time">33</div>
          <div className="time colon">:</div>
          <div className="time">22</div>
          <div className="time colon">:</div>
          <div className="time">11</div>
        </div>
        <div className="countdown legend">
          <div className="label">Days</div>
          <div className="label"></div>
          <div className="label">Hours</div>
          <div className="label"></div>
          <div className="label">Minutes</div>
        </div>
      </div>
    </div >
  )
}

export default Countdown
