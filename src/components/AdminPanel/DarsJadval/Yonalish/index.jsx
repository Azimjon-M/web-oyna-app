import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";

const Yonalish = () => {
    const UrlYonalish = "http://api.kspi.uz/v1/jadval/yonalish/";
    const [isDataYonalish, setIsDataYonalish] = useState([]);
    useEffect(() => {
        //Yo'nalish
        axios
            .get(UrlYonalish)
            .then((res) => setIsDataYonalish(res.data))
            .catch((err) => console.log(err));
    }, []);
    const SignupSchemaYonalish = Yup.object().shape({
        yonalish: Yup.string().min(2, "Judaham kam!").required("Required"),
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
            // if (values.yonalish_talim_turi_id === "") {
            //     if (isDataTalim[0].id) {
            //         formik_yonalish.values.yonalish_talim_turi_id = `${isDataTalim[0].id}`;
            //     }
            // }
            // if (values.yonalish_fakultet_id === "") {
            //     if (isDataFakultet[0].id) {
            //         formik_yonalish.values.yonalish_fakultet_id = `${isDataFakultet[0].id}`;
            //     }
            // }
            axios.post(UrlYonalish, values);
            formik_yonalish.resetForm();
        },
    });
    //Edit
    const handleEdit = (id) => {};
    //Delet Yonalish
    const handleDeletYonalish = (id) => {
        axios.delete(UrlYonalish + id + "/");
    };
    return (
        <>
            {/* Yo'nalish */}
            <h1 className="text-[20px] mt-6 mb-3">
                <b>Yo'nalish:</b>
            </h1>
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
                                        <b>Yo'nalish:</b> {item.yonalish}
                                    </div>
                                    <div className="flex gap-x-2">
                                        <MdEdit
                                            className="text-green-700 cursor-pointer"
                                            onClick={() => handleEdit(item.id)}
                                        />
                                        <MdDelete
                                            className="text-red-600 cursor-pointer"
                                            onClick={() =>
                                                handleDeletYonalish(item.id)
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
                                formik_yonalish.values.yonalish_talim_turi_id
                            }
                            name="yonalish_talim_turi_id"
                            id="yonalish_talim_turi_id"
                        >
                            <option value="0">0</option>
                        </select>

                        <select
                            className="border"
                            onChange={formik_yonalish.handleChange}
                            value={formik_yonalish.values.yonalish_fakultet_id}
                            name="yonalish_fakultet_id"
                            id="yonalish_fakultet_id"
                        >
                            <option value="1">1</option>
                        </select>

                        <label className="flex flex-col" htmlFor="yonalish">
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
        </>
    );
};

export default Yonalish;
