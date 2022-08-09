import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import data from "../yourdata"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")} onKeyDown={() => scrollTo("#work")}>VOTING IN MISSOURI</button>
            <button onClick={() => scrollTo("#about")} onKeyDown={() => scrollTo("#about")}>VOTING IN KANSAS</button>
            <button onClick={() => scrollTo("#contact")} onKeyDown={() => scrollTo("#contact")}>FAQS</button>
            <button onClick={() => scrollTo("#contact")} onKeyDown={() => scrollTo("#contact")}>BHB OUTREACH</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
