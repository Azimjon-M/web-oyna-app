import React from "react";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";

import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";

const Home = () => {

    const newsData = [{ src: img1 }, { src: img2 }, { src: img3 }];

    const dispatch = useDispatch();
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

    return (
        <div>
            <Navbar />
            <div className="w-full h-[calc(50vh-96px)]">
                <Carousel data={newsData} />
            </div>
            <div className="w-full h-[calc(50vh-96px)]">
                <Carousel data={newsData} />
            </div>
        </div>
    );
};

export default Home;
