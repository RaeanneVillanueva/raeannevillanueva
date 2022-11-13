/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons"
import Header from "../components/header"
import Footer from "./footer"
import "../assets/layout.css"
import "../assets/style.css"
import "../assets/portfolio-styles.css"

const Layout = ({ children }) => {
  library.add(fab, faStar, faCircle)

  return (
    <>
      <link rel="stylesheet" type="text/css" href="fullpage.css" />
      <link rel="stylesheet" href="https://use.typekit.net/jxo3qiy.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
