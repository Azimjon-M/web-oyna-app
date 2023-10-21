import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";

const Kurs = () => {
    const UrlKurs = "http://api.kspi.uz/v1/jadval/kurs/";
    const [isDataKurs, setIsDataKurs] = useState([]);
    useEffect(() => {
        //Kurs
        axios
            .get(UrlKurs)
            .then((res) => setIsDataKurs(res.data))
            .catch((err) => console.log(err));
    }, []);
    const SignupSchemaKurs = Yup.object().shape({
        kurs: Yup.number().max(5, "Ko'p").required("Required"),
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
            // if (values.kurs_talim_turi_id === "") {
            //     if (isDataTalim[0].id) {
            //         formik_kurs.values.kurs_talim_turi_id = `${isDataTalim[0].id}`;
            //     }
            // }
            // if (values.kurs_fakultet_id === "") {
            //     if (isDataFakultet[0].id) {
            //         formik_kurs.values.kurs_fakultet_id = `${isDataFakultet[0].id}`;
            //     }
            // }
            // if (values.kurs_yonalish_id === "") {
            //     if (isDataYonalish[0].id) {
            //         formik_kurs.values.kurs_yonalish_id = `${isDataYonalish[0].id}`;
            //     }
            // }
            axios.post(UrlKurs, values);
            formik_kurs.resetForm();
        },
    });
    //Edit
    const handleEdit = (id) => {};
    //Delet Kurs
    const handleDeletKurs = (id) => {
        axios.delete(UrlKurs + id + "/");
    };
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
                        <select
                            className="border"
                            onChange={formik_kurs.handleChange}
                            value={formik_kurs.values.kurs_talim_turi_id}
                            name="kurs_talim_turi_id"
                            id="kurs_talim_turi_id"
                        >
                            <option value="0">0</option>
                        </select>
                        <select
                            className="border"
                            onChange={formik_kurs.handleChange}
                            value={formik_kurs.values.kurs_fakultet_id}
                            name="kurs_fakultet_id"
                            id="kurs_fakultet_id"
                        >
                            <option value="1">1</option>
                        </select>
                        <select
                            className="border"
                            onChange={formik_kurs.handleChange}
                            value={formik_kurs.values.kurs_yonalish_id}
                            name="kurs_yonalish_id"
                            id="kurs_yonalish_id"
                        >
                            <option value="2">2</option>
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
        </>
    );
};

export default Kurs;
