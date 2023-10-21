import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { MdEdit, MdDelete } from "react-icons/md";
import { BsImage } from "react-icons/bs";

const Yangilik = ({dataYangilik}) => {
    
    const Url = "http://api.kspi.uz/v1/yangilik/yangilik/";
    // get Data
    const [isData, setIsData] = useState(dataYangilik);
    // input File
    const [isFile, setIsFile] = useState("");
    //img Error
    const [imgErr, setImgErr] = useState(null);
    //Edit
    const [isEdit, setIsEdit] = useState(null);
    //Input Text
    const [imgInpText, setImgInpText] = useState("Rasm Tanlanmagan !");
    //Edit and Delete Click
    const [editDel, setEditDel] = useState(false);
    if (editDel) {
        setTimeout(() => setEditDel(false), 1000)
    }
    //Title
    const [isTitle, setIsTitle] = useState("Sarlavha");
    //Body
    const [isBody, setIsBody] = useState("Tafsilot");
    //Image
    const [isImg, setIsImg] = useState('Rasm')

    const imgTypes = [
        "jpg",
        "jpeg",
        "png",
        "pdf",
        "tiff",
        "psd",
        "eps",
        "ai",
        "indd",
        "rav",
    ];

    const SignupSchema = Yup.object().shape({
        title: Yup.string().min(2, "Judaham kam!").required("Required"),
        body: Yup.string().min(2, "Judaham kam!").required("Required"),
    });
    //Refresh
    const handleRefresh = async () => {
        const data = await axios
            .get(Url)
            .then((response) => {
                return setIsData(response.data.sort((a, b) => b.id + a.id));
            })
            .catch((err) => console.error(err));
    };
    const handleRefreshTimeout = () => {
        setTimeout(() => {
            handleRefresh();
        }, 1000);
    };

    //Form
    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            //Edit
            if (isEdit) {
                const formData = new FormData();
                formData.append("title", values.title);
                formData.append("body", values.body);
                formData.append("rasm", isFile);
                axios.put(Url + isEdit + "/", formData);
                formik.values.title = "";
                formik.values.body = "";
                setIsFile("");
                setImgInpText("Rasm tanlanmagan !");
                handleRefreshTimeout();
                setIsEdit(null);
                setIsTitle("Sarlavha");
                setIsBody("Tafsilot");
                setIsImg("Rasm")
            }
            //Post
            else {
                if (!imgErr && isFile.length === 0) {
                    setImgErr(true);
                } else {
                    const formData = new FormData();
                    formData.append("title", values.title);
                    formData.append("body", values.body);
                    formData.append("rasm", isFile);
                    axios.post(Url, formData);
                    formik.resetForm();
                    setIsFile("");
                    setImgInpText("Rasm tanlanmagan !");
                    handleRefreshTimeout();
                }
            }
        },
    });
    //Post Click
    const handleClickSubmit = () => {
        if (formik.values.body.length < 2 || formik.values.title.length < 2) {
            if (isFile) {
                setImgErr(false);
            } else {
                setImgErr(true);
            }
        } else {
            setImgErr(false);
        }
    };

    // Delete
    const handleDelete = (id) => {
        if (isEdit === id) {
            setEditDel(true);
            setTimeout(() => {
                setEditDel(false);
            }, 3000);
        } else {
            axios.delete(Url + id + "/");
            handleRefreshTimeout();
        }
    };
    //Edit
    const handleEdit = async (id) => {
        const idData = await axios
            .get(Url+id+"/")
            .then((res) => res.data)
            .catch((err) => console.log(err));
        formik.values.title = idData.title;
        formik.values.body = idData.body;
        setIsEdit(id);
        setImgInpText("Rasm tahrirlanmagan");
        setIsTitle("Sarlavhani tahrirlash");
        setIsBody("Tafsilotni tahrirlash");
        setIsImg("Rasmni tahrirlash")
    };

    //Click button in input Change
    const handleClick = () => {
        document.getElementById("rasim").click();
    };
    const handleChange = () => {
        const fayl = document.getElementById("rasim").files[0];
        setImgErr(true);
        setIsFile("");
        setImgInpText("Rasm tanlanmagan !");
        if (fayl) {
            for (let i = 0; i < imgTypes.length; i++) {
                if (fayl.name.split(".").pop().includes(imgTypes[i])) {
                    setIsFile(fayl);
                    setImgErr(false);
                    setImgInpText(
                        fayl.name.length > 43
                            ? fayl.name.slice(0, 43) + "..."
                            : fayl.name
                    );
                }
            }
        }
    };

    return (
        <div className="border border-b-black px-2 py-10">
            <div className="text-center">
                <h1 className="text-[25px]">
                    <b>YANGILIKLAR BO'LIMI</b>
                </h1>
            </div>
            <div className="flex items-start h-[500px]">
                {/* GET DATA */}
                <div className="w-[50%] h-[500px] flex flex-col gap-y-2 py-4 px-10 mt-7">
                    <div className="flex justify-between">
                        <h1>
                            <b>Joylangan Yangiliklar</b>
                        </h1>
                    </div>
                    <div className="flex flex-col-reverse gap-y-2 style-owerflow-001 overflow-y-auto p-2">
                        {isData.map((item) => (
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
                                    <div className="flex flex-col relative">
                                        <div className="whitespace-nowrap">
                                            <b>Sarlavha: </b>
                                            {item.title.length > 30
                                                ? item.title.slice(0, 30) +
                                                    "..."
                                                : item.title}
                                        </div>
                                        <div className="whitespace-nowrap">
                                            <b>Tafsilot: </b>
                                            {item.body.length > 23
                                                ? item.body.slice(0, 23) + "..."
                                                : item.body}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center gap-x-3 pe-2">
                                    <span className="cursor-pointer">
                                        <MdEdit
                                            title="Tahrirlash"
                                            onClick={() => handleEdit(item.id)}
                                            className="text-green-700"
                                        />
                                    </span>
                                    <span className="cursor-pointer">
                                        <MdDelete
                                            title="O'chirish"
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                            className="text-red-600"
                                        />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* POST DATA */}
                <div className="w-[600px] px-10 py-6">
                    <div>
                        <b>Joylash</b>
                    </div>
                    <form
                        className={`${editDel ? 'border-2 border-red-600' : 'border-2 border-white'} h-[450px] flex flex-col items-baseline gap-y-4 style-owerflow-001 overflow-y-auto p-2`}
                        onSubmit={formik.handleSubmit}
                    >
                        <label
                            className="flex flex-col items-start"
                            htmlFor="title"
                        >
                            {isTitle}:
                            <textarea
                                className={`${
                                    formik.errors.title
                                        ? "border-red-600"
                                        : "border-gray-400"
                                } w-full border  outline-none p-2`}
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
                            {isBody}:
                            <textarea
                                className={`${
                                    formik.errors.body
                                        ? "border-red-600"
                                        : "border-gray-400"
                                } w-full border  outline-none p-2`}
                                id="body"
                                cols="70"
                                rows="5"
                                onChange={formik.handleChange}
                                value={formik.values.body}
                            ></textarea>
                        </label>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center">
                                {isImg}: {isImg === "Rasmni tahrirlash" && <div className="inline-block italic text-[12px] text-red-600 ms-5">Agar o'zgartirilmasa o'z holida qoladi !Rasm</div>}
                            </div>
                            <div
                                className={`${
                                    imgErr
                                        ? "border-red-600"
                                        : "border-gray-400"
                                } flex items-center border`}
                            >
                                <button
                                    onClick={() => handleClick()}
                                    type="button"
                                    className="h-[30px] flex items-center gap-x-2 bg-green-300 hover:bg-green-500 active:bg-green-300 px-4"
                                >
                                    <BsImage /> Tanlash
                                </button>
                                <span
                                    className={`${
                                        imgErr ? "text-red-600" : ""
                                    } h-[30px] px-2 border border-s-gray-400`}
                                    id="inp-text"
                                >
                                    {imgInpText}
                                </span>
                            </div>
                            <span
                                className={`${
                                    imgErr
                                        ? "translate-y-0 opacity-100 h-auto mt-4"
                                        : "-translate-y-5 opacity-0 h-0"
                                } bg-red-500 text-white text-[14px] px-2 transition-all -z-20`}
                            >
                                Rasim {imgTypes.map((i) => i + ", ")}{" "}
                                farmatlarda bo'lishi kerak !
                            </span>
                            <input
                                onChange={() => handleChange()}
                                id="rasim"
                                type="file"
                                hidden="hidden"
                            />
                        </div>
                        <button
                            onClick={() => handleClickSubmit()}
                            type="submit"
                            className="relative right-0 bottom-0 bg-blue-500 text-white px-8 py-1 hover:bg-blue-700 active:bg-blue-500"
                        >
                            Jo'natish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Yangilik;