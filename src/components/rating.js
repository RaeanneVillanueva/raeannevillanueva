import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import star from "../assets/img/star-icon.png"

const Rating = ({ rating }) => {
  let stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon="star"
        style={{ margin: "1pt", color: "#FCC800", fontSize: "8pt" }}
      />
    )
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "3px" }}>
      {stars}
    </div>
  )
}

export default Rating
