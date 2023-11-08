import React from "react";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";

import img1 from "../../assets/videos/rolik1.mp4";
import img2 from "../../assets/videos/rolik1.mp4";
import img3 from "../../assets/videos/rolik1.mp4";

const Home = () => {
    const newsData = [{ src: img1 }, { src: img2 }, { src: img3 }];

    return (
        <div className="w-full h-[100vh]">
            <div className="h-[220px]">
                <Navbar />
            </div>
            <div className="w-full h-[calc(80vh-220px)]">
                <Carousel data={newsData} tdelay="30000" />
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
