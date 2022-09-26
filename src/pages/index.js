import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Countdown from "../components/Countdown"
import Outreach from "../components/Outreach"

const IndexPage = () => (
  <Layout>
    <SEO title="Babes Helpin' Babes - Vote Your Heart Out 2022" />
    <Countdown></Countdown>
    <Outreach></Outreach>
  </Layout>
)

export default IndexPage
