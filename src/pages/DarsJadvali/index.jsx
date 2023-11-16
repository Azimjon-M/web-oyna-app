import React from "react";
import { DarsJadvallari } from "../../components/DarsJadvallari";
import Navbar from "../../components/Navbar";
import fon from '../../assets/images/bg.png';

const DarsJadvali = () => {
    
    return (
        <div className='relative w-[100vw] h-[100vh]'>
            <div className='absolute top-0 left-0 w-full h-full -z-50'>
                <img src={fon} className='min-w-full min-h-full' alt="fon" />
            </div>
            <Navbar position='relative' color='black' />
            <DarsJadvallari />
        </div>
    );
};

export default DarsJadvali;
