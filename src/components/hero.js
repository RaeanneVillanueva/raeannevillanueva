import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Socials from "../components/socials"
import heroMe from "../assets/img/hero_me.png"

const HeroSection = () => (
  <div className="hero-div main-div">
    <div className="hero-text">
      <div className="hero-vector">
        <ScrollAnimation animateIn="fadeIn">
          <img alt="hero_me" src={heroMe} />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <h1 className="h1-size text-center">Raeanne Villanueva</h1>
      </ScrollAnimation>
    </div>
    <div className="hero-socials">
      <Socials />
    </div>
  </div>
)
export default HeroSection
