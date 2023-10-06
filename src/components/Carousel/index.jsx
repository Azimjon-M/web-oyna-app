import React from "react";
//Youtube
// import YouTube from "react-youtube";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = ({ data, tdelay }) => {
    return (
        <div className="w-full h-full relative">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: tdelay,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {data.map((item, idx) => (
                    <SwiperSlide
                        className="relative flex items-start"
                        key={idx}
                    >
                        <img className="absolute" src={item.src} alt="news" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
