import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard from '../components/gallery-card'
import Footer from '../components/footer'
import './members.css'

const Members = (props) => {
  return (
    <div className="members-container">
      <Helmet>
        <title>Members - Conjure</title>
        <meta property="og:title" content="Members - Conjure" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="members-gallery">
        <GalleryCard rootClassName="gallery-card-root-class-name6"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name7"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name8"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name9"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name10"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name11"></GalleryCard>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Members
