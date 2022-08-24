import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = (props) => {
  // COUNTDOWN
  const countDownDate = new Date("Nov 8, 2022 7:00:00").getTime();
  // Get today's date and time
  const now = new Date().getTime();
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const daysLeft = days < 10 ? "0" + days : days;

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <button onClick={props.handleNav1} onKeyDown={props.handleNav1}>VOTING IN MISSOURI</button>
          <button onClick={props.handleNav2} onKeyDown={props.handleNav2}>VOTING IN KANSAS</button>
          <button onClick={props.handleNav3} onKeyDown={props.handleNav3}>FAQS</button>
          <button onClick={props.handleNav4} onKeyDown={props.handleNav4}>MAKE A PLAN</button>
          <button onClick={() => scrollTo("#outreach")} onKeyDown={() => scrollTo("#outreach")}>BHB OUTREACH</button>
          <button onClick={() => scrollTo("#help")} onKeyDown={() => scrollTo("#help")}>HELP</button>
        </div>
      </div>
      <div className="countdown-sticker">
        <h2>{daysLeft}</h2>
        <span>DAYS UNTIL ELECTION</span>
      </div>
    </>
  )
}

export default Navbar
