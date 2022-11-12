import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import aboutMe from "../assets/img/about_me.png"
import aboutCode from "../assets/img/about_code.png"

const AboutSection = () => (
  <div className="about-div main-div">
    <div className="about-bg">
      <div className="about-content">
        <h1>About me ...</h1>
        <p className="about-p">
          I am currently a junior frontend developer seeking for an opportunity to surround myself in a creative and open
          environment that would provide guidance and motivation for me to achieve success in my career.
          <br></br><br></br>
          Within a year of working, my tasks revolves around creating and developing user-friendly designs. I am also responsible
          in proposing UI improvements and designing mockups and assets. I easily learned and adapted to tools and frameworks
          used, to which allowed my capabilities to immediately bring business value.
        </p>
      </div>
      <div className="about-vectors">
        <ScrollAnimation offset={50} animateIn="fadeInRight">
          <img className="about-code" alt="vector" src={aboutCode} />
          <img className="about-me" alt="vector" src={aboutMe} />
        </ScrollAnimation>
      </div>
    </div>
  </div>
)

export default AboutSection
