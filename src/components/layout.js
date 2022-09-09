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
import Help from "./Help"
import "../styles/mains.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const Layout = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  const [scrollPosition, setScrollPosition] = useState(0); const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    //console.log("Active Index: " + activeIndex);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = (index) => {
    setActiveIndex(index);
    scrollTo("#stateTabs");
  };
  return (
    <>
      <Navbar
        handleNav1={() => handleNav(1)}
        handleNav2={() => handleNav(2)}
        navBtnClass={activeIndex === 0 ? "hide" : null}
      ></Navbar>
      <Header
        yourStateHeadline={"SELECT YOUR STATE"}
        tabClass1={`primary-btn ${checkActive(1, "active")}`}
        tabClass2={`primary-btn ${checkActive(2, "active")}`}
        handleState1={() => handleClick(1)}
        handleState2={() => handleClick(2)}
      ></Header>
      {(activeIndex === 1) && <Missouri />}
      {(activeIndex === 2) && <Kansas />}
      <main>{children}</main>
      <Sticky
        popupHeadline={"Choose Your State"}
        slideOutClass={activeIndex === 0 ? "slideOut" : ""}
        handleStickyBtn={() => scrollTo("#checklist")}
        stickyClass={activeIndex === 0 ? "popup show" : "popup"}
        stickyArrowClass={scrollPosition > 4240 ? "sticky-arrow top" : scrollPosition > 2400 && scrollPosition < 4240 ? "sticky-arrow side" : "sticky-arrow bottom"}
        handleSticky1={() => handleNav(1)}
        handleSticky2={() => handleNav(2)}
      />
      <Help />
      <Footer />


    </>
  )
}
export default Layout
