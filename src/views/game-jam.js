import React, { useState } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "../assets/css/game-jam.css";
import Navigator from "../components/common/navigator";
import GameJamProject from "../components/game-jam/game-jam-projects";

const GameJam = (props) => {
  const [selectedYear, setselectedYear] = useState(2023);
  const years = [2023, 2022, 2021, 2020];
  const changeSelectedYear = (year) => {
    setselectedYear(year);
  };
  return (
    <div className="game-jam-container">
      <HelmetProvider>
        <Helmet>
          <title>GameJam - Conjure</title>
          <meta property="og:title" content="GameJam - Conjure" />
        </Helmet>
      </HelmetProvider>
      <Header></Header>
      <div className="game-jam-container1">
        <div className="home-features">
          <Navigator></Navigator>
        </div>
      </div>
      <div className="game-jam-hero">
        <h1 className="game-jam-text">Montréal Gamejam</h1>
        <div className="game-jam-container3">
          <img
            alt="Conjure GameJam"
            src="https://conjure.etsmtl.ca/img/mtlgj.jpg"
            className="game-jam-image"
          />
        </div>
        <h3 className="game-jam-text01">À propos de l&apos;événement</h3>
        <div className="game-jam-text02">
          <p>
            L’organisation du Montreal Game Jam est constituée de l’union de
            multiples universités et professionnels de Montréal dont le mandat
            commun est de promouvoir l’industrie du jeu vidéo.
          </p>
          <br></br>
          <p>
            Nous rassemblons étudiants et professionnels pour stimuler la
            création et l’expérimentation de nouvelles idées et concepts. Nous
            voulons renforcer la collaboration avec la communauté du jeu et
            ainsi offrir la possibilité de créer de nouveaux liens à travers cet
            événement.
          </p>
          <br></br>
          <p>
            C’est en supportant le développement de cette communauté que nous
            pourrons renforcer l’expertise générale. Considérant la forte
            présence médiatique, nos partenaires pourront ainsi démontrer leur
            intérêt à promouvoir la culture du jeu. C’est le temps de découvrir
            de nouveaux talents, de cultiver de nouvelles idées et de former de
            nouveaux liens.
          </p>
          <br></br>
          <p>
            Que les participants soient à l&apos;université ou de
            l&apos;industrie, l’événement offre la possibilité de briser cette
            barrière et ainsi collaborer. Nous voulons surtout que vous ayez du
            plaisir à accomplir ce défi et réaliser ce qui vous passionne!
          </p>
          <br></br>
          <p> Plus d&apos;information sur le site du Montreal Game Jam</p>
          <br></br>
          <p>Pour plus d’info: https://mtlgj.org/lang/fr/index.html</p>
        </div>
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
        <GameJamProject year={selectedYear}></GameJamProject>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  );
};

export default GameJam;
