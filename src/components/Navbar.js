import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <button onClick={() => scrollTo("#work")} onKeyDown={() => scrollTo("#work")}>VOTING IN MISSOURI</button>
          <button onClick={() => scrollTo("#about")} onKeyDown={() => scrollTo("#about")}>VOTING IN KANSAS</button>
          <button onClick={() => scrollTo("#contact")} onKeyDown={() => scrollTo("#contact")}>FAQS</button>
          <button onClick={() => scrollTo("#contact")} onKeyDown={() => scrollTo("#contact")}>BHB OUTREACH</button>
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
