import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import '../assets/css/image-card.css'
import logo from "../assets/images/Conjure_Logo.png"

export default function ImageCard(props) {
  return (
    <div
      className={`text-container image-card-feature-card ${props.rootClassName} `}
    >
      <Link to={`/${props.view}`}>
        <img
          alt={props.image_alt}
          src={logo}
          className="image-card-image"
        />
      </Link>
      <div className="centered-text-image">
        <Link to={`/${props.view}`}>
          <h3>{props.title}</h3>
        </Link>
      </div>
    </div>
  );
}

ImageCard.defaultProps = {
  title: "Lorem ipsum",
  image_alt: "image",
  image_src:
    "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000",
  rootClassName: "",
};

ImageCard.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
};
