import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import QRCode from "qrcode.react";
import interaktivImg from '../../assets/images/interaktiv.png'
import davlatRasm from '../../assets/images/davlat.png'; // Boshqa rasm uchun manzil
import institutRasm from '../../assets/images/institut.jpg'; // Boshqa rasm uchun manzil

const InterActiveHiz = () => {

    const urlMyGov = "https://my.gov.uz/oz/all-services/";
    const urlSharnomaAmal = "https://shartnoma.kspi.uz/";
    const urlSharnomaKant = "https://kontrakt.edu.uz/";
    const urlTurarjoy = "ttj.kspi.uz";
    const urloqishMal = "talaba.kspi.uz";
    const initImg = <img className='w-[80%] h-[850px] mx-auto' src={interaktivImg} alt='interaktiv rasmi' />
    const [infoContent, setInfoContent] = useState(initImg);

    const davlatXizmatlari = () => {
        setInfoContent(
            <div className='w-[80%] h-[850px] mx-auto'>
                <h2 className='text-5xl mb-10 text-center'>Davlat interaktiv xizmatlari</h2>
                <div className='mx-auto w-[150px] h-[150px] items-center'>
                    <QRCode className='bg-white border border-slate-700 p-5' value={urlMyGov} />
                </div>
            </div>)
    };

    const institutXizmatlari = () => {
        setInfoContent(
            <div className='w-[1000px] h-[850px] mx-auto'>
                <h2 className='text-5xl mb-10 text-center'>Institut interaktiv xizmatlari</h2>
                <div className='flex justify-center items-center flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <h3 className='text-3xl my-5'>Talaba amaliyot shartnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border border-slate-700 p-5' value={urlSharnomaAmal} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <h3 className='text-3xl my-5'>Talaba kontrakt shartnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border border-slate-700 p-5' value={urlSharnomaKant} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <h3 className='text-3xl my-5'>Talaba turar-joy shartnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border border-slate-700 p-5' value={urlTurarjoy} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <h3 className='text-3xl my-5'>Talaba o'qish joyidan ma'lumotnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border border-slate-700 p-5' value={urlSharnomaAmal} />
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <div>
            <Navbar />
            <div className='info h-[70%] mt-28'>
                {infoContent}
            </div>
            <div className='mt-28'>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto mb-5 w-[80%] rounded-lg text-5xl text-white' onClick={institutXizmatlari}>Institut interaktiv xizmatlari</button>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto w-[80%] rounded-lg text-5xl text-white' onClick={davlatXizmatlari}>Davlat interaktiv xizmatlari</button>
            </div>
        </div>
    );
};

export default InterActiveHiz;