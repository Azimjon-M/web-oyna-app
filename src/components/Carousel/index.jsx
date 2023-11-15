import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
    Autoplay,
    EffectCoverflow,
    Pagination,
} from "swiper/modules";

import Vid1 from "../../assets/videos/rolik1.mp4";
import Vid2 from "../../assets/videos/rolik2.mp4";
import Vid3 from "../../assets/videos/rolik3.mp4";

const VideoCarousel = () => {
    const videoProperties = [
        {
            id: 1,
            title: "Video 1",
            src: Vid1,
        },
        {
            id: 2,
            title: "Video 2",
            src: Vid2,
        },
        {
            id: 3,
            title: "Video 3",
            src: Vid3,
        },
    ];
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
                    delay: 30000,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {videoProperties &&
                    videoProperties.map((videoObj) => (
                        <SwiperSlide
                            className="relative w-full h-full flex items-start"
                            key={videoObj.id}
                        >
                            <video
                                style={{
                                    maxWidth: "100%",
                                    margin: "0 auto",
                                }}
                                playsInline
                                loop
                                muted
                                controls
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

export default VideoCarousel;
