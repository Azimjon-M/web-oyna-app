import React, { useEffect, useState } from "react";
import AdminPanel from "../../components/AdminPanel";
import axios from "axios";
import { MetroSpinner } from "react-spinners-kit";

const AdminsPanel = () => {
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
            .then((response) => {
                setDataYangilik(response.data);
                setIsLoader(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoader(false);
            });
        //Talim
        axios
        .get(UrlTalim)
            .then((res) => setDataTalim(res.data))
            .catch((err) => console.log(err));
        //Fakultet
        axios
        .get(UrlFakultet)
            .then((res) => setDataFakultet(res.data))
            .catch((err) => console.log(err));
        //Yonalish
        axios
        .get(UrlYonalish)
            .then((res) => setDataYonalish(res.data))
            .catch((err) => console.log(err));
        //Kurs
        axios
        .get(UrlKurs)
            .then((res) => setDataKurs(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="relative ">
            {isLoader ? (
                <div className="h-[100vh] flex justify-center items-center ">
                    <div className="spinner">
                        <MetroSpinner size={80} color="black" />
                    </div>
                </div>
            ) : (
            <div>
                <AdminPanel dataYangilik={dataYangilik} dataTalim={dataTalim} dataFakultet={dataFakultet} dataYonalish={dataYonalish} dataKurs={dataKurs} />
            </div>
            )}
        </div>
    );
};

export default AdminsPanel;
