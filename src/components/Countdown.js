import React from "react"
import Clock from "./atoms/Clock"
import { Fade } from "react-awesome-reveal"
import { countdownData } from "../data/data-countdown"


const Countdown = () => {
  let deadline = "November, 8, 2022 7:00:00";

  return (
    <div className="section" id="countdown">
      <div className="countdown-container">
        <Fade fraction={1}>
          <h1>{countdownData.heading}</h1>
        </Fade>
        <p>{countdownData.paragraph}</p>
      </div>
      <div className="countdown-container">
        <Fade direction="up" duration={500} delay={1000} triggerOnce>
          <div className="countdown ticker">
            <Clock deadline={deadline} />
          </div>
        </Fade>
        <Fade delay={1000} triggerOnce>
          <div className="countdown legend">
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
