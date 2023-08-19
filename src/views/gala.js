import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ImageCard from '../components/image-card'
import GalleryCard from '../components/gallery-card'
import Footer from '../components/footer'
import './gala.css'

const Gala = (props) => {
  return (
    <div className="gala-container">
      <Helmet>
        <title>Gala - Conjure</title>
        <meta property="og:title" content="Gala - Conjure" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="gala-container1">
        <div className="gala-features">
          <div className="gala-container2">
            <ImageCard rootClassName="rootClassName6"></ImageCard>
            <ImageCard rootClassName="rootClassName7"></ImageCard>
            <ImageCard rootClassName="rootClassName8"></ImageCard>
          </div>
        </div>
      </div>
      <div className="gala-hero">
        <h1 className="gala-text">Gala Conjure</h1>
        <div className="gala-container3">
          <img
            alt="image"
            src="https://conjure.etsmtl.ca/img/gala.jpg"
            className="gala-image"
          />
        </div>
        <h3 className="gala-text1">À propos de l&apos;événement</h3>
        <span className="gala-text2">
          <span>
            Le gala est une activité annuelle permettant aux membres du club de
            présenter sur quoi ils ont travaillé durant l&apos;année aux
            différentes
          </span>
          <br></br>
          <span>
            compagnies du domaine. L&apos;événement se présente sous forme de 5
            à 8 dans les alentours du début du mois d&apos;octobre. Tous les
            gens du
          </span>
          <br></br>
          <span>
            domaine du jeu vidéo sont invités à venir voir les efforts mis par
            la relève.
          </span>
        </span>
      </div>
      <div className="gala-gallery">
        <GalleryCard rootClassName="gallery-card-root-class-name12"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name13"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name15"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name14"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name16"></GalleryCard>
        <GalleryCard rootClassName="gallery-card-root-class-name17"></GalleryCard>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Gala
