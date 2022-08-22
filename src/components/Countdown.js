import React from "react"
import { Fade } from "react-awesome-reveal"
import { countdownData } from "../data-countdown"

const Countdown = () => {
  // COUNTDOWN
  const countDownDate = new Date("Nov 8, 2022 7:00:00").getTime();
  // Get today's date and time
  const now = new Date().getTime();
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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
            <div className="time">{days}</div>
            <div className="time colon">:</div>
            <div className="time">{hours}</div>
            <div className="time colon">:</div>
            <div className="time">{minutes}</div>
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
