import React from "react"
import skills from "../data/skills"
import resume from "../data/resume.pdf"
import { Animated } from "react-animated-css"
import ScrollAnimation from "react-animate-on-scroll"

const skillsList = skills.map((item, index) => (
  <div key={index} className="skills-list">
    {item}
  </div>
))

const SkillsSection = () => (
  <div className="skills-div main-div">
    <h2 className="ernie-font skills-mobile-label">My Skills</h2>

    <p className="skills-mobile-desc bradley-font">
      Here are some of the frameworks I used throughout my college years that
      helped build my knowledge towards web designing and the level of my
      expertise on each of them.
    </p>

    <div className="skills-content">
      <div className="skills-icon-div" id="style-4">
        {skillsList}
      </div>

      <Animated animationIn="pulse infinite">
        <a
          className="mobile-resume-btn"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to view my resume ↝
        </a>
      </Animated>

      <div className="skills-description">
        <ScrollAnimation animateIn="fadeIn">
          <p className="bradley-font">
            Here are some of the frameworks I used throughout my college years
            that helped build my knowledge towards web designing and the level
            of my expertise on each of them. Expect the list to expand as I
            venture through new frameworks and tools in trend that can help me
            improve my knowledge and expertise in this field. Know more about my
            experience by viewing my full resume!
          </p>

          <a
            className="skills-btn"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </ScrollAnimation>
      </div>
    </div>
  </div>
)

export default SkillsSection
