import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Popover, OverlayTrigger } from "react-bootstrap"

const popover = content => (
  <Popover
    style={{
      fontFamily: "lato",
      color: "#595656",
      fontWeight: "light",
      border: "#FFFFFF",
    }}
  >
    <Popover.Content>{content}</Popover.Content>
  </Popover>
)

const Socials = () => (
  <div className="socials-div">
    <a
      href="https://github.com/RaeanneVillanueva"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className="socials-icon" icon={["fab", "github"]} />
    </a>

    <a
      href="https://www.messenger.com/t/raeanne.villanueva"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className="socials-icon"
        icon={["fab", "facebook-messenger"]}
      />
    </a>

    <OverlayTrigger overlay={popover("raeanne1999@gmail.com")}>
      <FontAwesomeIcon className="socials-icon" icon={["fab", "google"]} />
    </OverlayTrigger>

    <a
      href="https://www.instagram.com/raeannevillanueva/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className="socials-icon" icon={["fab", "instagram"]} />
    </a>
  </div>
)

export default Socials
