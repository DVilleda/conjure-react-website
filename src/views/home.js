import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ImageCard from '../components/image-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Conjure</title>
        <meta property="og:title" content="Conjure" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="home-container1">
        <div className="home-features">
          <div className="home-container2">
            <ImageCard rootClassName="rootClassName"></ImageCard>
            <ImageCard rootClassName="rootClassName1"></ImageCard>
            <ImageCard rootClassName="rootClassName2"></ImageCard>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
