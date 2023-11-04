import React from "react";
import Navbar from "../../components/Navbar";
import QRCode from "qrcode.react";

const InterActiveHiz = () => {
    const urlMyGov = "https://my.gov.uz/oz/all-services/";
    const urlSharnomaAmal = "https://shartnoma.kspi.uz/";
    const urlSharnomaKant = "https://kontrakt.edu.uz/";
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center">
                <h1 className="text-[40px] font-bold text-center">
                    HIZMAT TURLARI:
                </h1>
                <div className="flex flex-col items-center gap-y-8 mt-20">
                    <h1 className="text-[30px] font-bold">
                        May.gov.uz interaktiv hizmatlari
                    </h1>
                    <div className="border-4 border-black p-3">
                        <QRCode value={urlMyGov} />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-8 mt-20">
                    <h1 className="text-[30px] font-bold">
                        Talabani amalyot shartnomasi
                    </h1>
                    <div className="border-4 border-black p-3">
                        <QRCode value={urlSharnomaAmal} />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-8 mt-20 mb-20">
                    <h1 className="text-[30px] font-bold">
                        Talabani kantrakt shartnomasi
                    </h1>
                    <div className="border-4 border-black p-3">
                        <QRCode value={urlSharnomaKant} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterActiveHiz;
