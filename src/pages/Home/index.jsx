import React, { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";

import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import logo from '../../assets/icons/logo.png'

const Home = () => {

    const newsData = [{ src: img1 }, { src: img2 }, { src: img3 }];
    const dispatch = useDispatch();

    useEffect(() => {
        let getMonth = new Date().getMonth() + 1;
    
        if (getMonth === 1 || getMonth === 2 || getMonth === 12) {
            dispatch({ type: "SET_DATA", payload: "qish" });
        } else if (getMonth >= 3 && getMonth <= 5) {
            dispatch({ type: "SET_DATA", payload: "bahor" });
        } else if (getMonth >= 6 && getMonth <= 8) {
            dispatch({ type: "SET_DATA", payload: "yoz" });
        } else if (getMonth >= 9 && getMonth <= 11) {
            dispatch({ type: "SET_DATA", payload: "kuz" });
        } else {
            dispatch({ type: "SET_DATA", payload: "yoz" });
        }
    }, [dispatch])


    return (
        <div>
            <Navbar />
            <div className="h-[300px] flex flex-col items-center justify-center">
                <div className="w-[120px] h-[160px]">
                    <img className="w-full h-full" src={logo} alt="icon" />
                </div>
                <div className="text-[35px] font-bold">
                    QO'QON DAVLAT PEDAGOGIKA INSTITUTI
                </div>
            </div>
            <div className="w-full h-[calc(75vh-272px-300px)]">
                <Carousel data={newsData} tdelay='5000' />
            </div>
            <div className="w-full h-[calc(25vh)] border-b border-red-600">
                <Carousel data={newsData} tdelay='3000' />
                <div className="h-[80px] flex justify-end items-center text-[30px] bg-gray-100 text-red-600 font-bold px-4">
                    Reklama joylashtirish uchun: +998907777777
                </div>
            </div>
        </div>
    );
};

export default Home;
