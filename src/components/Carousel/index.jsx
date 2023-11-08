import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
                className="mySwiper w-[100%] h-[100%]"
            >
                {data && data.map((item, idx) => (
                    <SwiperSlide
                        className="relative w-full h-full flex items-start"
                        key={idx}
                    >
                            <video controls autoPlay muted className="absolute top-0 left-0 object-cover w-full h-full blur-xl -z-10 border border-red-600">
                                <source src={item.src} />
                            </video>
                            <video controls autoPlay muted className="w-full h-full z-10">
                                <source src={item.src} />
                            </video>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
