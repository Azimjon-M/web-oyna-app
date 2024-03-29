import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MetroSpinner } from "react-spinners-kit";
import { MdEdit, MdDelete } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import APIRaxbaryat from "../../../services/Raxbaryat";

const Raxbaryat = () => {
    const [isData, setIsData] = useState(null);
    const [isFile, setIsFile] = useState("");
    const [imgErr, setImgErr] = useState(null);
    const [isEdit, setIsEdit] = useState(null);
    const [imgInpText, setImgInpText] = useState("Rasm Tanlanmagan !");
    const [editDel, setEditDel] = useState(false);
    const [isFish, setIsFish] = useState("F.I.Sh");
    const [isLavozim, setIsLavozim] = useState("Lavozimi");
    const [isImg, setIsImg] = useState("Rasm");
    const [isLoading, setIsLoading] = useState(true);

    const imgTypes = ["jpg", "jpeg", "png", "tiff"];

    const SignupSchema = Yup.object().shape({
        fish: Yup.string().min(2, "Judaham kam!").required("Required"),
        lavozim: Yup.string().min(2, "Judaham kam!").required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            fish: "",
            lavozim: "",
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            try {
                if (isEdit) {
                    let formData = new FormData();
                    formData.append("fish", values.fish);
                    formData.append("lavozim", values.lavozim);
                    formData.append("rasm", isFile);
                    await APIRaxbaryat.put(isEdit, formData);
                    formik.setValues({ fish: "", lavozim: "" });
                    setIsFile("");
                    setImgInpText("Rasm tanlanmagan !");
                    handleRefresh();
                    setIsEdit(null);
                    setIsFish("F.I.SH");
                    setIsLavozim("Lavozimi");
                    setIsImg("Rasm");
                } else {
                    if (!imgErr && isFile.length === 0) {
                        setImgErr(true);
                    } else {
                        setIsLoading(true);
                        const formData = new FormData();
                        formData.append("fish", values.fish);
                        formData.append("lavozim", values.lavozim);
                        formData.append("rasm", isFile);
                        formik.resetForm();
                        setIsFile("");
                        setImgInpText("Rasm tanlanmagan !");
                        await APIRaxbaryat.post(formData);
                        handleRefresh();
                        setIsLoading(false);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
    });

    const handleDelete = async (id) => {
        try {
            if (isEdit === id) {
                setEditDel(true);
                setTimeout(() => {
                    setEditDel(false);
                }, 3000);
            } else {
                await APIRaxbaryat.del(id);
                handleRefresh();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRefresh = async () => {
        try {
            await APIRaxbaryat.get()
            .then((res) => {
                setIsData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = async (id) => {
        try {
            await APIRaxbaryat.getbyId(id).then(res => {
                formik.setValues({
                    fish: res.data.fish,
                    lavozim: res.data.lavozim,
                });
            }).catch(err => console.log(err))
            setIsEdit(id);
            setImgInpText("Rasm tahrirlanmagan");
            setIsFish("F.I.SHni tahrirlash");
            setIsLavozim("Lavozimini tahrirlash");
            setIsImg("Rasmni tahrirlash");
        } catch (error) {
            console.error(error);
        }
    };

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

    const handleClickSubmit = () => {
        if (formik.values.lavozim.length < 2 || formik.values.fish.length < 2) {
            if (isFile) {
                setImgErr(false);
            } else {
                setImgErr(true);
            }
        } else {
            setImgErr(false);
        }
    };

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="h-[100vh] flex justify-center items-center ">
                    <div className="spinner">
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
                <div className="px-2 py-10">
                    <div className="text-center">
                        <h1 className="text-[25px]">
                            <b>RAXBARYAT BO'LIMI</b>
                        </h1>
                    </div>
                    <div className="flex items-start h-[500px]">
                        {/* GET DATA */}
                        <div className="w-[50%] h-[500px] flex flex-col gap-y-2 py-4 px-10 mt-7">
                            <div className="flex justify-between">
                                <h1>
                                    <b>Joylangan Rahbarlar</b>
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-2 style-owerflow-001 overflow-y-auto p-2">
                                {isData &&
                                    isData
                                        .sort((a, b) => a.id - b.id)
                                        .map((item) => (
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
                                                            <b>F.I.SH: </b>
                                                            {item &&
                                                            item.fish.length >
                                                                30
                                                                ? item.fish.slice(
                                                                      0,
                                                                      30
                                                                  ) + "..."
                                                                : item.fish}
                                                        </div>
                                                        <div className="whitespace-nowrap">
                                                            <b>Lavozimi: </b>
                                                            {item &&
                                                            item.lavozim
                                                                .length > 23
                                                                ? item.lavozim.slice(
                                                                      0,
                                                                      23
                                                                  ) + "..."
                                                                : item.lavozim}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end items-center gap-x-3 pe-2">
                                                    <span className="cursor-pointer">
                                                        <MdEdit
                                                            fish="Tahrirlash"
                                                            onClick={() =>
                                                                handleEdit(
                                                                    item.id
                                                                )
                                                            }
                                                            className="text-green-700"
                                                        />
                                                    </span>
                                                    <span className="cursor-pointer">
                                                        <MdDelete
                                                            fish="O'chirish"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    item.id
                                                                )
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
                                className={`${
                                    editDel
                                        ? "border-2 border-red-600"
                                        : "border-2 border-white"
                                } h-[450px] flex flex-col items-baseline gap-y-4 style-owerflow-001 overflow-y-auto p-2`}
                                onSubmit={formik.handleSubmit}
                            >
                                <label
                                    className="flex flex-col items-start"
                                    htmlFor="fish"
                                >
                                    {isFish}:
                                    <textarea
                                        className={`${
                                            formik.errors.fish
                                                ? "border-red-600"
                                                : "border-gray-400"
                                        } w-full border  outline-none p-2`}
                                        id="fish"
                                        cols="70"
                                        rows="3"
                                        onChange={formik.handleChange}
                                        value={formik.values.fish}
                                    ></textarea>
                                </label>
                                <label
                                    className="flex flex-col items-start"
                                    htmlFor="lavozim"
                                >
                                    {isLavozim}:
                                    <textarea
                                        className={`${
                                            formik.errors.lavozim
                                                ? "border-red-600"
                                                : "border-gray-400"
                                        } w-full border  outline-none p-2`}
                                        id="lavozim"
                                        cols="70"
                                        rows="5"
                                        onChange={formik.handleChange}
                                        value={formik.values.lavozim}
                                    ></textarea>
                                </label>
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center">
                                        {isImg}:{" "}
                                        {isImg === "Rasmni tahrirlash" && (
                                            <div className="inline-block italic text-[12px] text-red-600 ms-5">
                                                Agar o'zgartirilmasa o'z holida
                                                qoladi !Rasm
                                            </div>
                                        )}
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
                                        Rasim{" "}
                                        {imgTypes &&
                                            imgTypes.map((i) => i + ", ")}{" "}
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
            )}
        </>
    );
};

export default Raxbaryat;
