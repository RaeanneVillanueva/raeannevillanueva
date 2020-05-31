import React from "react"
// import { Link } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Skills />
  </Layout>
)

export default IndexPage
