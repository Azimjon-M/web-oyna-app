import React, { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "qrcode.react";
import { MetroSpinner } from "react-spinners-kit";

export const DarsJadvallari = () => {
    const UrlTalim = "https://api.kspi.uz/v1/jadval/talim_turi/";
    const UrlFakultet = "https://api.kspi.uz/v1/jadval/fakultet/";
    const UrlYonalish = "https://api.kspi.uz/v1/jadval/yonalish/";
    const UrlKurs = "https://api.kspi.uz/v1/jadval/kurs/";
    const UrlDJRasm = "https://api.kspi.uz/v1/jadval/jadval/";
    // Full Dataes
    const [isDataTalim, setIsDataTalim] = useState(null);
    const [isDataFakultet, setIsDataFakultet] = useState(null);
    const [isDataYonalish, setIsDataYonalish] = useState(null);
    const [isDataKurs, setIsDataKurs] = useState(null);
    const [isDataDJRasm, setIsDataDJRasm] = useState(null);
    // Fitered Dataes
    const [isDataFakultetFilter, setIsDataFakultetFilter] = useState(null);
    const [isDataYonalishFilter, setIsDataYonalishFilter] = useState(null);
    const [isDataKursFilter, setIsDataKursFilter] = useState(null);
    const [isDataDJRasmFilter, setIsDataDJRasmFilter] = useState([]);

    // Selected dataes
    const [isDataTalimSelected, setIsDataTalimSelected] = useState("");
    const [isDataFakultetSelected, setIsDataFakultetSelected] = useState("");
    const [isDataYonalishSelected, setIsDataYonalishSelected] = useState("");
    const [isDataKursSelected, setIsDataKursSelected] = useState("");

    const [isLoader, setIsLoader] = useState(true);
    const [isModal, setIsModal] = useState(false);

    //Refresh
    const handleRefresh = async () => {
        await axios
            .get(UrlTalim)
            .then((res) => {
                setIsDataTalim(res.data);
            })
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
            });
        await axios
            .get(UrlYonalish)
            .then((res) => {
                setIsDataYonalish(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        await axios
            .get(UrlKurs)
            .then((res) => {
                setIsDataKurs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        await axios
            .get(UrlDJRasm)
            .then((res) => {
                setIsDataDJRasm(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        handleRefresh();
    }, []);
    //Logik Talim = "" && = [0].id
    useEffect(() => {
        if (isDataTalim) {
            setIsDataTalimSelected(isDataTalim[0].id);
        }
    }, [isDataTalim]);
    // Fakultet filtered by TalTurID
    useEffect(() => {
        if (isDataFakultet) {
            setIsDataFakultetFilter(
                isDataFakultet &&
                    isDataFakultet.filter(
                        (item) =>
                            Number(item.fakultet_talim_turi_id) ===
                            Number(isDataTalimSelected)
                    )
            );
        }
    }, [isDataTalimSelected, isDataFakultet]);
    // Yonalsih filtered by TalTurID FakultetID
    useEffect(() => {
        if (isDataYonalish) {
            setIsDataYonalishFilter(
                isDataYonalish &&
                    isDataYonalish.filter(
                        (item) =>
                            Number(item.yonalish_talim_turi_id) ===
                                Number(isDataTalimSelected) &&
                            Number(item.yonalish_fakultet_id) ===
                                Number(isDataFakultetSelected)
                    )
            );
        }
    }, [isDataYonalish, isDataFakultetSelected, isDataTalimSelected]);
    // Kurs filtered by TalTurID FakultetID YonalishID
    useEffect(() => {
        if (isDataKurs) {
            setIsDataKursFilter(
                isDataKurs &&
                    isDataKurs.filter(
                        (item) =>
                            Number(item.kurs_talim_turi_id) ===
                                Number(isDataTalimSelected) &&
                            Number(item.kurs_fakultet_id) ===
                                Number(isDataFakultetSelected) &&
                            Number(item.kurs_yonalish_id) ===
                                Number(isDataYonalishSelected)
                    )
            );
        }
    }, [
        isDataYonalish,
        isDataFakultetSelected,
        isDataTalimSelected,
        isDataKurs,
        isDataYonalishSelected,
    ]);
    // Rasm filtered by TalTurID FakultetID YonalishID KursID
    useEffect(() => {
        if (isDataDJRasm) {
            setIsDataDJRasmFilter(
                isDataDJRasm &&
                    isDataDJRasm.filter(
                        (item) =>
                            Number(item.turi) ===
                                Number(isDataTalimSelected) &&
                            Number(item.fakultet) ===
                                Number(isDataFakultetSelected) &&
                            Number(item.yonalish) ===
                                Number(isDataYonalishSelected) &&
                            Number(item.kurs) ===
                                Number(isDataKursSelected)
                    )
            );
        }
    }, [
        isDataYonalish,
        isDataFakultetSelected,
        isDataTalimSelected,
        isDataKurs,
        isDataYonalishSelected,
        isDataDJRasm,
        isDataKursSelected
    ]);

    const handleChange = (e) => {
        setIsDataTalimSelected(e.target.value);
    };
    const handleFakultetClick = (e) => {
        setIsDataFakultetSelected(e);
    };
    const handleYonalishClick = (e) => {
        setIsDataYonalishSelected(e);
    };
    const handleKursClick = (e) => {
        setIsDataKursSelected(e);
        setIsModal(true);
    };
    const handleModalClose = () => {
        setIsModal(false)
    }
    return (
        <div className="flex flex-col items-center w-full h-[calc(100%-320px)]">
            {isLoader ? (
                <div className="w-full h-full flex justify-center items-center">
                    <div className="spinner">
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col gap-y-20 py-20">
                    <div className={`${isModal ? "w-full h-full absolute top-0 left-0 bg-[#000000a6] flex flex-col justify-center items-center gap-y-10" : "hidden"} `}>
                        <div className="w-[800px] text-end h-auto">
                            <button className="btn btn-error rounded-full text-[40px] text-white" onClick={() => handleModalClose()}>X</button>
                        </div>
                        <div className="w-[800px] h-[800px] flex justify-center items-center">
                            <img id="imgDJR" className="max-w-full max-h-full" src={isDataDJRasmFilter.length > 0 ? isDataDJRasmFilter[0].rasm : ""} alt="Dars jadval rasmi" />
                        </div>
                        <div className="w-[800px] h-auto flex justify-end">
                            <QRCode className='bg-white border-4 border-slate-700 p-3' value={isDataDJRasmFilter.length > 0 ? isDataDJRasmFilter[0].rasm : ""} />
                        </div>
                    </div>
                    <div className="w-full flex justify-end px-10">
                        <select
                            onChange={handleChange}
                            defaultValue={isDataTalim && isDataTalim[0].id}
                            name="talim_tur"
                            className="select select-primary w-full max-w-xs"
                        >
                            {isDataTalim &&
                                isDataTalim.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.talim_turi}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-y-20 items-center">
                        <div className="w-[900px] flex flex-wrap justify-center items-center">
                            {isDataFakultetFilter &&
                                isDataFakultetFilter.map((item) => (
                                    <button
                                        className="m-3 bg-yellow-400 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                        key={item.id}
                                        onClick={() =>
                                            handleFakultetClick(item.id)
                                        }
                                    >
                                        {item.fakultet}
                                    </button>
                                ))}
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            {isDataYonalishFilter &&
                                isDataYonalishFilter.map((item) => (
                                    <button
                                        className="m-3 bg-blue-500 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                        key={item.id}
                                        onClick={() =>
                                            handleYonalishClick(item.id)
                                        }
                                    >
                                        {item.yonalish}
                                    </button>
                                ))}
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            {isDataKursFilter &&
                                isDataKursFilter.map((item) => (
                                    <button
                                        className="m-3 bg-green-500 py-3 px-8 text-[20px] font-bold text-white rounded-md"
                                        key={item.id}
                                        onClick={() => handleKursClick(item.kurs)}
                                    >
                                        {item.kurs}
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
