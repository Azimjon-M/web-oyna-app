import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";

const Kurs = ({ dataTalim, dataFakultet, dataYonalish, dataKurs }) => {
    const UrlKurs = "http://api.kspi.uz/v1/jadval/kurs/";
    const [isDataYonalish, setIsDataYonalish] = useState(dataYonalish);
    const [isDataFakultet, setIsDataFakultet] = useState(dataFakultet);
    const [isDataKurs, setIsDataKurs] = useState(dataKurs);
    const [isEdit, setIsEdit] = useState(false);

    const SignupSchemaKurs = Yup.object().shape({
        kurs: Yup.number().max(5, "Ko'p").required("Required"),
    });
    //Kurs POST Edit
    const formik_kurs = useFormik({
        initialValues: {
            kurs_talim_turi_id: "",
            kurs_fakultet_id: "",
            kurs_yonalish_id: "",
            kurs: "1",
        },
        validationSchema: SignupSchemaKurs,
        onSubmit: async (values) => {
            console.log('bosilayabdi');
            try {
                //Edit
                if (isEdit) {
                    await axios.put(UrlKurs + isEdit + "/", values);
                    formik_kurs.resetForm();
                    setIsEdit(false);
                    handleRefresh();
                }
                //Post
                else {
                    if (values.kurs_talim_turi_id === "") {
                        formik_kurs.values.kurs_talim_turi_id =
                            dataTalim && `${dataTalim[0].id}`;
                    }
                    if (values.kurs_fakultet_id === "") {
                        formik_kurs.values.kurs_fakultet_id =
                            dataFakultet && `${dataFakultet[0].id}`;
                    }
                    if (values.kurs_yonalish_id === "") {
                        formik_kurs.values.kurs_yonalish_id =
                            dataYonalish && `${dataYonalish[0].id}`;
                    }
                    if (values.kurs === "") {
                        formik_kurs.values.kurs_yonalish_id = '1'
                    }
                    await axios.post(UrlKurs, values);
                    formik_kurs.resetForm();
                    handleRefresh();
                }
            } catch (error) {
                console.error(error);
            }
        },
    });
    //Edit
    const handleEdit = async (id) => {
        try {
            const response = await axios.get(UrlKurs + id + "/");
            const data = response.data;
            formik_kurs.setValues({
                kurs_talim_turi_id: data.kurs_talim_turi_id,
                kurs_fakultet_id: data.kurs_fakultet_id,
                kurs_yonalish_id: data.kurs_yonalish_id,
                kurs: data.kurs,
            });
            setIsEdit(id);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    //Delet Kurs
    const handleDeletKurs = async (id) => {
        try {
            await axios.delete(UrlKurs + id + "/");
            handleRefresh();
        } catch (error) {
            console.error(error);
        }
    };
    //Refresh
    const handleRefresh = async () => {
        try {
            await axios
                .get(UrlKurs)
                .then((res) => setIsDataKurs(res.data))
                .catch((err) => console.log(err));
        } catch (error) {
            console.error(error);
        }
    };
    //GetTalimTur
    const handleGetTalimTur = (id) => {
        const foundTalim =
            dataTalim &&
            dataTalim.find((item) => Number(item.id) === Number(id));
        return foundTalim ? foundTalim.talim_turi : "(noaniq)";
    };
    //GetFakultet
    const handleGetFakultet = (id) => {
        const foundFakultet =
            dataFakultet &&
            dataFakultet.find((item) => Number(item.id) === Number(id));
        return foundFakultet ? foundFakultet.fakultet : "(noaniq)";
    };
    //GetYonalish
    const handleGetYonalish = (id) => {
        const foundYonalish =
            dataYonalish &&
            dataYonalish.find((item) => Number(item.id) === Number(id));
        return foundYonalish ? foundYonalish.yonalish : "(noaniq)";
    };
    //LifeCycle
    useEffect(() => {
        handleRefresh();
    }, []);
    //Logic Selects
    useEffect(() => {
        formik_kurs.values.kurs_talim_turi_id &&
            formik_kurs.values.kurs_talim_turi_id === "" &&
            (formik_kurs.values.kurs_talim_turi_id =
                dataTalim && `${dataTalim[0].id}`);

        if (formik_kurs.values.kurs_talim_turi_id) {
            const filteredData =
                dataFakultet &&
                dataFakultet.filter(
                    (item) =>
                        item.fakultet_talim_turi_id ===
                        formik_kurs.values.kurs_talim_turi_id
                );
            setIsDataFakultet(filteredData);
        }

        if (formik_kurs.values.kurs_fakultet_id) {
            const filteredData =
                dataYonalish &&
                dataYonalish.filter(
                    (item) =>
                        item.fakultet_talim_turi_id ===
                        formik_kurs.values.kurs_yonalish_id
                );
            setIsDataYonalish(filteredData);
        }
    }, [formik_kurs.values, dataTalim, dataFakultet, dataYonalish]);

    return (
        <>
            {/* Kurs */}
            <h1 className="text-[20px] mt-6 mb-3">
                <b>Kurs:</b>
            </h1>
            <div className="w-[1000px] h-[400px] flex gap-x-2 border-b border-black">
                <div className="w-[50%] h-full flex flex-col gap-y-2">
                    {/* Get Data */}
                    <div className="border-b border-black px-10 py-2">
                        <b>Joylashtirilgan ma'lumotlar</b>
                    </div>
                    {isDataKurs && isDataKurs.length === 0 ? (
                        <div className="text-red-600">
                            Ma'lumotlar joylanmagan !
                        </div>
                    ) : (
                        <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                            {isDataKurs && isDataKurs.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border border-gray-400 px-2"
                                >
                                    <div>
                                        <b>Talim tur:</b>
                                        {handleGetTalimTur(item.kurs_talim_turi_id)}
                                        <br />
                                        <b>Fakultet:</b>
                                        {handleGetFakultet(item.kurs_fakultet_id)}
                                        <br />
                                        <b>Yo'nalish:</b>
                                        {handleGetYonalish(item.kurs_yonalish_id)}
                                        <br />
                                        <b>Kurs:</b> {item.kurs}
                                    </div>
                                    <div className="flex gap-x-2">
                                        <MdEdit
                                            className="text-green-700 cursor-pointer"
                                            onClick={() => handleEdit(item.id)}
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
                        {/* TalimTur */}
                        <select
                            className="border"
                            onChange={formik_kurs.handleChange}
                            value={formik_kurs.values.kurs_talim_turi_id}
                            name="kurs_talim_turi_id"
                            id="kurs_talim_turi_id"
                        >
                            {dataTalim &&
                                dataTalim.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.talim_turi}
                                    </option>
                                ))}
                        </select>
                        {/* Fakultet */}
                        <select
                            className="border"
                            onChange={formik_kurs.handleChange}
                            value={formik_kurs.values.kurs_fakultet_id}
                            name="kurs_fakultet_id"
                            id="kurs_fakultet_id"
                        >
                            {isDataFakultet &&
                                isDataFakultet.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.fakultet}
                                    </option>
                                ))}
                        </select>
                        {/* Yonalish */}
                        <select
                            className="border"
                            onChange={formik_kurs.handleChange}
                            value={formik_kurs.values.kurs_yonalish_id}
                            name="kurs_yonalish_id"
                            id="kurs_yonalish_id"
                        >
                            {isDataYonalish &&
                                isDataYonalish.map((item) => (
                                    <option key={item.id} value={item.id}>
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
                        {/* <label className="flex flex-col" htmlFor="kurs">
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
                        </label> */}
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
    );
};

export default Kurs;
