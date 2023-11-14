import React from "react";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";

import video1 from "../../assets/videos/rolik1.mp4";
import video2 from "../../assets/videos/rolik2.mp4";
import video3 from "../../assets/videos/rolik3.mp4";

const Home = () => {
    const newsData = [{ src: video1 }, { src: video2 }, { src: video3 }];

    return (
        <div className="w-full h-[100vh]">
            <div className="h-[220px]">
                <Navbar />
            </div>
            <div className="w-full h-[calc(80vh-220px)]">
                <Carousel data={newsData} tdelay="2500" />
            </div>
            <div className="w-full h-[20vh] relative">
                <Carousel data={newsData} tdelay="3000" />
                <span className="absolute bottom-0 right-0 text-[16px] z-20 bg-[#ddeaff] text-red-600 font-bold px-4">
                    Biz bilan bog'lanish uchun: +998907777777
                </span>
            </div>
        </div>
    );
};

export default Home;
