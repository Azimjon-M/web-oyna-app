import React, { useState, useEffect } from "react";
import axios from "axios";
import Yangiliklar from "./Yangiliklar";
import DarsJadval from "./DarsJadval";
import { MetroSpinner } from "react-spinners-kit";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    const UrlYangilik = "http://api.kspi.uz/v1/yangilik/yangilik/";
    const UrlTalim = "http://api.kspi.uz/v1/jadval/talim_turi/";
    const UrlFakultet = "http://api.kspi.uz/v1/jadval/fakultet/";
    const UrlYonalish = "http://api.kspi.uz/v1/jadval/yonalish/";
    const UrlKurs = "http://api.kspi.uz/v1/jadval/kurs/";

    const [dataYangilik, setDataYangilik] = useState(null);
    const [dataTalim, setDataTalim] = useState(null);
    const [dataFakultet, setDataFakultet] = useState(null);
    const [dataYonalish, setDataYonalish] = useState(null);
    const [dataKurs, setDataKurs] = useState(null);
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        //Yngilik
        axios
            .get(UrlYangilik)
            .then((res) => {
                setDataYangilik(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false)
            });
        //Talim
        axios
            .get(UrlTalim)
            .then((res) => {
                setDataTalim(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false)
            });
        //Fakultet
        axios
            .get(UrlFakultet)
            .then((res) => {
                setDataFakultet(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false)
            });
        //Yonalish
        axios
            .get(UrlYonalish)
            .then((res) => {
                setDataYonalish(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false)
            });
        //Kurs
        axios
            .get(UrlKurs)
            .then((res) => {
                setDataKurs(res.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoader(false)
            });
    }, [])

    return (
        <div className="relative ">
            {isLoader ? (
                <div className="h-[100vh] flex justify-center items-center ">
                    <div className="spinner">
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
                <div className="p-12">
                    <div className="text-center">
                        <h1 className="text-[30px] font-bold">YANGILIKLAR PANELI</h1>
                        <Link to="/panel-admins-login/managment-yangilik">
                            <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                        </Link>
                    </div>
                    <DarsJadval
                        dataTalim={dataTalim}
                        dataFakultet={dataFakultet}
                        dataYonalish={dataYonalish}
                        dataKurs={dataKurs}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
