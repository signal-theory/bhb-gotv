import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Countdown from "../components/Countdown"
import Outreach from "../components/Outreach"
import Help from "../components/Help"

const IndexPage = () => (
  <Layout>
    <SEO title="Babes Helpin' Babes - Get Out The Vote 2022" />
    <Countdown></Countdown>
    <Outreach></Outreach>
    <Help></Help>
  </Layout>
)

export default IndexPage
