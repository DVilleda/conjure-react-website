import React from 'react'

import PropTypes from 'prop-types'

import './image-card.css'

const ImageCard = (props) => {
  return (
    <div className={`image-card-feature-card ${props.rootClassName} `}>
      <h2 className="image-card-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="image-card-image"
      />
    </div>
  )
}

ImageCard.defaultProps = {
  title: 'Lorem ipsum',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
}

ImageCard.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ImageCard
