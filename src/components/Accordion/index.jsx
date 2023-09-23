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

            // Kundizgi: {
            // 'Fizka va Matematika': {
            //     "Matematika va Informatika": {
            //     },
            //     "Matematika o'qitish meto'dikasi": {
            //     },
            //     "Fizika va Astranomiya": {
            //     },
            //     "Fizika va Astranomiya o'qitish meto'dikasi": {
            //     },
            // },
            // "Boshlang'ich ta'lim": {
            // },
            // "O'zbek tili va adabiyoti": {
            // },
            // "Pedagogika va Psixalogiya": {
            // },
            // "Jismoniy madanyat": {
            // },
            // "Maktabgacha ta'lim": {
            // },
            // "Milliy hunarmandchilik va amaliy san'at": {
            // },
            // "Xorijiy tillar": {
            // },
            // "Tabiy fanlar": {
            // },
            // "Rus tili va adabiyoti": {
            // },
            // "Tarix": {
            // },

            "Fizika Matematika": {
                "Matematika va Informatika": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Matematika o'qitish meto'dikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['123'],
                    "4 - kurs": ['123'],
                },
                "Fizika va Astranomiya": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['123'],
                    "4 - kurs": ['123'],
                },
                "Fizika va Astranomiya o'qitish meto'dikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['123'],
                    "4 - kurs": ['123'],
                },
            },
            "Pedagogika": {
                "Pedagogika va psixologiya": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Psixalogiya (amaliy psixologiya)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Maxsus pedagogika (logopediyaa)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Defectologiya (surdopedagogika)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Defectologiya (oligofrenopedagogika)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Defectologiya (logopediya)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Tarix": {
                "Tarix": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Tarix o'qitish metodikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Milliy g'oya ma'naviyat asoslari va huquq ta'limi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Milliy hunarmandchilik va amaliy san'at": {
                "Musiqa ta'limi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Tasviriy san'at va muhandislik grafikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Texnologik ta'lim": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Rus tili va adabiyoti": {
                "Ona tili va adabiyoti (rus tili va asdabiyoti)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "O'zga tilli guruhlarda rus tili": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Ona tili va adabiyoti (rus tili va adabiyoti (o'zga tilli guruhlarda))": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Tabiiy fanlar": {
                "Kimyo": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Kimyo o'qitish metodikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Biologiya": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Biologiya o'qitish metodikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Geografiya va iqtisodiy bilim asoslari": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Geografiya o'qitish metodikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Horijiy tillar": {
                "Horijiy til va adabiyoti (ingliz tili)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Maktabgach va boshlang'ich ta'limda horijiy til (ingliz tili)": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "O'zbek tili va adabiyoti": {
                "O'zbek tili va adabiyoti": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                }
            },
            "Maktabgacha ta'lim": {
                "Maktabgacha ta'lim": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Maktabgacha ta'lim psixologiyasi va pedagogikasi": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Maktab menejmenti": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Boshlang'ich ta'lim": {
                "Boshlang'ich ta'lim": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
                "Boshlang'ich ta'lim va sport tarbiyaviy ish": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
                },
            },
            "Jismoniy madanyat": {
                "Jismoniy madanyat": {
                    "1 - kurs": ['123'],
                    "2 - kurs": ['123'],
                    "3 - kurs": ['132'],
                    "4 - kurs": ['123'],
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


        // const [open, setOpen] = React.useState(0);
        
        // const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="flex justify-center mt-[100px]">
            <div className="w-full">
                <div className="flex flex-wrap justify-center items-center">
                
                    {Object.keys(data).map((objectKey) => (
                        <button className="m-3 bg-yellow-400 py-3 px-8 text-[20px] font-bold text-white rounded-md" key={objectKey} onClick={() => handleObjectClick(objectKey)}>
                            {objectKey}
                        </button>
                    ))}
                    <br />
                    {selectedObject && (
                        <div>
                            {/* <h2>Selected Object: {selectedObject}</h2> */}
                            {Object.keys(data[selectedObject]).map((nestedObjectKey) => (
                                <button
                                    key={nestedObjectKey}
                                    onClick={() => handleNestedObjectClick(nestedObjectKey)}
                                >
                                    {nestedObjectKey}
                                </button>
                            ))}
                        </div>
                    )}
                    <br />
                    {selectedNestedObject && (
                        <div>
                            {/* <h3>Selected Nested Object: {selectedNestedObject}</h3> */}
                            {Object.keys(data[selectedObject][selectedNestedObject]).map(
                                (arrayKey) => (
                                    <button key={arrayKey} onClick={() => handleArrayClick(arrayKey)}>
                                        {arrayKey}
                                    </button>
                                )
                            )}
                        </div>
                    )}
                    <br />
                    {selectedArray && (
                        <div>
                            {/* <h4>Selected Array: {selectedArray}</h4> */}
                            {data[selectedObject][selectedNestedObject][selectedArray].map(
                                (value, index) => (
                                    <button key={index} onClick={() => handleValueClick(value)}>
                                        {value}
                                    </button>
                                )
                            )}
                        </div>
                    )}
                    <br />
                    {selectedValue && (
                        <div>
                            {/* <h5>Selected Value:</h5> */}
                            <a href={selectedValue}>{selectedValue}</a>
                        </div>
                    )}
                    
                </div>
                {/*         
                    <Accordion className="overflow-hidden" open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)}>Fakultet</AccordionHeader>
                        <AccordionBody>
                            <ul>
                                <li>
                                    1
                                </li>
                                <li>
                                    2
                                </li>
                            </ul>
                        </AccordionBody>
                    </Accordion> 

                    <Accordion className="overflow-hidden" open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>Yo'nalish</AccordionHeader>
                        <AccordionBody>
                            <ul>
                                <li>
                                    1
                                </li>
                                <li>
                                    2
                                </li>
                            </ul>
                        </AccordionBody>
                    </Accordion> 

                    <Accordion className="overflow-hidden" open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>Kurs</AccordionHeader>
                        <AccordionBody>
                            <ul>
                                <li>
                                    1
                                </li>
                                <li>
                                    2
                                </li>
                            </ul>
                        </AccordionBody>
                    </Accordion>  
                */}

            </div>
        </div>
    )
}