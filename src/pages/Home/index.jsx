import React from "react";
import Carousel from "../../components/Carousel";
import CarouselReklama from "../../components/CarouselReklama";
import Navbar from "../../components/Navbar";

import video1 from "../../assets/videos/rolik1.mp4";
import video2 from "../../assets/videos/rolik2.mp4";
import video3 from "../../assets/videos/rolik3.mp4";

const Home = () => {
    const newsData = [{ src: video1 }, { src: video2 }, { src: video3 }];
    const newsDataR = [{ src: video3 }, { src: video2 }, { src: video1 }];
    // Meliboev Azimjon
    return (
        <div className="w-full h-[100vh]">
            <div className="h-[220px]">
                <Navbar />
            </div>
            <div className="w-full h-[calc(80vh-220px)]">
                <Carousel data={newsData} tdelay="26000" />
            </div>
            <div className="w-full h-[20vh] relative overflow-hidden">
                <CarouselReklama data={newsDataR} tdelay="10000" />
                <span className="absolute bottom-0 right-0 text-[16px] z-20 bg-[#ddeaff] text-red-600 font-bold px-4">
                    Biz bilan bog'lanish uchun: +998905702793
                </span>
            </div>
        </div>
    );
};

export default Home;
