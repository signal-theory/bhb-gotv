import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Fade } from "react-awesome-reveal"
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
          <button className="mobile-hide" onClick={props.handleNav1} onKeyDown={props.handleNav1}>VOTING IN MISSOURI</button>
          <button className="mobile-hide" onClick={props.handleNav2} onKeyDown={props.handleNav2}>VOTING IN KANSAS</button>
          <button className={props.navBtnClass} onClick={() => scrollTo("#faqs")} onKeyDown={() => scrollTo("#faqs")}>FAQS</button>
          <button className={props.navBtnClass} onClick={() => scrollTo("#checklist")} onKeyDown={() => scrollTo("#checklist")}>MAKE A PLAN</button>
          <button onClick={() => scrollTo("#outreach")} onKeyDown={() => scrollTo("#outreach")}>BHB OUTREACH</button>
        </div>
      </div>
      <Fade style={{ position: 'fixed', zIndex: 100000 }}>
        <div className="countdown-sticker">
          <h2>{daysLeft}</h2>
          <span>DAYS UNTIL ELECTION</span>
        </div>
      </Fade>
    </>
  )
}

export default Navbar
