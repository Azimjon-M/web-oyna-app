import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";
import { MetroSpinner } from "react-spinners-kit";
import { BsImage } from "react-icons/bs";
import APIRasm from "../../../../services/DJRasm";

const DarsJadvalRasm = () => {
    const [isDataTalim, setIsDataTalim] = useState(null);
    const [isDataFakultet, setIsDataFakultet] = useState(null);
    const [isDataFakultetFilter, setIsDataFakultetFilter] = useState(null);
    const [isDataYonalish, setIsDataYonalish] = useState(null);
    const [isDataYonalishFilter, setIsDataYonalishFilter] = useState(null);
    const [isDataDJRasm, setIsDataDJRasm] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
    const [isT, setIsT] = useState(true);
    const [isF, setIsF] = useState(false);
    const [isY, setIsY] = useState(false);

    const [imgInpText, setImgInpText] = useState("Rasm Tanlanmagan !");
    const [imgErr, setImgErr] = useState(null);
    const [isImg, setIsImg] = useState("Rasm");
    const [isFile, setIsFile] = useState("");

    const imgTypes = ["jpg", "jpeg", "png", "tiff"];

    const SignupSchemaKurs = Yup.object().shape({
        turi: Yup.string().max(5, "Ko'p").required("Required"),
        fakultet: Yup.string().max(5, "Ko'p").required("Required"),
        yonalish: Yup.string().max(5, "Ko'p").required("Required"),
        kurs: Yup.string().max(5, "Ko'p").required("Required"),
    });
    // Selects Hidden
    const handleChangeSelect = (value) => {
        try {
            switch (value) {
                case "a":
                    setIsT(false);
                    setIsF(true);
                    setIsY(false);
                    break;
                case "b":
                    setIsT(false);
                    setIsF(false);
                    setIsY(true);
                    break;
                case "c":
                    setIsT(false);
                    setIsF(false);
                    setIsY(true);
                    break;
                case "d":
                    setIsT(false);
                    setIsF(false);
                    setIsY(false);
                    break;
                case "p":
                    setIsT(true);
                    setIsF(false);
                    setIsY(false);
                    break;
                default:
                    setIsT(true);
                    setIsF(false);
                    setIsY(false);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    };
    //Refresh length
    const handleRefresh = async () => {
        await APIRasm
            .getT()
            .then((res) => {
                setIsDataTalim(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        await APIRasm
            .getF()
            .then((res) => {
                setIsDataFakultet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        await APIRasm
            .getY()
            .then((res) => {
                setIsDataYonalish(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        await APIRasm
            .getR()
            .then((res) => {
                setIsDataDJRasm(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    //Kurs POST Edit
    const formik_kurs = useFormik({
        initialValues: {
            turi: "",
            fakultet: "",
            yonalish: "",
            kurs: "1",
        },
        validationSchema: SignupSchemaKurs,
        onSubmit: async (values) => {
            try {
                //Edit
                if (isEdit) {
                    formik_kurs.resetForm();
                    setIsImg("Rasm");
                    setIsEdit(false);
                    APIRasm.put(isEdit, values);
                    handleRefresh();
                }
                //Post
                else {
                    if (!imgErr && isFile.length === 0) {
                        setImgErr(true);
                    } else {
                        const formData = new FormData();
                        formData.append("turi", values.turi);
                        formData.append("fakultet", values.fakultet);
                        formData.append("yonalish", values.yonalish);
                        formData.append("kurs", values.kurs);
                        formData.append("rasm", isFile);
                        APIRasm.post(formData);
                        handleChangeSelect("p");
                        formik_kurs.resetForm();
                        setIsFile("");
                        setImgInpText("Rasm tanlanmagan !");
                        handleRefresh();
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
    });

    //Edit
    const handleEdit = async (id) => {
        await APIRasm.getbyId(id).then((res) => {
            handleChangeSelect("d");
            setIsImg("Rasmni tahrirlash");
            formik_kurs.setValues({
                turi: res.data.turi,
                fakultet: res.data.fakultet,
                yonalish: res.data.yonalish,
                kurs: res.data.kurs,
            });
            setIsEdit(id);
        });
    };
    //Delet Dars Jadval Rasmi
    const handleDelete = async (id) => {
        try {
            APIRasm.del(id);
            handleRefresh();
        } catch (error) {
            console.log(error);
        }
    };
    //GetTalimTur
    const handleGetTalimTur = (id) => {
        const foundTalim =
            isDataTalim &&
            isDataTalim.find((item) => Number(item.id) === Number(id));
        return foundTalim ? foundTalim.talim_turi : "(noaniq)";
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
    useEffect(() => {
        handleRefresh();
    }, []);

    //LifeCycle and logik selects filter
    useEffect(() => {
        //Fakultetni filterlash
        let filterF =
            isDataFakultet &&
            isDataFakultet.filter(
                (item) =>
                    Number(item.fakultet_talim_turi_id) ===
                    Number(formik_kurs.values.turi)
            );
        setIsDataFakultetFilter(filterF);
        //Yonalishni filterlash
        let filterY =
            isDataYonalish &&
            isDataYonalish.filter(
                (item) =>
                    Number(item.yonalish_fakultet_id) ===
                    Number(formik_kurs.values.fakultet)
            );
        setIsDataYonalishFilter(filterY);
    }, [formik_kurs.values, isDataTalim, isDataFakultet, isDataYonalish]);

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
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
                <>
                    {/* Kurs */}
                    <h1 className="text-[20px] mt-6 mb-3">
                        <b>Dars Jadval Rasmi:</b>
                    </h1>
                    <div className="w-[1000px] h-[400px] flex justify-center gap-x-2">
                        <div className="w-[50%] h-full flex flex-col gap-y-2">
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
                                                    className="w-full h-[105px] flex justify-between items-center border border-gray-400 p-1 bg-white"
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="w-[100px] h-full inline-block overflow-hidden">
                                                            <img
                                                                className="w-full h-auto"
                                                                src={item.rasm}
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <div className="flex flex-col relative">
                                                            <div className="whitespace-nowrap">
                                                                <b>
                                                                    Talim turi:{" "}
                                                                </b>
                                                                {handleGetTalimTur(
                                                                    item.turi
                                                                )}
                                                            </div>
                                                            <div className="whitespace-nowrap">
                                                                <b>
                                                                    Fakulteti:{" "}
                                                                </b>
                                                                {handleGetFakultet(
                                                                    item.fakultet
                                                                ).length > 30
                                                                    ? handleGetFakultet(
                                                                          item.fakultet
                                                                      ).slice(
                                                                          0,
                                                                          30
                                                                      ) + "..."
                                                                    : handleGetFakultet(
                                                                          item.fakultet
                                                                      )}
                                                            </div>
                                                            <div className="whitespace-nowrap">
                                                                <b>
                                                                    Yo'nalishi:{" "}
                                                                </b>
                                                                {handleGetYonalish(
                                                                    item.yonalish
                                                                ).length > 30
                                                                    ? handleGetYonalish(
                                                                          item.yonalish
                                                                      ).slice(
                                                                          0,
                                                                          30
                                                                      ) + "..."
                                                                    : handleGetYonalish(
                                                                          item.yonalish
                                                                      )}
                                                            </div>
                                                            <div className="whitespace-nowrap">
                                                                <b>Kursi: </b>
                                                                {item.kurs}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end items-center gap-x-3 pe-2">
                                                        <span className="cursor-pointer">
                                                            <MdEdit
                                                                title="Tahrirlash"
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
                                                                title="O'chirish"
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
                            )}
                        </div>
                        <div className="w-[50%]">
                            <div className="px-10 py-2 border-b border-black">
                                <b>Ma'lumotlar joylashtirish</b>
                            </div>
                            {/* Post Data */}
                            <form
                                className="w-full px-10 mt-10"
                                onSubmit={formik_kurs.handleSubmit}
                            >
                                {/* TalimTur */}
                                <select
                                    className={`${isT ? "" : "hidden"} ${
                                        formik_kurs.errors.turi &&
                                        "border-red-600"
                                    } border`}
                                    onChange={(e) => {
                                        formik_kurs.handleChange(e);
                                        handleChangeSelect("a");
                                    }}
                                    value={formik_kurs.values.turi || ""}
                                    name="turi"
                                    id="turi"
                                >
                                    <option value="" disabled>
                                        Talim turini tanlang
                                    </option>
                                    {isDataTalim &&
                                        isDataTalim.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.talim_turi}
                                            </option>
                                        ))}
                                </select>
                                {/* Fakultet */}
                                <select
                                    className={`${isF ? "" : "hidden"} ${
                                        formik_kurs.errors.fakultet &&
                                        "border-red-600"
                                    } border`}
                                    onChange={(e) => {
                                        formik_kurs.handleChange(e);
                                        handleChangeSelect("b");
                                    }}
                                    value={formik_kurs.values.fakultet || ""}
                                    name="fakultet"
                                    id="fakultet"
                                >
                                    <option value="" disabled>
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
                                {/* Yonalish */}
                                <select
                                    className={`${isY ? "" : "hidden"} ${
                                        formik_kurs.errors.yonalish &&
                                        "border-red-600"
                                    } border`}
                                    onChange={(e) => {
                                        formik_kurs.handleChange(e);
                                        handleChangeSelect("c");
                                    }}
                                    value={formik_kurs.values.yonalish || ""}
                                    name="yonalish"
                                    id="yonalish"
                                >
                                    <option value="" disabled>
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
                                <br />
                                Kurs
                                <select
                                    className="border"
                                    name="kurs"
                                    id="kurs"
                                    onChange={formik_kurs.handleChange}
                                    value={formik_kurs.values.kurs || "1"}
                                >
                                    <option value="1">1 - kurs</option>
                                    <option value="2">2 - kurs</option>
                                    <option value="3">3 - kurs</option>
                                    <option value="4">4 - kurs</option>
                                    <option value="5">5 - kurs</option>
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

export default DarsJadvalRasm;
