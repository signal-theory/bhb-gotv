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
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('state_index')) || 0 : 0);
  const checkActive = (index, className) => activeIndex === 0 ? "inactive" : activeIndex === index ? className : "";
  const [stickyClick, setStickyClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    localStorage.setItem('state_index', JSON.stringify(activeIndex));
    console.log(activeIndex)
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  const handleNav = (index) => {
    scrollTo("#stateTabs");
    localStorage.setItem("state_index", index);
    setActiveIndex(index);
  };
  const handleStickyBtn = () => {
    setStickyClick(true);
    scrollTo("#checklist");
  };
  return (
    <>
      <Helmet>
        { /*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7MPJPTL3VE"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-7MPJPTL3VE');`}
        </script>
      </Helmet>
      <Navbar
        handleNav1={() => handleNav(1)}
        handleNav2={() => handleNav(2)}
        navBtnClass={activeIndex === 0 ? "hide" : null}
      ></Navbar>
      <Header
        yourStateHeadline={"SELECT YOUR STATE"}
        tabClass1={`primary-btn ${checkActive(1, "active")}`}
        tabClass2={`primary-btn ${checkActive(2, "active")}`}
        handleState1={() => handleNav(1)}
        handleState2={() => handleNav(2)}
      ></Header>
      {(activeIndex === 1) && <Missouri />}
      {(activeIndex === 2) && <Kansas />}
      <main>{children}</main>
      <Sticky
        popupHeadline={"Choose Your State"}
        slideOutClass={activeIndex === 0 ? "slideOut" : stickyClick === true ? "slideOut" : ""}
        handleStickyBtn={() => handleStickyBtn()}
        stickyClass={activeIndex === 0 ? "popup show" : "popup"}
        stickyArrowClass={scrollPosition > 4240 ? "top" : scrollPosition > 2400 && scrollPosition < 4240 ? "side" : "bottom"}
        handleSticky1={() => handleNav(1)}
        handleSticky2={() => handleNav(2)}
      />
      <Help />
      <Footer />


    </>
  )
}
export default Layout
