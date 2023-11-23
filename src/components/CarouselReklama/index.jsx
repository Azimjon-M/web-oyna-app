import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Autoplay,
    Pagination,
} from "swiper/modules";

const VideoCarouselReclama = ({ data, tdelay}) => {
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
                className="mySwiper object-cover"
            >
                {data &&
                    data.map((videoObj, idx) => (
                        <SwiperSlide
                            className='h-full w-full'
                            key={idx}
                        >
                            <video
                                playsInline
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={videoObj.src}
                                ref={videoEl}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default VideoCarouselReclama;
