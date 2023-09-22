import React, { useState } from "react";
import {
Accordion,
AccordionHeader,
AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const [selectedObject, setSelectedObject] = useState(null);
const [selectedArray, setSelectedArray] = useState(null);

const data = {
    object1: {
        array1: ['Apple', 'Banana', 'Cherry'],
        array2: ['Dog', 'Cat', 'Elephant'],
    },
    object2: {
        array3: [1, 2, 3, 4],
        array4: [true, false],
    },
    // Boshqa ma'lumotlar...
};

const handleObjectClick = (objectKey) => {
    setSelectedObject(objectKey);
    setSelectedArray(null);
};

const handleArrayClick = (arrayKey) => {
    setSelectedArray(arrayKey);
};

const handleValueClick = (value) => {
    console.log(value);
    // Boshqa ishlar...
};

    export const AccordionCostom = () => {
        const [open, setOpen] = React.useState(0);
        
        const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="flex justify-center">
            <div className="w-[600px]">
            <div>
            {Object.keys(data).map((objectKey) => (
                <button key={objectKey} onClick={() => handleObjectClick(objectKey)}>
                    {objectKey}
                </button>
            ))}
            <br />
            {selectedObject && (
                <div>
                    {Object.keys(data[selectedObject]).map((arrayKey) => (
                        <button
                            key={arrayKey}
                            onClick={() => handleArrayClick(arrayKey)}
                        >
                            {arrayKey}
                        </button>
                    ))}
                </div>
            )}
            <br />
            {selectedArray && (
                <div>
                    {data[selectedObject][selectedArray].map((value, index) => (
                        <button key={index} onClick={() => handleValueClick(value)}>
                            {value}
                        </button>
                    ))}
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
                </Accordion>  */}

            </div>
        </div>
    )
}