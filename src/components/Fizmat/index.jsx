import { async } from "q";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Kurs from "../AdminPanel/DarsJadval/Kurs";

const Fizmat = () => {
    const [yunalish, setYunalish] = useState('');
    const [kurs, setKurs] = useState('');
    const [jadvalImage, setJadvalImage] = useState('')
    const urlTur = 'http://api.kspi.uz/v1/jadval/talim_turi/';
    const urlPost = 'http://api.kspi.uz/v1/jadval/jadval/';

    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(urlPost, {yunalish, kurs, jadvalImage})
            console.log(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <div className="max-w-7xl mx-auto md:flex pt-20">
           
            <div className="flex-1">
                <div className="md:flex p-3 shadow-md rounded-xl gap-4 mb-4">
                    <figure className=""><img className="w-full md:max-w-[8rem] md:h-40 rounded-xl" src="https://imgupscaler.com/images/samples/animal-after.webp" alt="Album"/></figure>
                    <div className="flex-col pt-2">
                        <div>
                            <h2 className="text-gray-700 font-bold text-xl mb-2">Yo'nalish: <span className="text-gray-500 font-bold text-md capitalize">Matemetika informatika</span></h2>
                            <h2 className="text-gray-700 font-bold text-xl mb-2">Kurs: <span className="text-gray-500 font-bold text-md capitalize">3</span></h2>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-1 px-3 rounded inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mr-2" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                                <span>Edit</span>
                            </button>
                            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-1 px-3 rounded inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mr-2" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:flex p-3 shadow-md rounded-xl gap-4">
                    <figure className=""><img className="w-full md:max-w-[8rem] md:h-40 rounded-xl" src="https://imgupscaler.com/images/samples/animal-after.webp" alt="Album"/></figure>
                    <div className="flex-col pt-2">
                        <div>
                            <h2 className="text-gray-700 font-bold text-xl mb-2">Yo'nalish: <span className="text-gray-500 font-bold text-md capitalize">Matemetika informatika</span></h2>
                            <h2 className="text-gray-700 font-bold text-xl mb-2">Kurs: <span className="text-gray-500 font-bold text-md capitalize">3</span></h2>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-1 px-3 rounded inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mr-2" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                                <span>Edit</span>
                            </button>
                            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-1 px-3 rounded inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mr-2" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex-1">
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto shadow-lg p-10">
                    <h1 className="text-lg font-bold text-slate-600 text-center">Dars jadvalini kiritish</h1>
                    
                    <label htmlFor="yo'nalish" className="block text-sm font-medium leading-6 text-gray-600">Yo'nalish</label>
                    <input onChange={(e) => setYunalish(e.target.value)} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Yo'nalishlar"/>
                    
                    <label htmlFor="kurs" className="block text-sm font-medium leading-6 text-gray-600">Kurs</label>

                    <div className="inline-block relative w-full">
                        <select onChange={(e) => setKurs(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option className="text-gray-400" >Kursni tanlang</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    
                    <label htmlFor="imageFile">Dars jadvalini ytuklang</label>
                    <input onChange={(e) => setJadvalImage(e.target.value)} className="border" type="file" />

                    

                    <button type="submit" className=" text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">Jadvalni qo'shish</button>

                </form>
            </div>
        </div>
        );
};

export default Fizmat;
