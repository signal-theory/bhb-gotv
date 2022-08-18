import React from "react"
import { Fade } from "react-awesome-reveal"
import { countdownData } from "../data-countdown"

const Countdown = () => {
  return (
    <div className="section" id="countdown">
      <div className="countdown-container">
        <Fade fraction={1}>
          <h1>{countdownData.heading}</h1>
        </Fade>
        <p>{countdownData.paragraph}</p>
      </div>
      <div className="countdown-container">
        <Fade direction="up" duration={500} triggerOnce>
          <div className="countdown ticker">
            <div className="time">33</div>
            <div className="time colon">:</div>
            <div className="time">22</div>
            <div className="time colon">:</div>
            <div className="time">11</div>
          </div>
        </Fade>
        <Fade>
          <div className="countdown legend" triggerOnce>
            <div className="label">Days</div>
            <div className="label"></div>
            <div className="label">Hours</div>
            <div className="label"></div>
            <div className="label">Minutes</div>
          </div>
        </Fade>
      </div>
    </div >
  )
}

export default Countdown
