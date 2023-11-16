import React, { useState } from "react";


export const DarsJadvallari = () => {
    
    const [selectFakutet, setSelectFakutet] = useState(null);
    const [selectedYonalish, setSelectedYonalish] = useState(null);
    const [selectedKurs, setSelectedKurs] = useState(null);
    const [selectedImgSRC, setSelectedImgSRC] = useState(null);

    const data = {
            "Fizika Matematika": {
                "Matematika va Informatika": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Matematika o'qitish meto'dikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Fizika va Astranomiya": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Fizika va Astranomiya o'qitish meto'dikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Pedagogika": {
                "Pedagogika va psixologiya": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Psixalogiya (amaliy psixologiya)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Maxsus pedagogika (logopediyaa)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Defectologiya (surdopedagogika)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Defectologiya (oligofrenopedagogika)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Defectologiya (logopediya)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Tarix": {
                "Tarix": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Tarix o'qitish metodikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Milliy g'oya ma'naviyat asoslari va huquq ta'limi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Milliy hunarmandchilik va amaliy san'at": {
                "Musiqa ta'limi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Tasviriy san'at va muhandislik grafikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Texnologik ta'lim": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Rus tili va adabiyoti": {
                "Ona tili va adabiyoti (rus tili va asdabiyoti)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "O'zga tilli guruhlarda rus tili": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Ona tili va adabiyoti (rus tili va adabiyoti (o'zga tilli guruhlarda))": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Tabiiy fanlar": {
                "Kimyo": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Kimyo o'qitish metodikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Biologiya": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Biologiya o'qitish metodikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Geografiya va iqtisodiy bilim asoslari": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Geografiya o'qitish metodikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Horijiy tillar": {
                "Horijiy til va adabiyoti (ingliz tili)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Maktabgach va boshlang'ich ta'limda horijiy til (ingliz tili)": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "O'zbek tili va adabiyoti": {
                "O'zbek tili va adabiyoti": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                }
            },
            "Maktabgacha ta'lim": {
                "Maktabgacha ta'lim": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Maktabgacha ta'lim psixologiyasi va pedagogikasi": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Maktab menejmenti": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Boshlang'ich ta'lim": {
                "Boshlang'ich ta'lim": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
                "Boshlang'ich ta'lim va sport tarbiyaviy ish": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
            "Jismoniy madanyat": {
                "Jismoniy madanyat": {
                    "1 - kurs": ['../../assets/images/darsJadvali/'],
                    "2 - kurs": ['../../assets/images/darsJadvali/'],
                    "3 - kurs": ['../../assets/images/darsJadvali/'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
    };

    const handleFakultetClick = (objectKey) => {
        setSelectFakutet(objectKey);
        setSelectedYonalish(null);
        setSelectedKurs(null);
        setSelectedImgSRC(null);
    };

    const handleYonalishClick = (nestedObjectKey) => {
        setSelectedYonalish(nestedObjectKey);
        setSelectedKurs(null);
        setSelectedImgSRC(null);
    };

    const handleKursClick = (KursKey) => {
        setSelectedKurs(KursKey);
        setSelectedImgSRC(null);
    };

    const handleImgSRCClick = (ImgSRC) => {
        setSelectedImgSRC(ImgSRC);
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="z-10 w-[100vw] h-[100vh] absolute left-0 top-0 ">
            </div>
            <div className="z-50">
                <div className="flex flex-col items-center">

                    <div className="text-center">
                        <h1 className="text-[40px] font-bold">
                            Dars jadvali:
                        </h1>
                    </div>

                    <div className="w-[800px] flex flex-wrap justify-center items-center">
                        {data && Object.keys(data).map((objectKey) => (
                            <button className="m-3 bg-yellow-400 py-3 px-8 text-[20px] font-bold text-white rounded-md" key={objectKey} onClick={() => handleFakultetClick(objectKey)}>
                                {objectKey}
                            </button>
                        ))}
                    </div>

                    {selectFakutet && (
                        <div className="w-[900px]">
                            <div className="text-center">
                                <h2 className="text-[30px] font-bold">{selectFakutet} fakultet yo'nalishlari:</h2>
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                {data && Object.keys(data[selectFakutet]).map((nestedObjectKey) => (
                                    <button
                                    className="m-3 bg-blue-500 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                    key={nestedObjectKey}
                                    onClick={() => handleYonalishClick(nestedObjectKey)}
                                    >
                                        {nestedObjectKey}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedYonalish && (
                        <div>
                            <div className="text-center">
                                <h3 className="text-[30px] font-bold">{selectedYonalish}:</h3>
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                {data && Object.keys(data[selectFakutet][selectedYonalish]).map(
                                    (KursKey) => (
                                        <button 
                                            className="m-3 bg-green-600 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                            key={KursKey} 
                                            onClick={() => handleKursClick(KursKey)}
                                        >
                                            {KursKey}
                                        </button>
                                    )
                                    )}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-wrap justify-center items-center">
                        {selectedKurs && (
                            <div>
                                {/* <h4>Selected Kurs: {selectedKurs}</h4> */}
                                {data && data[selectFakutet][selectedYonalish][selectedKurs].map(
                                    (ImgSRC, index) => (
                                        <button 
                                            className="text-[30px]"
                                            key={index} onClick={() => handleImgSRCClick(ImgSRC)}>
                                            {ImgSRC}
                                        </button>
                                    )
                                    )}
                            </div>
                        )}
                    </div>
                    <br />
                    {selectedImgSRC && (
                        <div>
                            {/* <h5>Selected ImgSRC:</h5> */}
                            <a href={selectedImgSRC}>{selectedImgSRC}</a>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}