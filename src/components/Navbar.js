import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <button onClick={props.handleNav1} onKeyDown={props.handleNav1}>VOTING IN MISSOURI</button>
          <button onClick={props.handleNav2} onKeyDown={props.handleNav2}>VOTING IN KANSAS</button>
          <button onClick={props.handleNav3} onKeyDown={props.handleNav3}>FAQS</button>
          <button onClick={() => scrollTo("#outreach")} onKeyDown={() => scrollTo("#outreach")}>BHB OUTREACH</button>
        </div>
      </div>
      <div className="countdown-sticker">
        <h2>100</h2>
        <span>DAYS UNTIL ELECTION</span>
      </div>
    </>
  )
}

export default Navbar
