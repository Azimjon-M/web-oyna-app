import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";


const DarsJadval = () => {
    const Url = "http://api.kspi.uz/v1/jadval/talim_turi/";
    const [isData, setIsData] = useState([]);

    useEffect(() => {
        axios
            .get(Url)
            .then((res) => setIsData(res.data))
            .catch((err) => console.log(err));
            console.log(isData);
    }, []);
    //Ta'lim tur
    const formik = useFormik({
        initialValues: {
            talim_turi: "",
        },
        onSubmit: (values) => {
            console.log(values);
            axios.post(Url, values);
            formik.resetForm();
        },
    });
    //handleChangeSelect
    const handleChangeSelect = (e) => {
        const select = document.getElementById('select')
        console.log(select);
    }
    //Edit 
    const handleEdit = (id) => {

    }
    //Delet
    const handleDelet = (id) => {
        axios.delete(Url+id+'/')
    }

    return (
        <div className="px-2 py-10">
            <div>
                <div className="text-center text-[25px]">
                    <h1><b>DARS JADVAL BO'LIMI</b></h1>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        {isData.map(item => (
                            <div key={item.id} className="w-[300px] h-[50px] flex justify-between items-center border border-blue-600 px-2">
                                <div>
                                    <b>id:</b> {item.id}
                                    <br />
                                    <b>Talim turi:</b> {item.talim_turi}
                                </div>
                                <div className="flex gap-x-2">
                                    <MdEdit className="text-green-700 cursor-pointer" onClick={() => handleEdit(item.id)} />
                                    <MdDelete className="text-red-600 cursor-pointer" onClick={() => handleDelet(item.id)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-auto flex flex-col gap-y-4 border border-red-600">
                        {/* Ta'lim tut */}
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="talim_turi">
                                Talim turi
                                <input
                                    className="border border-gray-400 outline-none"
                                    type="text"
                                    id="talim_turi"
                                    name="talim_turi"
                                    onChange={formik.handleChange}
                                    value={formik.values.talim_turi}
                                />
                                <button
                                    className="w-[100px] border-blue-500 bg-blue-500 text-white py-[1px]"
                                    type="submit"
                                >
                                    Jo'natish
                                </button>
                            </label>
                        </form>
                        {/* Fakultet */}
                        <form>
                            <select onChange={() => handleChangeSelect()} className="border block" name="select" id="select">
                                {isData.map(item => (
                                    <option key={item.id} value={item.id}>{item.talim_turi}</option>
                                ))}
                            </select>
                            <label htmlFor="fakultet">
                                Fakultet
                                <input
                                    className="border border-gray-400 outline-none"
                                    type="text"
                                    id="fakultet"
                                />
                            </label>
                            <button
                                className="w-[100px] border-blue-500 bg-blue-500 text-white py-[1px]"
                                type="button"
                            >
                                Jo'natish
                            </button>
                        </form>
                        {/* Yo'nalish */}
                        <form>
                            <label htmlFor="yonalish">
                                Yo'nalish
                                <input
                                    className="border border-gray-400 outline-none"
                                    type="text"
                                    id="yonalish"
                                />
                            </label>
                            <button
                                className="w-[100px] border-blue-500 bg-blue-500 text-white py-[1px]"
                                type="button"
                            >
                                Jo'natish
                            </button>
                        </form>
                        {/* Kurs */}
                        <form>
                            <label htmlFor="kurs">
                                Kurs
                                <input
                                    className="border border-gray-400 outline-none"
                                    type="text"
                                    id="kurs"
                                />
                            </label>
                            <button
                                className="w-[100px] border-blue-500 bg-blue-500 text-white py-[1px]"
                                type="button"
                            >
                                Jo'natish
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DarsJadval;
