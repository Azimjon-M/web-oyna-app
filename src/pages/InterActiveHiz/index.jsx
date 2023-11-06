import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import QRCode from "qrcode.react";

const InterActiveHiz = () => {
    const urlMyGov = "https://my.gov.uz/oz/all-services/";
    const urlSharnomaAmal = "https://shartnoma.kspi.uz/";
    const urlSharnomaKant = "https://kontrakt.edu.uz/";
    const urlTurarjoy = "ttj.kspi.uz";
    const urloqishMal = "talaba.kspi.uz";

    const [davInHiz, setDavInHiz] = useState(false);
    const [insInHiz, setInsInHiz] = useState(false);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center gap-y-8 mt-4">
                <h1 className="text-[40px] font-bold text-center">
                    INTERAKTIV HIZMAT TURLARI:
                </h1>
                <div className="flex flex-col gap-y-4">
                    <div
                        onClick={() => setDavInHiz(!davInHiz)}
                        className="bg-blue-200 font-bold text-[30px] flex items-center rounded-md px-10 py-2 cursor-pointer select-none"
                    >
                        Davlat interaktiv hizmatlari
                        <div
                            className={`${
                                davInHiz ? "rotate-[135deg]" : "rotate-[-45deg]"
                            } transition-all ms-5`}
                        >
                            <div className="w-[20px] h-[20px] border-s-[3px] border-b-[3px] border-black" />
                        </div>
                    </div>
                    <div
                        className={`${
                            davInHiz ? "h-auto" : "h-0"
                        } flex justify-center overflow-hidden transition-all bg-gray-100`}
                    >
                        <div className="border-4 border-black p-3 bg-white my-4">
                            <QRCode value={urlMyGov} />
                        </div>
                    </div>

                    <div
                        onClick={() => setInsInHiz(!insInHiz)}
                        className="bg-blue-200 font-bold text-[30px] flex items-center rounded-md px-10 py-2 cursor-pointer select-none"
                    >
                        Institut interaktiv hizmatlari
                        <div
                            className={`${
                                insInHiz ? "rotate-[135deg]" : "rotate-[-45deg]"
                            } transition-all ms-5`}
                        >
                            <div className="w-[20px] h-[20px] border-s-[3px] border-b-[3px] border-black" />
                        </div>
                    </div>
                    <div
                        className={`${
                            insInHiz ? "h-auto" : "h-0"
                        } flex flex-col items-center overflow-hidden transition-all bg-gray-100`}
                    >
                        <h1 className="text-[26px] font-bold mt-10 mb-4">Talaba kontrakt shartnoma</h1>
                        <div className="border-4 border-black bg-white p-3">
                            <QRCode value={urlSharnomaKant} />
                        </div>
                        <h1 className="text-[26px] font-bold mt-10 mb-4">Talaba amalyot shartnoma</h1>
                        <div className="border-4 border-black bg-white p-3">
                            <QRCode value={urlSharnomaAmal} />
                        </div>
                        <h1 className="text-[26px] font-bold mt-10 mb-4">Talaba turar-joy shartnoma</h1>
                        <div className="border-4 border-black bg-white p-3">
                            <QRCode value={urlTurarjoy} />
                        </div>
                        <h1 className="text-[26px] font-bold mt-10 mb-4">Talaba o'qish joyidan ma'lumot</h1>
                        <div className="border-4 border-black bg-white p-3 mb-10">
                            <QRCode value={urloqishMal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterActiveHiz;
