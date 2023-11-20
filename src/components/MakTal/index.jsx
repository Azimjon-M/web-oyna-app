// import React, { useState } from "react";
import { useState } from "react";

const MakTal = () => {
        const [yonalish, setYonalish] = useState("");
        const [kurs, setKurs] = useState('');
        const [jadvalImg, setJadvalImg] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault()
            console.log(yonalish, kurs, jadvalImg);
            console.log("ssssssssssss");
        }

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-2 pt-20">
            <div>
                <div className="card card-side bg-base-100 shadow-xl p-2">
                    <figure><img className="w-32 h-full rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Courtyard_of_the_Great_Mosque_of_Mecca%2C_Saudi_Arabia_%281%29.jpg/280px-Courtyard_of_the_Great_Mosque_of_Mecca%2C_Saudi_Arabia_%281%29.jpg" alt="Movie"/></figure>
                    <div className="card-body p-2 pl-4">
                        <h2 className="text-xl font-bold text-slate-600">Yo'nalish: <span className="text-ms font-medium text-slate-500">Matematika</span> </h2>
                        <h2 className="text-xl font-bold text-slate-600">Kurs: <span className="text-ms font-medium text-slate-500">4</span> </h2>
                        <div className="card-actions justify-end mt-5">
                            <button className="btn btn-sm btn-accent">Edit</button>
                            <button className="btn btn-sm btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto shadow-md p-10">
                    <h1 className="text-xl font-bold text-slate-500 text-center mb-5">Dars jadvalini kiriting</h1>
                    <label htmlFor="yonalish"className="text-md font-bold pl-2 text-slate-500" >Yo'nalish</label>
                    <select onChange={(e) => setYonalish(e.target.value)} id="yonalish" className="select w-full max-w-sm shadow-lg mb-4" defaultValue="Yo'nalishni tanlang">
                        <option value="Yo'nalishni tanlang" disabled>Yo'nalishni tanlang</option>
                        <option value='Homer'>Homer</option>
                        <option value='Marge'>Marge</option>
                        <option value='Bart'>Bart</option>
                        <option value='Lisa'>Lisa</option>
                        <option value='Maggie'>Maggie</option>
                    </select>
                    <label htmlFor="kurs"className="text-md font-bold pl-2 text-slate-500" >Kurs</label>
                    <select onChange={(e) => setKurs(e.target.value)} id="kurs" className="select w-full max-w-sm  shadow-lg mb-4" defaultValue="kursniTanlang">
                        <option value="kursniTanlang" disabled>Kursni tanlang</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label htmlFor="kurs"className="text-md font-bold pl-2 text-slate-500" >Dars jadvalini joylang</label>
                    <input onChange={(e) => setJadvalImg(e.target.value)} type="file" className="file-input file-input-bordered w-full max-w-sm" />
                    <button type="submit" className="btn bg-sky-600 hover:bg-sky-700 shadow-lg text-white w-full mt-8">Yuborish</button>
                </form>
            </div>
        </div>
    );
};

export default MakTal;
