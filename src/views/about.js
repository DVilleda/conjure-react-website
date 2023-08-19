import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Conjure</title>
        <meta property="og:title" content="About - Conjure" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="about-steps">
        <h1 className="about-heading">Qui sommes-nous?</h1>
        <div className="about-container1">
          <div className="about-container2">
            <div className="about-step">
              <h1 className="about-text">
                <span>1</span>
              </h1>
              <h1 className="about-text02">
                <span></span>
                <span>Concept</span>
              </h1>
              <span className="about-text05">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
            <div className="about-step1">
              <h1 className="about-text10">
                <span>2</span>
              </h1>
              <h1 className="about-text12">
                <span>Prototype</span>
              </h1>
              <span className="about-text14">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
            <div className="about-step2">
              <h1 className="about-text19">
                <span>3</span>
              </h1>
              <h1 className="about-text21">
                <span>P</span>
                <span>roduction</span>
              </h1>
              <span className="about-text24">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-features">
        <div className="about-container3"></div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default About
