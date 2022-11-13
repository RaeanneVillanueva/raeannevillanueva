import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => (
  <Navbar className="header-nav">
    <Nav.Item className="">
      <a className="ernie-font header-item" href="/">Home</a>
    </Nav.Item>
    <Nav.Item className="">
      <a className="ernie-font header-item" href="/portfolio">Portfolio</a>
    </Nav.Item>
  </Navbar>
)

export default Header
