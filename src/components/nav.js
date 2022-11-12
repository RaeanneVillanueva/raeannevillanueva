import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Popover, OverlayTrigger } from "react-bootstrap"

const popover = content => (
  <Popover
    style={{
      fontFamily: "lato",
      color: "#595656",
      border: "#FFFFFF",
    }}
  >
    <Popover.Content>{content}</Popover.Content>
  </Popover>
)

const VerticalNav = () => (
  <Nav className="nav-bar-sticky">
    <OverlayTrigger
      className="mobile-nav"
      overlay={popover("Hero")}
      placement="left"
    >
      <Link
        activeClass="nav-items-active"
        to="hero-div"
        spy={true}
        smooth={true}
      >
        <FontAwesomeIcon icon="circle" className="nav-items" />
      </Link>
    </OverlayTrigger>

    <OverlayTrigger
      className="mobile-nav"
      overlay={popover("About")}
      placement="left"
    >
      <Link
        activeClass="nav-items-active"
        to="about-div"
        spy={true}
        smooth={true}
      >
        <FontAwesomeIcon icon="circle" className="nav-items" />
      </Link>
    </OverlayTrigger>

    <OverlayTrigger
      className="mobile-nav"
      overlay={popover("Skills")}
      placement="left"
    >
      <Link
        activeClass="nav-items-active"
        to="skills-div"
        spy={true}
        smooth={true}
      >
        <FontAwesomeIcon icon="circle" className="nav-items" />
      </Link>
    </OverlayTrigger>
  </Nav>
)

export default VerticalNav
