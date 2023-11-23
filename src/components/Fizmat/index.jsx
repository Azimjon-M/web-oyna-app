import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";
import { MetroSpinner } from "react-spinners-kit";
import { BsImage } from "react-icons/bs";

const Fizmat = () => {
    const UrlTalim = "https://api.kspi.uz/v1/jadval/talim_turi/";
    const UrlFakultet = "https://api.kspi.uz/v1/jadval/fakultet/";
    const UrlYonalish = "https://api.kspi.uz/v1/jadval/yonalish/";
    const UrlDJRasm = "https://api.kspi.uz/v1/jadval/jadval/";

    const [isDataTalim, setIsDataTalim] = useState(null);
    const [isDataFakultet, setIsDataFakultet] = useState(null);
    const [isDataFakultetFilter, setIsDataFakultetFilter] = useState(null);
    const [isDataYonalish, setIsDataYonalish] = useState(null);
    const [isDataYonalishFilter, setIsDataYonalishFilter] = useState(null);
    const [isDataDJRasm, setIsDataDJRasm] = useState(null);

    const [isEdit, setIsEdit] = useState(false);

    const [isLoader, setIsLoader] = useState(true);

    const [imgInpText, setImgInpText] = useState("Rasm Tanlanmagan !");
    const [imgErr, setImgErr] = useState(null);
    const [isImg, setIsImg] = useState("Rasm");
    const [isFile, setIsFile] = useState("");

    const imgTypes = ["jpg", "jpeg", "png", "tiff"];

    const SignupSchemaYonalish = Yup.object().shape({
        fakultet: Yup.string().min(1, "Judaham kam!").required("Required"),
        yonalish: Yup.string().min(1, "Judaham kam!").required("Required"),
        kurs: Yup.string().min(1, "Judaham kam!").required("Required"),
    });
    //Yonalish POST
    const formik = useFormik({
        initialValues: {
            fakultet: "",
            yonalish: "",
            kurs: "",
        },
        validationSchema: SignupSchemaYonalish,
        onSubmit: async (values) => {
            try {
                //Edit
                if (isEdit) {
                    setIsLoader(true);
                    setIsEdit(false);
                    const formData = new FormData();
                    formData.append("turi", isDataTalim[0].id);
                    formData.append("fakultet", values.fakultet);
                    formData.append("yonalish", values.yonalish);
                    formData.append("kurs", values.kurs);
                    formData.append("rasm", isFile);
                    setIsImg("Rasm");
                    setImgInpText("Rasm tanlanmagan !");
                    setIsFile("");
                    formik.resetForm();
                    await axios.put(UrlDJRasm + isEdit + "/", formData);
                    handleRefresh();
                    setIsLoader(true);
                }
                //Post                
                else {
                    if (!imgErr && isFile.length === 0) {
                        setImgErr(true);
                    } else {
                        setIsLoader(true)
                        const formData = new FormData();
                        formData.append("turi", isDataTalim[0].id);
                        formData.append("fakultet", values.fakultet);
                        formData.append("yonalish", values.yonalish);
                        formData.append("kurs", values.kurs);
                        formData.append("rasm", isFile);
                        formik.resetForm();
                        setIsFile("");
                        setImgInpText("Rasm tanlanmagan !");
                        await axios.post(UrlDJRasm, formData);
                        handleRefresh();
                        setIsLoader(false)
                    }
                }
            } catch (error) {
                console.log(error);
                // navigate('/info-kios-error', { state: { error } });
            }
        },
    });
    //Edit
    const handleEdit = async (id) => {
        try {
            const response = await axios.get(UrlDJRasm + id + "/");
            const data = response.data;
            formik.setValues({
                fakultet: data.fakultet,
                yonalish: data.yonalish,
                kurs: data.kurs,
            });
            setIsEdit(id);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    //Delet Yonalish
    const handleDelet = async (id) => {
        try {
            await axios.delete(UrlDJRasm + id + "/");
            handleRefresh();
        } catch (error) {
            console.error(error);
        }
    };
    //Refresh
    const handleRefresh = async () => {
        await axios
            .get(UrlTalim)
            .then((res) => {
                setIsDataTalim(
                    res.data.filter((item) => item.talim_turi === "Kunduzgi")
                );
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false);
            });
        await axios
            .get(UrlFakultet)
            .then((res) => {
                setIsDataFakultet(res.data.filter((item) => item.fakultet === "Fizika-matematika"));
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false);
            });
        await axios
            .get(UrlYonalish)
            .then((res) => {
                setIsDataYonalish(res.data);
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false);
            });
        await axios.get(UrlDJRasm).then((res) => {
            setIsDataDJRasm(res.data);
            setIsLoader(false);
        }).catch(err => console.log(err))
    };
    //GetFakultet
    const handleGetFakultet = (id) => {
        const foundFakultet =
            isDataFakultet &&
            isDataFakultet.find((item) =>  Number(item.id) === Number(id));
        return foundFakultet ? foundFakultet.fakultet : "(noaniq)";
    };
    //GetYonalish
    const handleGetYonalish = (id) => {
        const foundYonalish =
            isDataYonalish &&
            isDataYonalish.find((item) => Number(item.id) === Number(id));
        return foundYonalish ? foundYonalish.yonalish : "(noaniq)";
    };
    //LifeCycle
    useEffect(() => {
        handleRefresh();
    }, []);

    //Logic Selects Fakultet
    useEffect(() => {
        if (isDataTalim) {
            setIsDataFakultetFilter(isDataFakultet && isDataFakultet.filter(item => Number(item.fakultet_talim_turi_id) === Number(isDataTalim[0].id)))
            console.log();
        }
    }, [isDataTalim, isDataFakultet]);
    console.log(isDataFakultet[1].id);
    //Logic Selects Fakultet
    useEffect(() => {
        // if (isDataTalim) {
        //     setIsDataYonalish(isDataYonalish && isDataYonalish.filter(item => Number(item.yonalish_fakultet_id) === Number(isDataTalim[0].id)))
        // }
        if (isDataFakultetFilter) {
            setIsDataYonalishFilter(isDataYonalish && isDataYonalish.filter(item => Number(item.yonalish_fakultet_id) === Number(formik.values.fakultet)))
        }
    }, [isDataFakultetFilter, isDataTalim, isDataYonalish, formik.values.fakultet]);

    const handleClick = () => {
        document.getElementById("rasim").click();
    };
    const handleChange = (e) => {
        const fayl = e.target.files[0];
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
        <div className="flex flex-col items-center">
            {isLoader ? (
                <div className="h-[100vh] flex justify-center items-center ">
                    <div className="spinner">
                        <h1>Yuklanmoqda...</h1>
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
                <>
                    {/* Yo'nalish */}
                    <h1 className="text-[24px] mt-6 mb-3">
                        <b>Fizika-matematika fakulteti</b>
                    </h1>
                    <div className="w-[1000px] h-[600px] flex gap-x-2 border-b border-black">
                        <div className="w-[50%] flex flex-col gap-y-2">
                            {/* Get Data */}
                            <div className="border-b border-black px-10 py-2">
                                <b>Joylashtirilgan ma'lumotlar</b>
                            </div>
                            {isDataDJRasm && isDataDJRasm.length === 0 ? (
                                <div className="text-red-600">
                                    Ma'lumotlar joylanmagan !
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                                    {isDataDJRasm &&
                                        isDataDJRasm
                                            .sort((a, b) => a.id - b.id)
                                            .map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="w-full h-[150px] card card-side bg-base-100 shadow-xl border border-blue-600"
                                                >
                                                    <figure className="w-[150px] h-full relative">
                                                        <img
                                                            className="w-full h-full absolute top-0 left-0"
                                                            src={item.rasm}
                                                            alt="Movie"
                                                        />
                                                    </figure>
                                                    <div className="w-full p-2">
                                                        <p>
                                                            Yo'nalishi:{" "}
                                                            {handleGetYonalish(
                                                                item.yonalish
                                                            ).length > 37
                                                                ? handleGetYonalish(
                                                                    item.yonalish
                                                                ).slice(
                                                                    0,
                                                                    37
                                                                ) + "..."
                                                                : handleGetYonalish(
                                                                    item.yonalish
                                                                )}
                                                        </p>
                                                        <p>
                                                            Kursi: {item.kurs}
                                                        </p>
                                                        <div className="card-actions justify-end mt-2">
                                                            <button
                                                                onClick={() =>
                                                                    handleEdit(item.id)
                                                                }
                                                                className="btn btn-outline btn-accent"
                                                            >
                                                                <MdEdit />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleDelet(item.id)
                                                                }
                                                                className="btn btn-outline btn-error"
                                                            >
                                                                <MdDelete />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                </div>
                            )}
                        </div>
                        <div className="w-[50%]">
                            <div className="px-10 py-2 border-b border-black">
                                <b>Ma'lumotlar joylashtirish</b>
                            </div>
                            {/* Post Data */}
                            <form
                                className="w-full px-10 mt-10"
                                onSubmit={formik.handleSubmit}
                            >
                                {/* Yo'nalish */}
                                <select
                                    className={`${formik.errors.yonalish ? "select-error" : " select-primary"} w-full select max-w-xs`}
                                    onChange={formik.handleChange}
                                    value={
                                        formik.values.yonalish || ""
                                    }
                                    name="yonalish"
                                    id="yonalish"
                                >
                                    <option disabled value="">
                                        Yo'nalishni tanlang
                                    </option>
                                    {isDataYonalishFilter &&
                                        isDataYonalishFilter.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.yonalish}
                                            </option>
                                        ))}
                                </select>
                                {/* Kurs */}
                                <select
                                    className={`${formik.errors.kurs ? "select-error" : " select-primary"} w-full select max-w-xs`}
                                    onChange={formik.handleChange}
                                    value={formik.values.kurs || ""}
                                    name="kurs"
                                    id="kurs"
                                >
                                    <option value="" disabled>Kursni tanlang</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>

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
                                        className={`${imgErr
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
                                            className={`${imgErr ? "text-red-600" : ""
                                                } h-[30px] px-2 border border-s-gray-400`}
                                            id="inp-text"
                                        >
                                            {imgInpText}
                                        </span>
                                    </div>
                                    <span
                                        className={`${imgErr
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
                                        onChange={(e) => handleChange(e)}
                                        id="rasim"
                                        type="file"
                                        hidden="hidden"
                                    />
                                </div>
                                <button
                                    className="w-[100px] float-right border-blue-500 bg-blue-500 text-white py-1 px-2 mt-5"
                                    type="submit"
                                >
                                    Jo'natish
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Fizmat;
