import React from "react"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import ogImage from "../assets/img/meta-image.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VerticalNav from "../components/nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Raeanne Villanueva" description="Get to know me!" image={ogImage} />
    <VerticalNav />
    <Hero />
    <About />
    <Skills />    
  </Layout>
)

export default IndexPage
