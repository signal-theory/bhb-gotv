import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Countdown from "../components/Countdown"
import Outreach from "../components/Outreach"

const IndexPage = () => (
  <Layout>
    <SEO title="Babes Helpin' Babes at Signal Theory" description="November 8th is Election Day, and we've got the tools to help you vote." />
    <Countdown></Countdown>
    <Outreach></Outreach>
  </Layout>
)

export default IndexPage
