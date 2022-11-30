import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = (props) => {

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
    </>
  )
}

export default Navbar
