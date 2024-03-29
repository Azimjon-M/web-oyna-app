import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";
import { MetroSpinner } from "react-spinners-kit";
import APIYonalish from "../../../../services/Yonalish";

const Yonalish = () => {
    const [isDataTalim, setIsDataTalim] = useState(null);
    const [isDataFakultet, setIsDataFakultet] = useState(null);
    const [isDataFakultetFilter, setIsDataFakultetFilter] = useState(null);

    const [isDataYonalish, setIsDataYonalish] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const [isLoader, setIsLoader] = useState(true);

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
        onSubmit: async (values) => {
            try {
                //Edit
                if (isEdit) {
                    await APIYonalish.put(isEdit, values);
                    formik_yonalish.resetForm();
                    setIsEdit(false);
                    handleRefresh();
                }
                //Post
                else {
                    if (!values.yonalish_talim_turi_id) {
                        formik_yonalish.values.yonalish_talim_turi_id =
                            isDataTalim && `${isDataTalim[0].id}`;
                    }
                    if (!values.yonalish_fakultet_id) {
                        formik_yonalish.values.yonalish_fakultet_id =
                            isDataFakultetFilter &&
                            `${isDataFakultetFilter[0].id}`;
                    }
                    await APIYonalish.post(values);
                    formik_yonalish.resetForm();
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
            await APIYonalish.getbyId(id)
                .then((res) => {
                    formik_yonalish.setValues({
                        yonalish_talim_turi_id: res.data.yonalish_talim_turi_id,
                        yonalish_fakultet_id: res.data.yonalish_fakultet_id,
                        yonalish: res.data.yonalish,
                    });
                })
                .catch((err) => console.log(err));
            setIsEdit(id);
        } catch (error) {
            console.error(error);
        }
    };
    //Delet Yonalish
    const handleDeletYonalish = async (id) => {
        try {
            await APIYonalish.del(id);
            handleRefresh();
        } catch (error) {
            console.error(error);
        }
    };
    //Refresh
    const handleRefresh = async () => {
        try {
            await APIYonalish.getF()
                .then((res) => {
                    setIsDataFakultet(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            await APIYonalish.getT()
                .then((res) => {
                    setIsDataTalim(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            await APIYonalish.getY()
                .then((res) => {
                    setIsDataYonalish(res.data);
                    setIsLoader(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.error(error);
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
    //LifeCycle
    useEffect(() => {
        handleRefresh();
    }, []);

    //Logic Selects
    useEffect(() => {
        if (!formik_yonalish.values.yonalish_talim_turi_id) {
            formik_yonalish.values.yonalish_talim_turi_id =
                isDataTalim && `${isDataTalim[0].id}`;
        }

        if (formik_yonalish.values.yonalish_talim_turi_id) {
            const filteredData =
                isDataFakultet &&
                isDataFakultet.filter(
                    (item) =>
                        item.fakultet_talim_turi_id ===
                        formik_yonalish.values.yonalish_talim_turi_id
                );
            if (
                JSON.stringify(filteredData) !==
                JSON.stringify(isDataFakultetFilter)
            ) {
                setIsDataFakultetFilter(filteredData);
            }
        }
    }, [formik_yonalish, isDataFakultet, isDataTalim, isDataFakultetFilter]);

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
                            {isDataYonalish && isDataYonalish.length === 0 ? (
                                <div className="text-red-600">
                                    Ma'lumotlar joylanmagan !
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-y-2 overflow-auto style-owerflow-001 p-1">
                                    {isDataYonalish &&
                                        isDataYonalish
                                            .sort((a, b) => a.id - b.id)
                                            .map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="flex justify-between items-center border border-gray-400 bg-white px-2"
                                                >
                                                    <div>
                                                        <b>Talim tur:</b>{" "}
                                                        {handleGetTalimTur(
                                                            item.yonalish_talim_turi_id
                                                        )}
                                                        <br />
                                                        <b>Fakultet:</b>{" "}
                                                        {handleGetFakultet(
                                                            item.yonalish_fakultet_id
                                                        )}
                                                        <br />
                                                        <b>Yo'nalish:</b>{" "}
                                                        {item.yonalish}
                                                    </div>
                                                    <div className="flex gap-x-2">
                                                        <MdEdit
                                                            className="text-green-700 cursor-pointer"
                                                            onClick={() =>
                                                                handleEdit(
                                                                    item.id
                                                                )
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
                                {/* Talim Turi */}
                                <select
                                    className="border"
                                    onChange={formik_yonalish.handleChange}
                                    value={
                                        formik_yonalish.values
                                            .yonalish_talim_turi_id || ""
                                    }
                                    name="yonalish_talim_turi_id"
                                    id="yonalish_talim_turi_id"
                                >
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
                                    className="border"
                                    onChange={formik_yonalish.handleChange}
                                    value={
                                        formik_yonalish.values
                                            .yonalish_fakultet_id || ""
                                    }
                                    name="yonalish_fakultet_id"
                                    id="yonalish_fakultet_id"
                                >
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
                </>
            )}
        </div>
    );
};

export default Yonalish;
