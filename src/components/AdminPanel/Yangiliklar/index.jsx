import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

import { MdEdit, MdDelete } from "react-icons/md";
import { BsImage } from "react-icons/bs";

const AdminYangilik = () => {
    const Url = "http://api.kspi.uz/v1/yangilik/yangilik/";

    const [isData, setIsData] = useState([]);
    // const [isFile, setIsFile] = useState('');

    const defaultTex = "Rasim tanlanmagan";

    useEffect(() => {
        axios.get(Url)
            .then((response) => setIsData(response.data))
            .catch((xato) => console.error(xato));
    }, [])

    //Post
    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
            image: '',
        },
        onSubmit: (values) => {
            axios.post(Url, values)
        },
    });

    //Refresh
    const handleRefresh = async () => {
        axios.get(Url)
            .then((response) => setIsData(response.data))
            .catch((xato) => console.error(xato));
    };

    // Delete
    const handleDelete = (id) => {
        axios.delete(Url+id+'/')
    }
    
    //Click button in input
    const handleClick = () => {
        document.getElementById("rasim").click();
    };
    const handleChange = (e) => {
        const inp = document.getElementById("rasim");
        const inp_tex = document.getElementById("inp-text");

        // setIsFile(inp.files[0]); //isValue Rasim
        console.log(inp.files[0]);

        if (inp.value) {
            if (inp.value.length >= 50) {
                inp_tex.innerHTML = inp.value.slice(0, 50) + "...";
            } else {
                inp_tex.innerHTML = inp.value;
            }
        } else {
            inp_tex.innerHTML = defaultTex;
        }
    };

    return (
        <div>
            <div className="text-center">
                <h1 className="text-[25px]">
                    <b>Yangiliklar</b>
                </h1>
            </div>
            {/* GET DATA */}
            <div className="flex items-start h-[500px]">
                <div className="w-[50%] flex flex-col gap-y-2 p-10">
                    <div className="flex justify-between">
                        <h1>Ma'lumotlar</h1>
                        <button
                            className="border px-4 py-1 bg-blue-400 text-white"
                            onClick={() => handleRefresh()}
                        >
                            Yangilash
                        </button>
                    </div>
                    {isData.map((item) => (
                        <div
                            key={item.id}
                            className="w-full h-[50px] flex justify-between items-center border border-gray-400 p-1"
                        >
                            <div className="flex items-center gap-x-2">
                                <span className="w-[60px] h-[40px] inline-block overflow-hidden">
                                    <img
                                        className="w-full h-auto"
                                        src={item.image}
                                        alt="img"
                                    />
                                </span>
                                <div className="flex flex-col">
                                    <div className="whitespace-nowrap">
                                        <b>Sarlavha:</b>
                                        {item.title}
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <b>O'rta qsim:</b>
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-x-3 pe-2">
                                <div>id: {item.id}</div>
                                <span className="cursor-pointer">
                                    <MdEdit className="text-green-700" />
                                </span>
                                <span className="cursor-pointer">
                                    <MdDelete onClick={() => handleDelete(item.id)} className="text-red-600" />
                                </span>
                            </div>
                        </div>
                    ))
                    }
                </div>

                {/* POST DATA */}
                <div className="w-[50%] px-10 py-6">
                    <form
                        className="flex flex-col items-baseline gap-y-4"
                        onSubmit={formik.handleSubmit}
                    >
                        <label
                            className="flex flex-col items-start"
                            htmlFor="title"
                        >
                            Sarlavha
                            <textarea
                                className="w-full border border-gray-400 outline-none p-2"
                                id="title"
                                cols="70"
                                rows="3"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            ></textarea>
                        </label>
                        <label
                            className="flex flex-col items-start"
                            htmlFor="body"
                        >
                            O'rta qsim
                            <textarea
                                className="w-full border border-gray-400 outline-none p-2"
                                id="body"
                                cols="70"
                                rows="5"
                                onChange={formik.handleChange}
                                value={formik.values.body}
                            ></textarea>
                        </label>
                        <div className="flex flex-col items-start">
                            Rasim joylashtirish
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleClick()}
                                    type="button"
                                    className="h-[30px] border flex items-center gap-x-2 border-black bg-green-300 hover:bg-green-500 active:bg-green-300 px-4"
                                >
                                    <BsImage /> Tanlash
                                </button>
                                <span
                                    className="h-[30px] border border-t-black border-e-black border-b-black border-s-0 px-2"
                                    id="inp-text"
                                >
                                    {defaultTex}
                                </span>
                            </div>
                            <input
                                onChange={() => (handleChange(), formik.handleChange())}
                                id="rasim"
                                type="file"
                                hidden="hidden"
                                value={formik.values.image}
                            />
                        </div>
                        <button
                            type="submit"
                            className="relative right-0 bottom-0 bg-blue-400 text-white px-8 py-1"
                        >
                            Jo'natish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminYangilik;
