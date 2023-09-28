// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import ImageCard from "../image-card";
export default function Navigator(props) {
  return (
    <>
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
          <ImageCard
            rootClassName="rootClassName"
            title={"Events"}
            view={"events"}
          ></ImageCard>
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard
            rootClassName="rootClassName"
            title={"GameJam"}
            view={"game-jam"}
          ></ImageCard>
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard
            rootClassName="rootClassName"
            title={"Gala"}
            view={"gala"}
          ></ImageCard>
        </SwiperSlide>
{/*         <SwiperSlide>
          <ImageCard
            rootClassName="rootClassName"
            title={"About"}
            view={"about"}
          ></ImageCard>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
