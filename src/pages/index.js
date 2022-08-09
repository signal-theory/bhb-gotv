import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Countdown from "../components/Countdown"
// import Work from "../components/Work"
// import About from "../components/about"
// import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Babes Helpin' Babes - Get Out The Vote 2022" />
    <Header></Header>
    <Countdown></Countdown>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
