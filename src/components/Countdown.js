import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Countdown = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="countdown-container">
          <Fade bottom>
            <h1>{data.countdownHeading}</h1>
          </Fade>
          <p>{data.countdownPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Countdown
