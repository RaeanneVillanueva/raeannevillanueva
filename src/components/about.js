import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import aboutMe from "../assets/img/about_me.png"
import aboutCode from "../assets/img/about_code.png"

const AboutSection = () => (
  <div className="about-div main-div">
    <div className="about-bg">
      <div className="about-content">
        <h1 className="ernie-font">About me ...</h1>
        <p className="bradley-font about-p">
          I am a junior computer science student who aims to apply my knowledge
          of web development and software programming through garnering
          experience, with a strong passion to improve and to further enhance my
          skill set.
        </p>
        <p className="bradley-font about-p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et doloremagna aliqua.
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
