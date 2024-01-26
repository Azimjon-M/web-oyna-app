import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import QRCode from "qrcode.react";
import interaktivImg from '../../assets/images/interaktiv.png'

const InterActiveHiz = () => {

    const urlMyGov = "https://my.gov.uz/oz/all-services/";
    const urlSorov = "https://survey.hemis.uz/"
    const urlSharnomaAmal = "https://shartnoma.kspi.uz/";
    const urlSharnomaKant = "https://kontrakt.edu.uz/";
    const urlTurarjoy = "ttj.kspi.uz";
    const urloqishMal = "talaba.kspi.uz";
    const initImg = <img className='w-[80%] h-[850px] mx-auto' src={interaktivImg} alt='interaktiv rasmi' />
    const [infoContent, setInfoContent] = useState(initImg);

    const davlatXizmatlari = () => {
        setInfoContent(
            <div className='w-[80%] h-[850px] mx-auto'>
                <h2 className='text-5xl mb-[80px] text-center font-medium'>Davlat interaktiv xizmatlari</h2>
                <div>
                    <h3 className='text-3xl text-center font-medium mt-5 mb-[60px]'>Davlat interaktiv xizmatlari</h3>
                    <div className='mx-auto w-[150px] h-[150px] items-center'>
                        <QRCode className='bg-white border-4 border-slate-700 p-3' value={urlMyGov} />
                    </div>
                </div>
            </div>)
    };

    const institutXizmatlari = () => {
        setInfoContent(
            <div className='w-[1000px] h-[850px] mx-auto'>
                <h2 className='text-5xl mb-[30px] text-center font-medium'>Institut interaktiv xizmatlari</h2>
                <h2 className='text-4xl mb-[50px] text-center font-medium'>(Talabalar uchun)</h2>
                <div className='flex justify-center items-center flex-wrap'>
                    <div className='flex justify-center items-center flex-col w-[500px] mb-[80px]'>
                        <h3 className='text-3xl font-medium mt-5 mb-[60px]'>Amaliyot shartnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border-4 border-slate-700 p-3' value={urlSharnomaAmal} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[500px] mb-[80px]'>
                        <h3 className='text-3xl font-medium mt-5 mb-[60px]'>Kontrakt shartnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border-4 border-slate-700 p-3' value={urlSharnomaKant} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[500px]'>
                        <h3 className='text-3xl font-medium mt-5 mb-[60px]'>TTJga ariza berish</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border-4 border-slate-700 p-3' value={urlTurarjoy} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[500px]'>
                        <h3 className='text-3xl font-medium mt-5 mb-[60px]'>O'qish joyidan ma'lumotnoma</h3>
                        <div className='mx-auto w-[150px] h-[150px]'>
                            <QRCode className='bg-white border-4 border-slate-700 p-3' value={urloqishMal} />
                        </div>
                    </div>
                </div>
            </div>)
    }

    const sorovnoma = () => {
        setInfoContent(
            <div className='w-[80%] h-[850px] mx-auto'>
                <h2 className='text-5xl mb-[80px] text-center font-medium'>So'rovnoma</h2>
                <div>
                    <h3 className='text-3xl text-center font-medium mt-5 mb-[60px]'>So'rovnoma</h3>
                    <div className='mx-auto w-[150px] h-[150px] items-center'>
                        <QRCode className='bg-white border-4 border-slate-700 p-3' value={urlSorov} />
                    </div>
                </div>
            </div>)
    };

    return (
        <div>
            <Navbar />
            <div className='info h-[70%] mt-28'>
                {infoContent}
            </div>
            <div className='mt-28'>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto mb-5 w-[80%] rounded-lg text-5xl text-white' onClick={institutXizmatlari}>Institut interaktiv xizmatlari</button>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto mb-5 w-[80%] rounded-lg text-5xl text-white' onClick={davlatXizmatlari}>Davlat interaktiv xizmatlari</button>
                <button className='block bg-fuchsia-700 hover:bg-blue-600 active:bg-blue-700 p-7 mx-auto w-[80%] rounded-lg text-5xl text-white' onClick={sorovnoma}>So'rovnoma</button>
            </div>
        </div>
    );
};

export default InterActiveHiz;