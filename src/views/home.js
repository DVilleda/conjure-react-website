import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import "./home.css";
import Navigator from "../components/navigator";

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
          <Navigator></Navigator>
        </div>
      </div>
      <div className="home-container1" style={{justifyContent:"center"}}>
        <section className="grid-container">
          <div className="item1">
            <img
              src="https://conjure.etsmtl.ca/img/sponsors/ETS-color.png"
              alt=""
            />
          </div>
          <div className="item2">
            <img
              src="https://conjure.etsmtl.ca/img/sponsors/LanETS-black.png"
              alt=""
            />
          </div>
          <div className="item3">
            <img
              src="https://conjure.etsmtl.ca/img/sponsors/EA-Motive-black.png"
              alt=""
            />
          </div>
          <div className="item4">
            <img
              src="https://conjure.etsmtl.ca/img/sponsors/Ubisoft-black.png"
              alt=""
            />
          </div>
          <div className="item5">
            <img
              src="https://conjure.etsmtl.ca/img/sponsors/Desjardins-color.png"
              alt=""
            />
          </div>
          <div className="item6">
            <img
              src="https://conjure.etsmtl.ca/img/sponsors/autodesk-logo-primary-rgb-black-large.png"
              alt=""
            />
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
