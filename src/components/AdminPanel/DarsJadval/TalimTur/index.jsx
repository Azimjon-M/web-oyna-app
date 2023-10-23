import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";

const TalimTur = ({ dataTalim }) => {
    const UrlTalim = "http://api.kspi.uz/v1/jadval/talim_turi/";
    const [isDataTalim, setIsDataTalim] = useState(dataTalim);
    const [isEdit, setIsEdit] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const SignupSchemaTalim = Yup.object().shape({
        talim_turi: Yup.string().min(2, "Judaham kam!").required("Required"),
    });
    //Ta'lim tur POST
    const formik_talim = useFormik({
        initialValues: {
            talim_turi: "",
        },
        validationSchema: SignupSchemaTalim,
        onSubmit: async (values) => {
            try {
                if (isEdit) {
                    await axios.put(UrlTalim + isEdit + "/", values);
                } else {
                    await axios.post(UrlTalim, values);
                    formik_talim.resetForm();
                }
                handleRefresh();
            } catch (error) {
                console.error("Error:", error);
            }
        },
    });
    const handleEdit = async (id) => {
        try {
            const response = await axios.get(UrlTalim + id + "/");
            const data = response.data;
            formik_talim.setValues({
                talim_turi: data.talim_turi,
            });
            setIsEdit(id);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(UrlTalim + id + "/");
            handleRefresh();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleRefresh = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(UrlTalim);
            setIsDataTalim(response.data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleRefresh();
    }, []);
    return (
        <>
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
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : isDataTalim &&  isDataTalim.length === 0 ? (
                        <div className="text-red-600">
                            Ma'lumotlar joylanmagan !
                        </div>
                    ) : (
                        <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                            {isDataTalim && isDataTalim.map((item) => (
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
                                            onClick={() => handleEdit(item.id)}
                                        />
                                        <MdDelete
                                            className="text-red-600 cursor-pointer"
                                            onClick={() =>
                                                handleDelete(item.id)
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
                        <label className="flex flex-col" htmlFor="talim_turi">
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
        </>
    );
};

export default TalimTur;
