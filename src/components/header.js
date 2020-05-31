import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { animateScroll as scroll } from "react-scroll"

const scrollToBottom = () => {
  scroll.scrollToBottom()
}

const Header = () => (
  <Navbar className="header-nav">
    <Nav.Item className="ernie-font header-item" onClick={scrollToBottom}>
      Contact Me!
    </Nav.Item>
  </Navbar>
)

export default Header
