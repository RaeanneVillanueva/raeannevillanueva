import React from "react"
import skills from "../data/skills"
import resume from "../data/resume.pdf"
import ScrollAnimation from "react-animate-on-scroll"

const skillsList = skills.map((item, index) => (
  <div key={index} className="skills-list">
    {item}
  </div>
))

const SkillsSection = () => (
  <div className="skills-div main-div">
    <div className="skills-content align-items-center">
      <div className="skills-icon-div py-3" id="style-4">
        {skillsList}
      </div>

      <div className="skills-description py-3 py-sm-0">
        <h2>My Skills</h2>

        <ScrollAnimation animateIn="fadeIn">
          <p>      
            Here are some of the frameworks I know. Expect the list to expand as I explore new frameworks.
            Feel free to view my resume for more information about me!
            You can also check my curated portfolio.
          </p>
        </ScrollAnimation>

        <a
            className="skills-btn lato-regular"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            className="skills-btn mx-2 lato-regular"
            href="/portfolio"
            rel="noopener noreferrer"
          >
            View Portfolio
          </a>
      </div>
    </div>
  </div>
)

export default SkillsSection
