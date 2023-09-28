import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/common/header";
import GalleryCard from "../components/gallery-card";
import Footer from "../components/common/footer";
import "../assets/css/members.css";

const Members = (props) => {
  return (
    <div className="members-container">
      <HelmetProvider>
        <Helmet>
          <title>Members - Conjure</title>
          <meta property="og:title" content="Members - Conjure" />
        </Helmet>
      </HelmetProvider>
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
  );
};

export default Members;
