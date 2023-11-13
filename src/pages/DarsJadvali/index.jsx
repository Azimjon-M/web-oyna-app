import React from "react";
import { DarsJadvallari } from "../../components/DarsJadvallari";
import Navbar from "../../components/Navbar";

const DarsJadvali = () => {
    
    return (
        <div className="w-[100vw] h-[100vh]">
            <Navbar/>
            <DarsJadvallari />
        </div>
    );
};

export default DarsJadvali;
