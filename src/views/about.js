import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Navigator from "../components/common/navigator";
import "../assets/css/about.css";
import "../assets/css/home.css";

const About = (props) => {
  return (
    <div className="about-container">
      <HelmetProvider>
        <Helmet>
          <title>About - Conjure</title>
          <meta property="og:title" content="About - Conjure" />
        </Helmet>
      </HelmetProvider>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-container1">
        <div className="home-features">
          <Navigator></Navigator>
        </div>
      </div>
      <div className="about-steps">
        <h1 className="about-heading">Qui sommes-nous?</h1>
        <div className="about-container1">
          <div className="about-container2">
            <div className="about-step">
              <h1 className="about-text-number">
                <span>1</span>
              </h1>
              <h1 className="about-text-number-text ">
                <span>Apprendre</span>
              </h1>
              <p className="about-text-content">
                <span>
                  En plus d'avoir des membres avec de l'expérience dans
                  l'industrie, nous offrons à nos membres une multitude de
                  formations sous différents langages et disciplines, dont une
                  formation intégrale pour Unreal Engine et les conférences au
                  MIGS.
                </span>
                <br></br>
              </p>
            </div>
            <div className="about-step">
              <h1 className="about-text-number">
                <span>2</span>
              </h1>
              <h1 className="about-text-number-text ">
                <span>Équipement</span>
              </h1>
              <p className="about-text-content">
                <span>
                  Le club offre aux membres tout l'équipement nécessaire pour
                  produire vos jeux. Cela inclut une installation complète de
                  réalité virtuelle.
                </span>
                <br></br>
              </p>
            </div>
            <div className="about-step">
              <h1 className="about-text-number">
                <span>3</span>
              </h1>
              <h1 className="about-text-number-text ">
                <span>Compétitions</span>
              </h1>
              <p className="about-text-content">
                <span>
                  En tant que membres, vous serez accomodés pour les divers
                  compétitions et événement que le club permet d'assister. Cela
                  donne accès à diverses opportunités de réseautage.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-features">
        <div className="about-container3">
          <div className="contact-data">
            <iframe
              title="Map ETS"
              width="100%"
              height="600"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJB5eDqmAayUwR9kVcpBmnMrc&amp;key=AIzaSyDa73RDd5rn0c6jqn8nAXKh01L8NfrQGQM"
              allowFullScreen=""
            ></iframe>
            <div style={{ padding: "10px 0 10px 10px" }}>
              1219 William, Montreal <br></br>
              Local D-2020 <br></br>
              <a
                href="mailto:conjure@ens.etsmtl.ca"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                conjure@ens.etsmtl.ca
              </a>
              <br></br>
              <a
                href="tel:5143968800"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                (514) 396-8800 poste: #7713
              </a>
            </div>
          </div>
          <div>
            <h2 className="sub-title">Membres</h2>
            <p>
              Vous êtes étudiant ou étudiante à l'ÉTS et vous êtes intéressé au
              développement de médias interactifs / jeux vidéos ? Venez au local
              pour nous parler. On vous donnera un laboratoire de bienvenue qui
              vous donnera les outils nécessaires pour vous débrouiller dans le
              domaine. N'hésitez pas à nous poser des questions. Une fois le
              laboratoire remis, vous aurez une formation nécessaire fournie par
              l'école et vous serez membres à part entière. Vous aurez
              finalement accès à tous les avantages d'être dans notre club.
            </p>
            <br></br>
            <p>
              Les membres ont accès à des formations en ligne et d'autres
              fournies par nos commanditaires. De plus, ils ont accès à notre
              équipement pour faire leurs différents projets. Une fois par
              année, on organise un événement servant à mettre en valeur le
              travail fourni par les membres où on invite les recruteurs des
              compagnies en jeux vidéos pour qu'ils puissent vous connaitre
              ainsi que vous donner une chance de faire des contactes dans
              l'industrie et de trouver des stages plus facilement.
            </p>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default About;
