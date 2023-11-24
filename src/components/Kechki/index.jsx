import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";
import { MetroSpinner } from "react-spinners-kit";
import { BsImage } from "react-icons/bs";

const Kechki = () => {
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
    const [isDataDJRasmFilter, setIsDataDJRasmFilter] = useState(null);

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
                    res.data.filter((item) => item.talim_turi === "Kechki")
                );
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false);
            });
        await axios
            .get(UrlFakultet)
            .then((res) => {
                setIsDataFakultet(res.data);
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
            isDataFakultet.find((item) => Number(item.id) === Number(id));
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
        }
    }, [isDataTalim, isDataFakultet]);
    //Logic Selects Fakultet
    useEffect(() => {
        // if (isDataTalim) {
        //     setIsDataYonalish(isDataYonalish && isDataYonalish.filter(item => Number(item.yonalish_fakultet_id) === Number(isDataTalim[0].id)))
        // }
        if (isDataFakultetFilter) {
            setIsDataYonalishFilter(isDataYonalish && isDataYonalish.filter(item => Number(item.yonalish_fakultet_id) === Number(formik.values.fakultet)))
        }
    }, [isDataFakultetFilter, isDataTalim, isDataYonalish, formik.values.fakultet]);
    // Logik Get data
    useEffect(() => {
        if (isDataTalim) {
            setIsDataDJRasmFilter(isDataDJRasm && isDataDJRasm.filter(item => Number(item.turi) === Number(isDataTalim[0].id)))
        }
    }, [isDataTalim, isDataDJRasm])

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
        <div className="max-w-6xl mx-auto pt-10">
            {isLoader ? (
                <div className="h-full flex justify-center pt-60">
                    <div className="spinner">
                        <h1>Yuklanmoqda...</h1>
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
                <>
                    {/* Yo'nalish */}
                    <div className=" grid grid-cols-2">
                        <div className="max-h-[750px] p-5">
                            {/* Get Data */}
                            <h1 className="text-xl font-bold text-stone-500 text-center pb-3">
                                Dars jadvallari
                            </h1>
                            {isDataDJRasm && isDataDJRasm.length === 0 ? (
                                <div className="text-red-600">
                                    Ma'lumotlar joylanmagan !
                                </div>
                            ) : (
                                <div className="h-full flex flex-col overflow-y-auto p-5 pt-0">
                                    {isDataDJRasmFilter &&
                                        isDataDJRasmFilter
                                            .sort((a, b) => a.id - b.id)
                                            .map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="card card-side bg-base-100 shadow-xl p-2 mb-4"
                                                >
                                                    <figure className="">
                                                        <img
                                                            className="w-28 h-full rounded-xl"
                                                            src={item.rasm}
                                                            alt="Movie"
                                                        />
                                                    </figure>
                                                    <div className="card-body p-2 pl-4">
                                                        <h2 className="text-xl font-bold text-slate-600">Fakultet: <span className="text-ms font-medium text-slate-500">
                                                            {" "}
                                                            {handleGetFakultet(
                                                                item.fakultet
                                                            ).length > 40
                                                                ? handleGetFakultet(
                                                                    item.fakultet
                                                                ).slice(
                                                                    0,
                                                                    40
                                                                ) + "..."
                                                                : handleGetFakultet(
                                                                    item.fakultet
                                                                )}
                                                        </span></h2>
                                                        <h2 className="text-xl font-bold text-slate-600">Yo'nalish: <span className="text-ms font-medium text-slate-500">
                                                            {" "}
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
                                                        </span> </h2>
                                                        <h2 className="text-xl font-bold text-slate-600">Kurs: <span className="text-ms font-medium text-slate-500">
                                                            {item.kurs}
                                                        </span> </h2>
                                                        <div className="card-actions justify-end mt-2">
                                                            <button
                                                                onClick={() =>
                                                                    handleEdit(item.id)
                                                                }
                                                                className="btn-outline border py-1 px-6 rounded-md btn-accent"
                                                            >
                                                                <MdEdit />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleDelet(item.id)
                                                                }
                                                                className="btn-outline border py-1 px-6 rounded-md btn-error"
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
                        <div className="p-5">
                        <h1 className="text-xl font-bold text-stone-500 text-center pb-3">
                                Dars jadvalini yuklash
                            </h1>
                            {/* Post Data */}
                            <form
                                className="max-w-sm mx-auto shadow-md p-10"
                                onSubmit={formik.handleSubmit}
                            >
                                {/* Fakultet */}
                                <label htmlFor="fakultet"className="text-md font-bold pl-2 text-slate-500" >Fakultet</label>
                                <select
                                    className={`${formik.errors.fakultet ? "select-error w-full max-w-sm shadow-lg mb-4" : "select w-full max-w-sm shadow-lg mb-4"} w-full select max-w-xs`}
                                    onChange={formik.handleChange}
                                    value={
                                        formik.values.fakultet || ""
                                    }
                                    name="fakultet"
                                    id="fakultet"
                                >
                                    <option disabled value="">
                                        Fakultetni tanlang
                                    </option>
                                    {isDataFakultetFilter &&
                                        isDataFakultetFilter.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.fakultet}
                                            </option>
                                        ))}
                                </select>
                                {/* Yo'nalish */}
                                <label htmlFor="yonalish"className="text-md font-bold pl-2 text-slate-500" >Yo'nalish</label>
                                <select
                                    className={`${formik.errors.yonalish ? "select-error w-full max-w-sm shadow-lg mb-4" : "select w-full max-w-sm shadow-lg mb-4"} w-full select max-w-xs`}
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
                                <label htmlFor="kurs"className="text-md font-bold pl-2 text-slate-500" >Kurs</label>
                                <select
                                    className={`${formik.errors.kurs ? "select-error w-full max-w-sm shadow-lg mb-4" : "select w-full max-w-sm shadow-lg mb-4"} w-full select max-w-xs`}
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

                                <div className="flex flex-col items-start text-md font-bold pl-2 text-slate-500">
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
                                                } flex items-center border file-input file-input-bordered w-full max-w-sm`}
                                        >
                                            <button
                                                onClick={() => handleClick()}
                                                type="button"
                                                className="flex h-full items-center gap-x-2 bg-green-300 hover:bg-green-500 active:bg-green-300 mr-1 px-4"
                                            >
                                                <BsImage /> Tanlash
                                            </button>
                                            <span
                                                className={`${imgErr ? "text-red-600" : ""
                                                    } border-s-gray-400`}
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
                                        className="btn bg-sky-600 hover:bg-sky-700 shadow-lg text-white w-full mt-8"
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

export default Kechki;
