import React from 'react'

import PropTypes from 'prop-types'

import '../assets/css/gallery-card.css'

const GalleryCard = (props) => {
  return (
    <div className={`gallery-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card-image"
      />
      <h2 className="gallery-card-text">{props.title}</h2>
      <span className="gallery-card-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  title: 'Project Title',
  image_alt: 'image',
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
}

GalleryCard.propTypes = {
  image_src: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard
