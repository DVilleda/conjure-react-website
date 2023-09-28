import React, { useState } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Navigator from "../components/common/navigator";
import "../assets/css/gala.css";
import GalaProject from "../components/gala/gala-projects";

const Gala = (props) => {
  const [selectedYear, setselectedYear] = useState(2023);
  const years = [2023, 2022, 2021, 2020];
  const changeSelectedYear = (year) => {
    setselectedYear(year);
  };
  return (
    <div className="gala-container">
      <HelmetProvider>
        <Helmet>
          <title>Gala - Conjure</title>
          <meta property="og:title" content="Gala - Conjure" />
        </Helmet>
      </HelmetProvider>
      <Header></Header>
      <div className="gala-container1">
        <div className="home-features">
          <Navigator></Navigator>
        </div>
      </div>
      <div className="gala-hero">
        <h1 className="gala-text">Gala Conjure</h1>
        <div className="gala-container3">
          <img
            alt="Gala Conjure"
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
      <div className="game-jam-container1">
        <h2 className="game-jam-text">Éditions</h2>
        <div className="game-jam-gallery">
          {years.map((year) => (
            <button
              key={year}
              className="button-47"
              onClick={() => changeSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div>
        <GalaProject year={selectedYear}></GalaProject>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  );
};

export default Gala;
