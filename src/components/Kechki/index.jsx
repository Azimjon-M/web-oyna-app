import React from "react";
import rasm from '../../assets/images/img-1.jpg'

const Kechki = () => {
    const data = [
        {id: 1, fakultet: "mate", yonalish: "Algeb", kurs: "1", rasmi: rasm},
        {id: 2, fakultet: "mate", yonalish: "Algeb", kurs: "2", rasmi: rasm},
        {id: 3, fakultet: "mate", yonalish: "Algeb", kurs: "5", rasmi: rasm},
    ];
    return (
        <div>
            <div className="w-full h-full flex justify-center border border-red-600">
                {/* Get section */}
                <div className="w-[50%]">
                    {data &&
                        data.map((item) => (
                            <div className="w-full h-[100px] flex bg-gray-200 rounded-xl overflow-hidden">
                                <div className="w-[100px] h-full relative flex justify-center items-center">
                                    <img className="absolute" src={item.rasmi} alt="card-img" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        <h1>Fakulteti: {item.fakultet}</h1>
                                        <h1>Yonalish: {item.yonalish}</h1>
                                        <h1>Kurs: {item.kurs}</h1>
                                    </div>
                                    <div className="flex">
                                        <button type="button">Edit</button>
                                        <button type="button">Delet</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Post section */}
                <div className="w-50%">
                    <form action="">
                        <input type="text" />
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Kechki;
