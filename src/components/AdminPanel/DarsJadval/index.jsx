import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";

const DarsJadval = () => {
    const UrlTalim = "http://api.kspi.uz/v1/jadval/talim_turi/";
    const UrlFakultet = "http://api.kspi.uz/v1/jadval/fakultet/";
    const UrlYonalish = "http://api.kspi.uz/v1/jadval/yonalish/";
    const UrlKurs = "http://api.kspi.uz/v1/jadval/kurs/";

    //Refresh
    // const refresh = async () => {

    // };

    const [isDataTalim, setIsDataTalim] = useState([]);
    const [isDataFakultet, setIsDataFakultet] = useState([]);
    const [isDataYonalish, setIsDataYonalish] = useState([]);
    const [isDataKurs, setIsDataKurs] = useState([]);

    useEffect(() => {
        //TalimTur
        axios
            .get(UrlTalim)
            .then((res) => setIsDataTalim(res.data))
            .catch((err) => console.log(err));
        //Fakultet
        axios
            .get(UrlFakultet)
            .then((res) => setIsDataFakultet(res.data))
            .catch((err) => console.log(err));
        //Yo'nalish
        axios
            .get(UrlYonalish)
            .then((res) => setIsDataYonalish(res.data))
            .catch((err) => console.log(err));
        //Kurs
        axios
            .get(UrlKurs)
            .then((res) => setIsDataKurs(res.data))
            .catch((err) => console.log(err));
        //Refresh
    }, []);

    const SignupSchemaTalim = Yup.object().shape({
        talim_turi: Yup.string().min(2, "Judaham kam!").required("Required"),
    });
    const SignupSchemaFakultet = Yup.object().shape({
        fakultet: Yup.string().min(2, "Judaham kam!").required("Required"),
    });
    const SignupSchemaYonalish = Yup.object().shape({
        yonalish: Yup.string().min(2, "Judaham kam!").required("Required"),
    });
    const SignupSchemaKurs = Yup.object().shape({
        kurs: Yup.number().max(5, "Ko'p").required("Required"),
    });

    //Ta'lim tur POST
    const formik_talim = useFormik({
        initialValues: {
            talim_turi: "",
        },
        validationSchema: SignupSchemaTalim,
        onSubmit: (values) => {
            axios.post(UrlTalim, values);
            formik_talim.resetForm();
        },
    });

    //Fakultet POST
    const formik_fakultet = useFormik({
        initialValues: {
            fakultet_talim_turi_id: "",
            fakultet: "",
        },
        validationSchema: SignupSchemaFakultet,
        onSubmit: (values) => {
            console.log(values);
            // if (values.fakultet_talim_turi_id === "") {
            //     if (isDataTalim[0].id) {
            //         formik_fakultet.values.fakultet_talim_turi_id = `${isDataTalim[0].id}`;
            //     }
            // }
            // axios.post(UrlFakultet, values);
            // formik_fakultet.resetForm();
        },
    });

    //Yonalish POST
    const formik_yonalish = useFormik({
        initialValues: {
            yonalish_talim_turi_id: "",
            yonalish_fakultet_id: "",
            yonalish: "",
        },
        validationSchema: SignupSchemaYonalish,
        onSubmit: (values) => {
            if (values.yonalish_talim_turi_id === "") {
                if (isDataTalim[0].id) {
                    formik_yonalish.values.yonalish_talim_turi_id = `${isDataTalim[0].id}`;
                }
            }
            if (values.yonalish_fakultet_id === "") {
                if (isDataFakultet[0].id) {
                    formik_yonalish.values.yonalish_fakultet_id = `${isDataFakultet[0].id}`;
                }
            }
            axios.post(UrlYonalish, values);
            formik_yonalish.resetForm();
        },
    });

    //Kurs POST
    const formik_kurs = useFormik({
        initialValues: {
            kurs_talim_turi_id: "",
            kurs_fakultet_id: "",
            kurs_yonalish_id: "",
            kurs: "",
        },
        validationSchema: SignupSchemaKurs,
        onSubmit: (values) => {
            if (values.kurs_talim_turi_id === "") {
                if (isDataTalim[0].id) {
                    formik_kurs.values.kurs_talim_turi_id = `${isDataTalim[0].id}`;
                }
            }
            if (values.kurs_fakultet_id === "") {
                if (isDataFakultet[0].id) {
                    formik_kurs.values.kurs_fakultet_id = `${isDataFakultet[0].id}`;
                }
            }
            if (values.kurs_yonalish_id === "") {
                if (isDataYonalish[0].id) {
                    formik_kurs.values.kurs_yonalish_id = `${isDataYonalish[0].id}`;
                }
            }
            axios.post(UrlKurs, values);
            formik_kurs.resetForm();
        },
    });

    //Edit
    const handleEdit = (id) => {};

    //Delet Talim
    const handleDeletTalim = (id) => {
        axios.delete(UrlTalim + id + "/");
    };
    //Delet Fakultet
    const handleDeletFakultet = (id) => {
        axios.delete(UrlFakultet + id + "/");
    };
    //Delet Yonalish
    const handleDeletYonalish = (id) => {
        axios.delete(UrlYonalish + id + "/");
    };
    //Delet Kurs
    const handleDeletKurs = (id) => {
        axios.delete(UrlKurs + id + "/");
    };
    return (
        <div className="px-2 py-10">
            <div className="flex flex-col items-center">
                <div className="text-center text-[25px]">
                    <h1>
                        <b>DARS JADVAL BO'LIMI</b>
                    </h1>
                </div>

                {/* Talim turi */}
                <h1 className="text-[20px] mt-6 mb-3">
                    <b>Talim turi:</b>
                </h1>
                <div className="w-[1000px] h-[400px] flex gap-x-2 border-b border-black">
                    <div className="w-[50%] flex flex-col gap-y-2">
                        {/* Get Data */}
                        <div className="border-b border-black px-10 py-2">
                            <b>Joylashtirilgan ma'lumotlar</b>
                        </div>
                        {isDataTalim.length === 0 ? (
                            <div className="text-red-600">
                                Ma'lumotlar joylanmagan !
                            </div>
                        ) : (
                            <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                                {isDataTalim.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center border border-gray-400 px-2"
                                    >
                                        <div>
                                            <b>id:</b> {item.id}
                                            <br />
                                            <b>Talim turi:</b> {item.talim_turi}
                                        </div>
                                        <div className="flex gap-x-2">
                                            <MdEdit
                                                className="text-green-700 cursor-pointer"
                                                onClick={() =>
                                                    handleEdit(item.id)
                                                }
                                            />
                                            <MdDelete
                                                className="text-red-600 cursor-pointer"
                                                onClick={() =>
                                                    handleDeletTalim(item.id)
                                                }
                                            />
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
                        {/* Ta'lim tur */}
                        <form
                            className="w-full px-10 mt-10"
                            onSubmit={formik_talim.handleSubmit}
                        >
                            <label
                                className="flex flex-col"
                                htmlFor="talim_turi"
                            >
                                Talim turi
                                <input
                                    className={`${
                                        formik_talim.errors.talim_turi
                                            ? "border-red-600"
                                            : "border-gray-400"
                                    } border outline-none py-1 px-2`}
                                    type="text"
                                    id="talim_turi"
                                    name="talim_turi"
                                    onChange={formik_talim.handleChange}
                                    value={formik_talim.values.talim_turi}
                                />
                            </label>
                            <button
                                className="w-[100px] float-right border-blue-500 bg-blue-500 text-white py-1 px-2 mt-5"
                                type="submit"
                            >
                                Jo'natish
                            </button>
                        </form>
                    </div>
                </div>

                {/* Fakultet */}
                <h1 className="text-[20px] mt-6 mb-3">
                    <b>Fakultet:</b>
                </h1>
                {isDataTalim.length === 0 ? (
                    <div className="w-[1000px] text-center text-red-600 border-b border-black pb-10">
                        Fakultet ma'lumotlarini joylashingiz uchun Talim turi
                        ma'lumotlari joylangan bo'lishi kerak !
                    </div>
                ) : (
                    <div className="w-[1000px] h-[400px] flex gap-x-2 border-b border-black">
                        <div className="w-[50%] flex flex-col gap-y-2">
                            {/* Get Data */}
                            <div className="border-b border-black px-10 py-2">
                                <b>Joylashtirilgan ma'lumotlar</b>
                            </div>
                            {isDataFakultet.length === 0 ? (
                                <div className="text-red-600">
                                    Ma'lumotlar joylanmagan !
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                                    {isDataFakultet.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border border-gray-400 px-2"
                                        >
                                            <div>
                                                <b>id:</b> {item.id}
                                                <br />
                                                <b>Talim turi id:</b>{item.fakultet_talim_turi_id}
                                                <br />
                                                <b>Fakultet:</b> {item.fakultet}
                                            </div>
                                            <div className="flex gap-x-2">
                                                <MdEdit
                                                    className="text-green-700 cursor-pointer"
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
                                                />
                                                <MdDelete
                                                    className="text-red-600 cursor-pointer"
                                                    onClick={() =>
                                                        handleDeletFakultet(
                                                            item.id
                                                        )
                                                    }
                                                />
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
                                onSubmit={formik_fakultet.handleSubmit}
                            >
                                <select
                                    className="border"
                                    onChange={formik_fakultet.handleChange}
                                    value={formik_fakultet.values.talim_turi}
                                    name="fakultet_talim_turi_id"
                                    id="fakultet"
                                >
                                    {isDataTalim.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.talim_turi}
                                        </option>
                                    ))}
                                </select>
                                <label
                                    className="flex flex-col"
                                    htmlFor="fakultet"
                                >
                                    Fakultet
                                    <input
                                        className={`${
                                            formik_fakultet.errors.fakultet
                                                ? "border-red-600"
                                                : "border-gray-400"
                                        } border outline-none py-1 px-2`}
                                        type="text"
                                        id="fakultet"
                                        name="fakultet"
                                        onChange={formik_fakultet.handleChange}
                                        value={formik_fakultet.values.fakultet}
                                    />
                                </label>
                                <button
                                    className="w-[100px] float-right border-blue-500 bg-blue-500 text-white py-1 px-2 mt-5"
                                    type="submit"
                                >
                                    Jo'natish
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Yo'nalish */}
                <h1 className="text-[20px] mt-6 mb-3">
                    <b>Yo'nalish:</b>
                </h1>
                {isDataFakultet.length === 0 ? (
                    <div className="w-[1000px] text-center text-red-600 border-b border-black pb-10">
                        Yo'nalish ma'lumotlarini joylashingiz uchun Fakultetlar
                        ma'lumotlari joylangan bo'lishi kerak !
                    </div>
                ) : (
                    <div className="w-[1000px] h-[400px] flex gap-x-2 border-b border-black">
                        <div className="w-[50%] flex flex-col gap-y-2">
                            {/* Get Data */}
                            <div className="border-b border-black px-10 py-2">
                                <b>Joylashtirilgan ma'lumotlar</b>
                            </div>
                            {isDataYonalish.length === 0 ? (
                                <div className="text-red-600">
                                    Ma'lumotlar joylanmagan !
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                                    {isDataYonalish.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border border-gray-400 px-2"
                                        >
                                            <div>
                                                <b>id:</b> {item.id}
                                                <br />
                                                <b>talim tur id:</b>{" "}
                                                {item.yonalish_talim_turi_id}
                                                <br />
                                                <b>Fakultet id:</b>{" "}
                                                {item.yonalish_fakultet_id}
                                                <br />
                                                <b>Yo'nalish:</b>{" "}
                                                {item.yonalish}
                                            </div>
                                            <div className="flex gap-x-2">
                                                <MdEdit
                                                    className="text-green-700 cursor-pointer"
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
                                                />
                                                <MdDelete
                                                    className="text-red-600 cursor-pointer"
                                                    onClick={() =>
                                                        handleDeletYonalish(
                                                            item.id
                                                        )
                                                    }
                                                />
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
                                onSubmit={formik_yonalish.handleSubmit}
                            >
                                <select
                                    className="border"
                                    onChange={formik_yonalish.handleChange}
                                    value={
                                        formik_yonalish.values
                                            .yonalish_talim_turi_id
                                    }
                                    name="yonalish_talim_turi_id"
                                    id="yonalish_talim_turi_id"
                                >
                                    {isDataTalim.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.talim_turi}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border"
                                    onChange={formik_yonalish.handleChange}
                                    value={
                                        formik_yonalish.values
                                            .yonalish_fakultet_id
                                    }
                                    name="yonalish_fakultet_id"
                                    id="yonalish_fakultet_id"
                                >
                                    {isDataFakultet.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.fakultet}
                                        </option>
                                    ))}
                                </select>

                                <label
                                    className="flex flex-col"
                                    htmlFor="yonalish"
                                >
                                    Yo'nalish
                                    <input
                                        className={`${
                                            formik_yonalish.errors.yonalish
                                                ? "border-red-600"
                                                : "border-gray-400"
                                        } border outline-none py-1 px-2`}
                                        type="text"
                                        id="yonalish"
                                        name="yonalish"
                                        onChange={formik_yonalish.handleChange}
                                        value={formik_yonalish.values.yonalish}
                                    />
                                </label>
                                <button
                                    className="w-[100px] float-right border-blue-500 bg-blue-500 text-white py-1 px-2 mt-5"
                                    type="submit"
                                >
                                    Jo'natish
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Kurs */}
                <h1 className="text-[20px] mt-6 mb-3">
                    <b>Kurs:</b>
                </h1>
                {isDataYonalish.length === 0 ? (
                    <div className="w-[1000px] text-center text-red-600 border-b border-black pb-10">
                        Kurs ma'lumotlarini joylashingiz uchun Yo'nalish
                        ma'lumotlari joylangan bo'lishi kerak !
                    </div>
                ) : (
                    <div className="w-[1000px] h-[400px] flex gap-x-2 border-b border-black">
                        <div className="w-[50%] h-full flex flex-col gap-y-2">
                            {/* Get Data */}
                            <div className="border-b border-black px-10 py-2">
                                <b>Joylashtirilgan ma'lumotlar</b>
                            </div>
                            {isDataKurs.length === 0 ? (
                                <div className="text-red-600">
                                    Ma'lumotlar joylanmagan !
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                                    {isDataKurs.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border border-gray-400 px-2"
                                        >
                                            <div>
                                                <b>id:</b> {item.id}
                                                <br />
                                                <b>talim tur id:</b>{" "}
                                                {item.kurs_talim_turi_id}
                                                <br />
                                                <b>Fakultet id:</b>{" "}
                                                {item.kurs_fakultet_id}
                                                <br />
                                                <b>Yo'nalish id:</b>{" "}
                                                {item.kurs_yonalish_id}
                                                <br />
                                                <b>Kurs:</b> {item.kurs}
                                            </div>
                                            <div className="flex gap-x-2">
                                                <MdEdit
                                                    className="text-green-700 cursor-pointer"
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
                                                />
                                                <MdDelete
                                                    className="text-red-600 cursor-pointer"
                                                    onClick={() =>
                                                        handleDeletKurs(item.id)
                                                    }
                                                />
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
                                <select
                                    className="border"
                                    onChange={formik_kurs.handleChange}
                                    value={
                                        formik_kurs.values.kurs_talim_turi_id
                                    }
                                    name="kurs_talim_turi_id"
                                    id="kurs_talim_turi_id"
                                >
                                    {isDataTalim.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.talim_turi}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="border"
                                    onChange={formik_kurs.handleChange}
                                    value={formik_kurs.values.kurs_fakultet_id}
                                    name="kurs_fakultet_id"
                                    id="kurs_fakultet_id"
                                >
                                    {isDataFakultet.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.fakultet}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="border"
                                    onChange={formik_kurs.handleChange}
                                    value={formik_kurs.values.kurs_yonalish_id}
                                    name="kurs_yonalish_id"
                                    id="kurs_yonalish_id"
                                >
                                    {isDataYonalish.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.yonalish}
                                        </option>
                                    ))}
                                </select>
                                <label className="flex flex-col" htmlFor="kurs">
                                    Kurs
                                    <input
                                        className={`${
                                            formik_kurs.errors.kurs
                                                ? "border-red-600"
                                                : "border-gray-400"
                                        } border outline-none py-1 px-2`}
                                        type="text"
                                        id="kurs"
                                        name="kurs"
                                        onChange={formik_kurs.handleChange}
                                        value={formik_kurs.values.kurs}
                                    />
                                </label>
                                <button
                                    className="w-[100px] float-right border-blue-500 bg-blue-500 text-white py-1 px-2 mt-5"
                                    type="submit"
                                >
                                    Jo'natish
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DarsJadval;
