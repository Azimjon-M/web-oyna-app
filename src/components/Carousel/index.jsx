import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = ({ data }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full h-[100vh]"
      >
        {data.map(item => (
          <SwiperSlide key={item.id} className="w-full h-[100vh!important]">
            <img className="w-[100%!important] h-[100%!important]" src={item.src} alt="images" />
            <div className="absolute top-10 right-6 ">
              <button className="bg-blue-500 rounded-xl px-6 py-2 text-white">{item.btnName}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
