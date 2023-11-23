// import React, { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

    const urlDarsJad = 'https://api.kspi.uz/v1/jadval/jadval/'
    const urlFakultet = 'https://api.kspi.uz/v1/jadval/fakultet/'
    const urlYonalish = 'https://api.kspi.uz/v1/jadval/yonalish/'
    const urlTalimTur = 'https://api.kspi.uz/v1/jadval/talim_turi/'

const MakTal = () => {

        const [talimTur, setTalimTur] = useState("");
        const [fakultet, setFakultet] = useState("");
        const [yonalItems, setYonalItems] = useState("")
        const [darsJad, setDarsJad] = useState("")

        const [yonalish, setYonalish] = useState("");
        const [kurs, setKurs] = useState('');
        const [jadvalImg, setJadvalImg] = useState(null);
        
        const fetchData = async () => {
            try {
                // Talim turi
                await axios(urlTalimTur)
                .then(res => setTalimTur((res.data).filter((item) => item.talim_turi === "Kunduzgi").map((tur) => tur.id)))
                .catch((error) => error.respnse);

                // Fakultet
                await axios(urlFakultet)
                .then(res => setFakultet((res.data).filter((item) => item.fakultet === "Maktabgacha ta'lim").map(fakultet => fakultet.id)))
                .catch((error) => error.respnse);

                //Yo'nalish
                await axios(urlYonalish)
                .then(res => setYonalItems((res.data).filter((item) => item.yonalish_fakultet_id === "93")))
                .catch((error) => error.respnse);

                // Dars Jadvali
                await axios(urlDarsJad)
                .then(res => setDarsJad((res.data).filter((item) => item.fakultet === "93")))
                .catch((error) => error.respnse);
            } catch(error) {
                console.log(error.respnse);
            }
        };
             
        useEffect(() => {
            fetchData();
        }, []);

        console.log(darsJad);

        const formData = new FormData();
            formData.append('turi', talimTur);
            formData.append('fakultet', fakultet);
            formData.append('yonalish', yonalish);
            formData.append('kurs', kurs);
            formData.append('rasm', jadvalImg);

        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                const resp = await axios.post(urlDarsJad, formData, {headers: {
                    'Content-Type': 'multipart/form-data',
                }})
                console.log(resp.data);
            }catch(error) {
                console.log(error.response);
            }
        }

                    
        return (
            <div className="max-w-6xl mx-auto grid grid-cols-2 pt-10">
            <div className="overflow-y-auto max-h-[750px] p-5">
                {darsJad && darsJad.map((item) => {
                    const {id, rasm, kurs, yonalish} = item
                    return (
                        <div key={id} className="card card-side bg-base-100 shadow-xl p-2 mb-5">
                            <figure><img className="w-32 h-full rounded-xl" src={rasm} alt="Movie"/></figure>
                            <div className="card-body p-2 pl-4">
                                <h2 className="text-xl font-bold text-slate-600">Yo'nalish: <span className="text-ms font-medium text-slate-500">{yonalish}</span> </h2>
                                <h2 className="text-xl font-bold text-slate-600">Kurs: <span className="text-ms font-medium text-slate-500">{kurs}</span> </h2>
                                <div className="card-actions justify-end mt-5">
                                    <button className="btn btn-sm btn-accent">Edit</button>
                                    <button className="btn btn-sm btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto shadow-md p-10" encType="multipart/form-data">
                    <h1 className="text-xl font-bold text-slate-500 text-center mb-5">Dars jadvalini kiriting</h1>
                    <label htmlFor="yonalish"className="text-md font-bold pl-2 text-slate-500" >Yo'nalish</label>
                    <select onChange={(e) => setYonalish(e.target.value)} id="yonalish" className="select w-full max-w-sm shadow-lg mb-4" defaultValue="Yo'nalishni tanlang">
                        <option value="Yo'nalishni tanlang" disabled>Yo'nalishni tanlang</option>
                        {yonalItems && yonalItems.map((yonalItem) => {
                            const {id, yonalish} = yonalItem
                            return <option key={id} value={id}>{yonalish}</option>
                        })}
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
                    <input onChange={(e) => setJadvalImg(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-sm" />
                    <button type="submit" className="btn bg-sky-600 hover:bg-sky-700 shadow-lg text-white w-full mt-8">Yuborish</button>
                </form>
            </div>
        </div>
    );
};

export default MakTal;