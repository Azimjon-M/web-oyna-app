import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";

const Fakultet = ({ dataTalim, dataFakultet }) => {
    const UrlFakultet = "http://api.kspi.uz/v1/jadval/fakultet/";
    const UrlTalim = "http://api.kspi.uz/v1/jadval/talim_turi/";
    const [isDataTalim, setIsDataTalim] = useState(dataTalim);
    const [isDataFakultet, setIsDataFakultet] = useState(dataFakultet);
    const [isEdit, setIsEdit] = useState(false)
    useEffect(() => {
        handleRefresh()
    }, []);
    const SignupSchemaFakultet = Yup.object().shape({
        fakultet: Yup.string().min(2, "Judaham kam!").required("Required"),
    });
    //Fakultet POST
    const formik_fakultet = useFormik({
        initialValues: {
            fakultet_talim_turi_id: "",
            fakultet: "",
        },
        validationSchema: SignupSchemaFakultet,
        onSubmit: async (values) => {
            try {
                if (isEdit) {
                    await axios.put(UrlFakultet + isEdit + "/", values);
                } else {
                    console.log(values);
                    if (values.fakultet_talim_turi_id === "") {
                        formik_fakultet.setValues({
                            fakultet_talim_turi_id: isDataTalim && `${isDataTalim[0].id}`
                        })
                    }
                    // await axios.post(UrlFakultet, values);
                    // formik_fakultet.resetForm();
                }
                handleRefresh();
            } catch (error) {
                console.error("Error:", error);
            }
        },
    });
    //Edit
    const handleEdit = async (id) => {
        try {
            const response = await axios.get(UrlFakultet + id + "/");
            const data = response.data;
            formik_fakultet.setValues({
                fakultet: data.fakultet,
            });
            setIsEdit(id);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    //Delet Fakultet
    const handleDeletFakultet = (id) => {
        axios.delete(UrlFakultet + id + "/");
    };
    //Refresh
    const handleRefresh = async () => {
        //Talim
        await axios
            .get(UrlTalim)
            .then((res) => setIsDataTalim(res.data))
            .catch((err) => console.log(err));
        //Fakultet
        await axios
            .get(UrlFakultet)
            .then((res) => setIsDataFakultet(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <>
            {/* Fakultet */}
            <h1 className="text-[20px] mt-6 mb-3">
                <b>Fakultet:</b>
            </h1>
            <div className="w-[1000px] h-[400px] flex gap-x-2 border-b border-black">
                <div className="w-[50%] flex flex-col gap-y-2">
                    {/* Get Data */}
                    <div className="border-b border-black px-10 py-2">
                        <b>Joylashtirilgan ma'lumotlar</b>
                    </div>
                    {isDataFakultet && isDataFakultet.length === 0 ? (
                        <div className="text-red-600">
                            Ma'lumotlar joylanmagan !
                        </div>
                    ) : (
                        <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                            {isDataFakultet && isDataFakultet.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border border-gray-400 px-2"
                                >
                                    <div>
                                        <b>id:</b> {item.id}
                                        <br />
                                        <b>Talim turi id:</b>
                                        {item.fakultet_talim_turi_id}
                                        <br />
                                        <b>Fakultet:</b> {item.fakultet}
                                    </div>
                                    <div className="flex gap-x-2">
                                        <MdEdit
                                            className="text-green-700 cursor-pointer"
                                            onClick={() => handleEdit(item.id)}
                                        />
                                        <MdDelete
                                            className="text-red-600 cursor-pointer"
                                            onClick={() =>
                                                handleDeletFakultet(item.id)
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
                    {
                        isDataTalim && (
                            <select
                                className="border"
                                onChange={formik_fakultet.handleChange}
                                value={formik_fakultet.values.talim_turi}
                                name="fakultet_talim_turi_id"
                                id="fakultet"
                                
                                >
                                {
                                    isDataTalim && isDataTalim.map(item => (
                                        <option key={item.id} value={item.id}>{item.talim_turi}</option>
                                    ))
                                }
                            </select>

                        )
                    }
                        <label className="flex flex-col" htmlFor="fakultet">
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
        </>
    );
};

export default Fakultet;
