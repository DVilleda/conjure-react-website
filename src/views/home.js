import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import ImageCard from "../components/image-card";
import Footer from "../components/footer";
import "./home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

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
        <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ImageCard rootClassName="rootClassName"></ImageCard>
              </SwiperSlide>
              <SwiperSlide>
                <ImageCard rootClassName="rootClassName"></ImageCard>
              </SwiperSlide>
              <SwiperSlide>
                <ImageCard rootClassName="rootClassName"></ImageCard>
              </SwiperSlide>
            </Swiper>
          <div className="home-container2">

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
