import React from "react"
import Rating from "../components/rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const skills = [
  <div>
    <FontAwesomeIcon
      className="skills-icons"
      style={{ color: "#CB3837" }}
      icon={["fab", "npm"]}
    />
    <Rating rating="5" />
  </div>,
  <div>
    <FontAwesomeIcon
      style={{ color: "#659B60" }}
      className="skills-icons"
      icon={["fab", "node"]}
    />
    <Rating rating="3" />
  </div>,
  <div>
    <FontAwesomeIcon
      style={{ color: "#F05033" }}
      className="skills-icons"
      icon={["fab", "git-alt"]}
    />
    <Rating rating="3" />
  </div>,
  <div>
    <FontAwesomeIcon
      style={{ color: "#356B99" }}
      className="skills-icons"
      icon={["fab", "python"]}
    />
    <Rating rating="3" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#DE4B25" }}
      className="skills-icons"
      icon={["fab", "html5"]}
    />
    <Rating rating="5" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#0C70B3" }}
      className="skills-icons"
      icon={["fab", "css3-alt"]}
    />
    <Rating rating="5" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#D4B42B" }}
      className="skills-icons"
      icon={["fab", "js"]}
    />
    <Rating rating="5" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#262626" }}
      className="skills-icons"
      icon={["fab", "figma"]}
    />
    <Rating rating="4" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#5ADAFD" }}
      className="skills-icons"
      icon={["fab", "react"]}
    />
    <Rating rating="4" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#41B883" }}
      className="skills-icons"
      icon={["fab", "vuejs"]}
    />
    <Rating rating="3" />
  </div>,

  <div>
    <FontAwesomeIcon
      style={{ color: "#563D7C" }}
      className="skills-icons"
      icon={["fab", "bootstrap"]}
    />
    <Rating rating="5" />
  </div>,
]

export default skills
