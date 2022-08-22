/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Header from "./Header"
import Missouri from "./atoms/Missouri"
import Kansas from "./atoms/Kansas"
import Sticky from "./Sticky"
import "../styles/mains.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const Layout = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  useEffect(() => {
    console.log("The activeIndex is " + activeIndex);
  });
  const handleNav = (index) => {
    setActiveIndex(index);
    scrollTo("#stateTabs");
  };
  const [activePopup, setActivePopup] = useState(false);
  const handleSticky = () => {
    activeIndex === 0 ? setActivePopup(!activePopup) : scrollTo("#checklist")
  };
  const handleStickyState = (index) => {
    setActivePopup(!activePopup);
    setActiveIndex(index);
    scrollTo("#checklist");
  };
  const handleFaq = () => {
    activeIndex === 0 ? setActivePopup(!activePopup) : scrollTo("#faqs")
  };
  return (
    <>
      <Navbar
        handleNav1={() => handleNav(1)}
        handleNav2={() => handleNav(2)}
        handleNav3={() => handleFaq()}
      ></Navbar>
      <Header
        tabClass1={`primary-btn ${checkActive(1, "active")}`}
        tabClass2={`primary-btn ${checkActive(2, "active")}`}
        handleState1={() => handleClick(1)}
        handleState2={() => handleClick(2)}
      ></Header>
      {(activeIndex === 1) && <Missouri />}
      {(activeIndex === 2) && <Kansas />}
      <main>{children}</main>
      <Footer
        handleFooterNav1={() => handleFaq()}
      ></Footer>
      <Sticky
        handleSticky={() => handleSticky()}
        stickyClass={activePopup ? "popup show" : "popup"}
        handleClose={() => handleSticky()}
        handleSticky1={() => handleStickyState(1)}
        handleSticky2={() => handleStickyState(2)}
      />

    </>
  )
}
export default Layout
