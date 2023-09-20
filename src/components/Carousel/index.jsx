import React from "react";
import Navbar from '../Navbar';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';

const Carousel = () => {

  const images = [
    {
      id: 1,
      src: img2,
      btnName: 'Yangiliklar'
      
    },
    {
        id: 0,
        src: img1,
        btnName: 'Dars jadval'
    },
    {
      id: 2,
      src: img3,
      btnName: 'Institut haritasi'
    },
  ]

  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar />
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
        {images.map(item => (
          <SwiperSlide key={item.id} className="">
            <img src={item.src} alt="images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
