import React from "react"
import Layout from "../components/layout"
import "../assets/typography.css"
import kunboys from "../assets/img/kunboys.png"
import intercon from "../assets/img/intercon.png"

const PortfolioPage = () => (
  <Layout>
    <div className="title-page py-3">
      <div className="filler"></div>
      <h1 className="text-center">This is my portfolio</h1>
      <p className="text-center m-0">
        Check out my creations!
      </p>
    </div>
    <section className="portfolio-section d-flex flex-column flex-md-row align-items-center justify-content-center p-2 py-5">
      <div className="img-wrapper">
        <img src={intercon} alt="Intercon Regenerative" className="section-img"  />
      </div> 
      <div className="section-desc">
        <h1>Intercon Regenerative</h1>
        <p>
          A freelance project I participated in as a frontend web developer. 
          I was tasked to design, create, and integrate front-end components to the back-end APIs in one of the pages (as linked below). 
          This project is a static website made to showcase the client's business. We utilized VueJS as our frontend framework.
        </p>
        <a className="skills-btn lato-regular" href="https://intercon.vercel.app/targets" target="_blank" rel="noopener noreferrer">
          View Website
        </a>
      </div>
    </section>  

    <section className="portfolio-section kunboys-section d-flex flex-column flex-md-row align-items-center justify-content-center p-2 py-5">
      <div className="section-desc">
        <h1>Kun Boys</h1>
        <p>
          This is a prototype project I designed for kun.boys, a clothing line owned by my brother.
          I focused more on the mobile design as most of his customers are mobile users. I used Figma as my prototype tool.
        </p>
        <a className="skills-btn lato-regular" href="https://bit.ly/3AVe9E0" target="_blank" rel="noopener noreferrer">
          View Sample Prototype
        </a>
      </div>
      <div className="img-wrapper">
        <img src={kunboys} alt="Kun Boys" className="section-img" />
      </div>
    </section>  

    <section className="d-flex flex-column align-items-center justify-content-center p-2 py-5">
      <h1>Component Playground</h1>
      <p>
        Here are some of the components I made using purely HTML and CSS.
        This is where I practice my creativity!
      </p>
      <a className="skills-btn lato-regular" href="https://raeannevillanueva.github.io/playground/" target="_blank" rel="noopener noreferrer">
        Demo Page
      </a>       
    </section>  
  </Layout>
)

export default PortfolioPage
