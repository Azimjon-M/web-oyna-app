import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { MdEdit, MdDelete } from "react-icons/md";
import { BsImage } from "react-icons/bs";

const AdminYangilik = () => {
    const Url = "http://api.kspi.uz/v1/yangilik/yangilik/";
    // get Data
    const [isData, setIsData] = useState([]);
    // input File
    const [isFile, setIsFile] = useState("");
    // const [imgErr, setImgErr] = useState('')

    const defaultTex = "Rasim yuklanmagan";
    const imgTypes = ['jpg','jpeg','png','pdf','tiff','psd','eps','ai','indd','rav'];

    useEffect(() => {
        axios
            .get(Url)
            .then((response) => setIsData(response.data))
            .catch((xato) => console.error(xato));
    }, [isData]);

    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Judaham kam!')
            .required("Required"),
        body: Yup.string()
            .min(2, 'Judaham kam!')
            .required("Required"),
    });

    //change inpTex
    const changeInpText = () => {
        const inp_tex = document.getElementById("inp-text");
        setIsFile("");
        inp_tex.innerHTML = "Fayl yuklanmagan";
        
    };

    //Refresh
    const handleRefresh = () => {
        axios
            .get(Url)
            .then((response) => setIsData(response.data))
            .catch((xato) => console.error(xato));
    };

    //Post
    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("body", values.body);
            formData.append("rasm", isFile);
            axios.post(Url, formData);
            formik.resetForm();
            setIsFile("");
            changeInpText();
            handleRefresh();
        },
    });

    // Delete
    const handleDelete = (id) => {
        axios.delete(Url + id + "/");
    };

    //Click button in input Change
    const handleClick = () => {
        document.getElementById("rasim").click();
    };
    const handleChange = () => {
        const fayl = document.getElementById("rasim").files[0];
        const inp_tex = document.getElementById("inp-text");

        for (let i = 0; i < imgTypes.length; i++) {
            if (fayl.name.split(".").pop().includes(imgTypes[i])) {
                console.log('helklo');
                setIsFile(fayl);
                inp_tex.innerHTML = fayl.name
            }
        }
    };

    return (
        <div className="border border-black">
            <div className="text-center">
                <h1 className="text-[25px]">
                    <b>Yangilik</b>
                </h1>
            </div>
            {/* GET DATA */}
            <div className="flex items-start h-[500px]">
                <div className="w-[50%] flex flex-col gap-y-2 py-4 px-10">
                    <div className="flex justify-between">
                        <h1>Joylangan Yangiliklar</h1>
                    </div>
                    <div className="flex flex-col-reverse gap-y-2">
                        {isData.map((item, idx) => (
                            <div
                                key={item.id}
                                className="w-full h-[50px] flex justify-between items-center border border-gray-400 p-1"
                            >
                                <div className="flex items-center gap-x-2">
                                    <span className="w-[60px] h-[40px] inline-block overflow-hidden">
                                        <img
                                            className="w-full h-auto"
                                            src={item.rasm}
                                            alt="img"
                                        />
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="whitespace-nowrap">
                                            <b>Title:</b>
                                            {item.title.length > 18
                                                ? item.title.slice(0, 18) + "..."
                                                : item.title}
                                        </div>
                                        <div className="whitespace-nowrap">
                                            <b>Body:</b>
                                            {item.body.length > 18
                                                ? item.body.slice(0, 18) + "..."
                                                : item.body}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center gap-x-3 pe-2">
                                    <div>No: {idx + 1}</div>
                                    <span className="cursor-pointer">
                                        <MdEdit className="text-green-700" />
                                    </span>
                                    <span className="cursor-pointer">
                                        <MdDelete
                                            onClick={() => handleDelete(item.id)}
                                            className="text-red-600"
                                        />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
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
                            Title:
                            <textarea
                                className={`${formik.errors.title ? 'border-red-600' : 'border-gray-400'} w-full border  outline-none p-2`}
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
                            Body:
                            <textarea
                                className={`${formik.errors.body ? 'border-red-600' : 'border-gray-400'} w-full border  outline-none p-2`}
                                id="body"
                                cols="70"
                                rows="5"
                                onChange={formik.handleChange}
                                value={formik.values.body}
                            ></textarea>
                        </label>
                        <div className="flex flex-col items-start">
                            Image:
                            <div className={`flex items-center border`}>
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
                                onChange={() => handleChange()}
                                id="rasim"
                                type="file"
                                hidden="hidden"
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
