import React, { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import { countdownData } from "../data-countdown"


const Countdown = () => {

  // // COUNTDOWN
  const calculateTimeLeft = () => {
    const differenceDST = +new Date(`2022-11-6`) - +new Date();
    const difference = +new Date(`2022-11-8`) - +new Date();
    let timeLeft = {};
    let calcDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    let calcHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let calcMins = Math.floor((difference / 1000 / 60) % 60);

    if (differenceDST > 0) {
      calcHours = calcHours - 1;
    };

    if (difference > 0) {
      timeLeft = {
        days: calcDays < 10 ? "0" + calcDays : calcDays,
        hours: calcHours < 10 ? "0" + calcHours : calcHours,
        minutes: calcMins < 10 ? "0" + calcMins : calcMins,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  //const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <>
        <div className="time">
          {timeLeft[interval]}
        </div>
        <div className="time colon">:</div>
      </>
    );
  });


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
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
