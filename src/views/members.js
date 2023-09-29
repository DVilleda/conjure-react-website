import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "../assets/css/members.css";
import MemberGallery from "../components/membres/member-gallery";

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
      <MemberGallery />
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  );
};

export default Members;
