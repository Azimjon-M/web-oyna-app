import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdEdit, MdDelete } from "react-icons/md";
import { MetroSpinner } from "react-spinners-kit";

const Fizmat = () => {

    const UrlTalim = "http://api.kspi.uz/v1/jadval/talim_turi/";
    const UrlFakultet = "http://api.kspi.uz/v1/jadval/fakultet/";
    const UrlYonalish = "http://api.kspi.uz/v1/jadval/yonalish/";
    const UrlKurs = "http://api.kspi.uz/v1/jadval/kurs/";

    const [isDataTalim, setIsDataTalim] = useState(null);
    const [isDataFakultet, setIsDataFakultet] = useState(null);
    const [isDataYonalish, setIsDataYonalish] = useState(null); 
    // const [isDataYonalishFiltr, setIsDataYonalishFiltr] = useState(null); 
    const [isDataKurs, setIsDataKurs] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoader, setIsLoader] = useState(true);

    // const TalimTur = 'Kunduzgi';
    // const Fakultet = 'Fizika va mat ematika'

    const SignupSchemaKurs = Yup.object().shape({
        kurs_yonalish_id: Yup.string().max(5, "Ko'p").required("Required"),
        kurs: Yup.string().max(5, "Ko'p").required("Required"),
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
                .get(UrlTalim)
                .then((res) => {setIsDataTalim(res.data)})
                .catch((err) => {
                    console.log(err);
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
            await axios
                .get(UrlKurs)
                .then((res) => {
                    setIsDataKurs(res.data);
                    setIsLoader(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoader(false);
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
                    {/* Fizmat */}
                    <h1 className="text-[20px] mt-6 mb-3">
                        <b>Fizmat:</b>
                    </h1>
                    <div className="w-[1000px] h-[400px] flex justify-center gap-x-2">
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
                                    {isDataKurs &&
                                        isDataKurs.sort((a, b) => a.id - b.id).map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex justify-between items-center border border-gray-400 bg-white px-2"
                                            >
                                                <div>
                                                    <b>Talim tur:</b>
                                                    {handleGetTalimTur(
                                                        item.kurs_talim_turi_id
                                                    )}
                                                    <br />
                                                    <b>Fakultet:</b>
                                                    {handleGetFakultet(
                                                        item.kurs_fakultet_id
                                                    )}
                                                    <br />
                                                    <b>Yo'nalish:</b>
                                                    {handleGetYonalish(
                                                        item.kurs_yonalish_id
                                                    )}
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
                                                            handleDeletKurs(
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
                                onSubmit={formik_kurs.handleSubmit}
                            >
                                {/* Yonalish */}
                                <select
                                    className="border"
                                    onChange={(e) => {
                                        formik_kurs.handleChange(e);
                                    }}
                                    value={
                                        formik_kurs.values.kurs_yonalish_id ||
                                        ""
                                    }
                                    name="kurs_yonalish_id"
                                    id="kurs_yonalish_id"
                                >
                                    <option value="" disabled>
                                        Yo'nalishni tanlang
                                    </option>
                                    {isDataYonalish &&
                                        isDataYonalish.map((item) => (
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
                                </select>
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

export default Fizmat;
