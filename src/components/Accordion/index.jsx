import React, { useState } from "react";
// import {
// Accordion,
// AccordionHeader,
// AccordionBody,
// } from "@material-tailwind/react";

// function Icon({ id, open }) {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//         >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//         </svg>
//     );
// }


export const AccordionCostom = () => {
    
    const [selectedObject, setSelectedObject] = useState(null);
    const [selectedNestedObject, setSelectedNestedObject] = useState(null);
    const [selectedArray, setSelectedArray] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    
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
                    "3 - kurs": ['132'],
                    "4 - kurs": ['../../assets/images/darsJadvali/'],
                },
            },
    };

    const handleObjectClick = (objectKey) => {
        setSelectedObject(objectKey);
        setSelectedNestedObject(null);
        setSelectedArray(null);
        setSelectedValue(null);
    };

    const handleNestedObjectClick = (nestedObjectKey) => {
        setSelectedNestedObject(nestedObjectKey);
        setSelectedArray(null);
        setSelectedValue(null);
    };

    const handleArrayClick = (arrayKey) => {
        setSelectedArray(arrayKey);
        setSelectedValue(null);
    };

    const handleValueClick = (value) => {
        setSelectedValue(value);
    };

    return (
        <div className="flex justify-center mt-[100px]">
            <div className="w-full">
                <div>
                    <div className="text-center">
                        <h1 className="text-[40px] font-bold">
                            Dars jadvali
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center items-center">
                        {Object.keys(data).map((objectKey) => (
                            <button className="m-3 bg-yellow-400 py-3 px-8 text-[20px] font-bold text-white rounded-md" key={objectKey} onClick={() => handleObjectClick(objectKey)}>
                                {objectKey}
                            </button>
                        ))}
                    </div>

                    {selectedObject && (
                        <div>
                            <div className="text-center">
                                <h2 className="text-[30px] font-bold">{selectedObject} fakulteti yo'nalishlari:</h2>
                            </div>
                        <div className="flex flex-wrap justify-center items-center">
                            {Object.keys(data[selectedObject]).map((nestedObjectKey) => (
                                <button
                                className="m-3 bg-blue-500 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                key={nestedObjectKey}
                                onClick={() => handleNestedObjectClick(nestedObjectKey)}
                                >
                                    {nestedObjectKey}
                                </button>
                            ))}
                        </div>
                        </div>
                    )}

                    {selectedNestedObject && (
                        <div>
                            <div className="text-center">
                                <h3 className="text-[30px] font-bold">{selectedNestedObject}:</h3>
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                {Object.keys(data[selectedObject][selectedNestedObject]).map(
                                    (arrayKey) => (
                                        <button 
                                            className="m-3 bg-green-600 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                            key={arrayKey} 
                                            onClick={() => handleArrayClick(arrayKey)}
                                        >
                                            {arrayKey}
                                        </button>
                                    )
                                    )}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-wrap justify-center items-center">
                        {selectedArray && (
                            <div>
                                {/* <h4>Selected Array: {selectedArray}</h4> */}
                                {data[selectedObject][selectedNestedObject][selectedArray].map(
                                    (value, index) => (
                                        <button 
                                            className="text-[30px]"
                                            key={index} onClick={() => handleValueClick(value)}>
                                            {value}
                                        </button>
                                    )
                                    )}
                            </div>
                        )}
                    </div>
                    <br />
                    {selectedValue && (
                        <div>
                            {/* <h5>Selected Value:</h5> */}
                            <a href={selectedValue}>{selectedValue}</a>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}