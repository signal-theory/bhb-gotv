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
  const [slideOutClass, setSlideOutClass] = useState(false);
  const [activePopup, setActivePopup] = useState(false);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  const [popupHeadline, setPopupHeadline] = useState("Choose Your State");
  const [popupOrigin, setPopupOrigin] = useState(0);
  useEffect(() => {
    localStorage.setItem('myState', activeIndex);
    const storageItems = localStorage.getItem('myState')
    console.log("Local Storage Items: " + storageItems);
    console.log("slideOutClass: " + slideOutClass);

  });
  const handleNav = (index) => {
    setActiveIndex(index);
    scrollTo("#stateTabs");
  };
  const handleStickyBtn = () => {
    if (activeIndex === 0) {
      setActivePopup(!activePopup);
      setSlideOutClass(false)
    } else {
      scrollTo("#checklist");
      setSlideOutClass(true);
      setPopupOrigin(1);
    }
  };
  const handleClose = () => {
    setActivePopup(!activePopup);
    setSlideOutClass(true);
    if (popupOrigin === 1) {
      scrollTo("#checklist");
    } if (popupOrigin === 2) {
      scrollTo("#faqs");
    } if (popupOrigin === 0) {
      scrollTo("#checklist");
    }
  };
  const handleStickyState = (index) => {
    scrollTo("#checklist");
    setActiveIndex(index);
    setSlideOutClass(true);
    if (popupOrigin === 1) {
      setPopupHeadline("Make A Plan To Vote In")
    } if (popupOrigin === 2) {
      setPopupHeadline("Read Election FAQs For")
    } if (popupOrigin === 0) {
      setPopupHeadline("Make A Plan To Vote In")
    }
  };
  const handleFaq = () => {
    activeIndex === 0 ? setActivePopup(!activePopup) : scrollTo("#faqs");
    setPopupOrigin(2);
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
        popupHeadline={popupHeadline}
        slideOutClass={slideOutClass === true ? "slideOut" : null}
        handleStickyBtn={() => handleStickyBtn()}
        stickyClass={activePopup ? "popup show" : "popup"}
        handleClose={() => handleClose()}
        handleSticky1={() => handleStickyState(1)}
        handleSticky2={() => handleStickyState(2)}
        stateBtnClass={slideOutClass === true ? "hide" : null}
        closeBtnClass={slideOutClass === true ? null : "hide"}
        myState={activeIndex === 1 ? "MISSOURI" : activeIndex === 2 ? "KANSAS" : null}
      />

    </>
  )
}
export default Layout
