import React, { useRef, useEffect } from "react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// SwiperCore.use([Autoplay, Pagination]);

const Carousel = ({ data, tdelay }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.on("slideChange", () =>
                handleSlideChange()
            );
        }
    }, []);

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const activeIndex = swiperRef.current.swiper.realIndex;
            const slides = swiperRef.current.swiper.slides;

            slides.forEach((slide, index) => {
                const video = slide.querySelector(`#video-${index}`);

                if (video) {
                    if (index === activeIndex) {
                        video.play();
                    } else {
                        video.pause();
                        video.currentTime = 0;
                    }
                }
            });
        }
    };

    return (
        <div className="w-full h-full relative">
            <Swiper
                ref={swiperRef}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: tdelay,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper w-[100%] h-[100%]"
            >
                {data &&
                    data.map((item, idx) => (
                        <SwiperSlide
                            className="relative w-full h-full flex items-start"
                            key={idx}
                        >
                            <video
                                controls
                                autoPlay
                                muted
                                className="absolute top-0 left-0 object-cover w-full h-full blur-xl -z-10 border border-red-600"
                                >
                                <source src={item.src} />
                            </video>
                            <video
                                id={`video-${idx}`}
                                controls
                                autoPlay
                                muted
                                className="w-full h-full z-10"
                            >
                                <source src={item.src} />
                            </video>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
