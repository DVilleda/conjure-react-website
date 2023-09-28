import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/common/header";
import GalleryCard from "../components/gallery-card";
import Footer from "../components/common/footer";
import "../assets/css/game-jam.css";
import Navigator from "../components/common/navigator";

const GameJam = (props) => {
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
        <h1 className="game-jam-text">Montréal Gamjam</h1>
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
      <div className="game-jam-gallery">
        <GalleryCard rootClassName="rootClassName"></GalleryCard>
        <GalleryCard
          image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName1"
        ></GalleryCard>
        <GalleryCard
          image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName2"
        ></GalleryCard>
        <GalleryCard
          image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName3"
        ></GalleryCard>
        <GalleryCard
          image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName4"
        ></GalleryCard>
        <GalleryCard
          image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName5"
        ></GalleryCard>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  );
};

export default GameJam;
