import React from "react"
import logo from "../images/logo.png"
import Socials from "../components/socials"
import { animateScroll as scroll } from "react-scroll"

const scrollToTop = () => {
  scroll.scrollToTop()
}

const Footer = () => (
  <div className="footer-div">
    <a href={scrollToTop} onClick={scrollToTop} onKeyDown={scrollToTop}>
      <img alt="logo" src={logo} className="footer-logo" />
    </a>
    <div className="footer-info">
      <Socials />
      <span className="footer-credits">
        © 2020 Rae V. | Deployed using Vercel
      </span>
    </div>
  </div>
)

export default Footer
