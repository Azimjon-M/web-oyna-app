import React from 'react';
import Navbar from "../../components/Navbar";
// import QRCode from "qrcode.react";
import interaktivImg from '../../assets/images/interaktiv.png'

const InterActiveHiz = () => {

    // const urlMyGov = "https://my.gov.uz/oz/all-services/";
    // const urlSharnomaAmal = "https://shartnoma.kspi.uz/";       
    // const urlSharnomaKant = "https://kontrakt.edu.uz/";
    // const urlTurarjoy = "ttj.kspi.uz";
    // const urloqishMal = "talaba.kspi.uz";

    const davlatXizmatlari = () => {
        console.log('Davlat');
    };

    const institutXizmatlari = () => {
        console.log('Institut');
    }

    return (
        <div>
            <Navbar />
            <div className='info h-[70%] mt-28'>
                <img className='w-[80%] mx-auto' src={interaktivImg} alt='interactive rasmi' />
            </div>
            <div className='mt-28'>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto mb-5 w-[80%] rounded-lg text-5xl text-white' onClick={institutXizmatlari}>Institut interaktiv xizmatlari</button>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto w-[80%] rounded-lg text-5xl text-white' onClick={davlatXizmatlari}>Davlat interaktiv xizmatlari</button>
            </div>
        </div>
    );
};

export default InterActiveHiz;
