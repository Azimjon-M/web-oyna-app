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


    const [isDataTalim, setIsDataTalim] = useState([]);
    const [isDataFakultet, setIsDataFakultet] = useState([]);
    if (!isDataFakultet.length == 0) {
        // const getName = isDataFakultet.map(items => isDataTalim.filter(item => item.id == items.fakultet_talim_turi_id));
    }
    const [isDataYonalish, setIsDataYonalish] = useState([]);
    const [isDataKurs, setIsDataKurs] = useState([]);
    // console.log("Taliom tur:", isDataTalim);
    // console.log("Fakultet:", isDataFakultet);
    // console.log("Yonalsih:", isDataYonalish);
    // console.log("Kurs:", isDataKurs);

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
        kurs: Yup.string().min(2, "Judaham kam!").required("Required"),
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
            if (values.fakultet_talim_turi_id == "") {
                if (isDataTalim[0].id) {
                    formik_fakultet.values.fakultet_talim_turi_id = `${isDataTalim[0].id}`
                }
                //else internet yaxshi ihslaman yoxud isDataTalim kelmagda
            }
            axios.post(UrlFakultet, values);
            formik_fakultet.resetForm();
        },
    });
    //Yonalish POST
    const formik_yonalish = useFormik({
        initialValues: {
            yonalish: "",
        },
        validationSchema: SignupSchemaYonalish,
        onSubmit: (values) => {
            axios.post(UrlYonalish, values);
            formik_yonalish.resetForm();
        },
    });
    //kurs POST
    const formik_kurs = useFormik({
        initialValues: {
            kurs: "",
        },
        validationSchema: SignupSchemaKurs,
        onSubmit: (values) => {
            axios.post(UrlKurs, values);
            formik_kurs.resetForm();
        },
    });

    //Edit
    const handleEdit = (id) => {};
    //Delet
    const handleDelet = (id) => {
        axios.delete(UrlTalim + id + "/");
    };
    //Fakultet select
    const handleClickSelect = (name) => {
        switch (name) {
            case "fakultet":
                const seleect = document.getElementById("fakultet");
                console.log(seleect.value);
                break;

            default:
                console.log("hi default");
                break;
        }
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
                <h1 className="mt-6 mb-3">
                    <b>Talim turi:</b>
                </h1>
                <div className="w-[1000px] h-[200px] flex gap-x-2 border-b border-black">
                    <div className="w-[50%] flex flex-col gap-y-2">
                        {/* Get Data */}
                        {isDataTalim.map((item) => (
                            <div
                                key={item.id}
                                className="h-[50px] flex justify-between items-center border border-gray-400 px-2"
                            >
                                <div>
                                    <b>id:</b> {item.id}
                                    <br />
                                    <b>Talim turi:</b> {item.talim_turi}
                                </div>
                                <div className="flex gap-x-2">
                                    <MdEdit
                                        className="text-green-700 cursor-pointer"
                                        onClick={() => handleEdit(item.id)}
                                    />
                                    <MdDelete
                                        className="text-red-600 cursor-pointer"
                                        onClick={() => handleDelet(item.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[50%] flex flex-col items-center justify-center">
                        {/* Post Data */}
                        {/* Ta'lim tur */}
                        <form
                            className="w-full px-10"
                            onSubmit={formik_talim.handleSubmit}
                        >
                            <label
                                className="flex flex-col"
                                htmlFor="talim_turi"
                            >
                                Talim turi
                                <input
                                    className={`${formik_talim.errors.talim_turi ? 'border-red-600' : 'border-gray-400'} border outline-none py-1 px-2`}
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
                <h1 className="mt-6 mb-3">
                    <b>Fakultet:</b>
                </h1>
                {isDataTalim.length == 0 ? (
                    <div className="w-[1000px] text-center text-red-600 border-b border-black pb-10">
                        Talim turi ma'lumotlari yuklanmaguncha Fakultetlarni
                        yuklay olmaysiz !
                    </div>
                ) : (
                    <div className="w-[1000px] h-[200px] flex gap-x-2 border-b border-black">
                        <div className="w-[50%] flex flex-col gap-y-2">
                            {/* Get Data */}
                            {isDataFakultet.length === 0 ? (
                                <div>Ma'lumotlar joylanmagan</div>
                            ) : (
                                isDataFakultet.map((item) => (
                                    <div
                                        key={item.id}
                                        className="h-[50px] flex justify-between items-center border border-gray-400 px-2"
                                    >
                                        <div>
                                            <b>id:</b> {item.id}
                                            <br />
                                            <b>Talim turi:</b> {item.fakultet_talim_turi_id}
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
                                                    handleDelet(item.id)
                                                }
                                            />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="w-[50%] flex flex-col items-center justify-center">
                            {/* Post Data */}
                            <form
                                className="w-full px-10"
                                onSubmit={formik_fakultet.handleSubmit}
                            >
                                <select
                                    className="border"
                                    onChange={formik_fakultet.handleChange}
                                    value={formik_fakultet.values.talim_turi}
                                    name="fakultet_talim_turi_id"
                                    id="fakultet"
                                >
                                    {isDataTalim.map(item => (
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
                                        className={`${formik_fakultet.errors.fakultet ? 'border-red-600' : 'border-gray-400'} border outline-none py-1 px-2`}
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
                <h1 className="mt-6 mb-3">
                    <b>Yo'nalish:</b>
                </h1>

                {/* Kurs */}
                <h1 className="mt-6 mb-3">
                    <b>Kurs:</b>
                </h1>
            </div>
        </div>
    );
};

export default DarsJadval;
