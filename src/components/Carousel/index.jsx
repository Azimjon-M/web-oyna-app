import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Autoplay,
    Pagination,
} from "swiper/modules";

const VideoCarousel = ({ data, tdelay}) => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <>
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                autoplay={{
                    delay: tdelay,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={"auto"}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper w-full h-full"
            >
                {data &&
                    data.map((item, idx) => (
                        <SwiperSlide
                            className='w-full h-full'
                            key={idx}
                        >
                            <video 
                                className='object-cover object-center w-full h-[1316px] blur-3xl absolute top-0 left-0 -z-10 mx-auto'
                                playsInline
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={item.src}
                                ref={videoEl}
                            />
                            <video
                                className='translate-y-[50%]'
                                playsInline
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={item.src}
                                ref={videoEl}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default VideoCarousel;
