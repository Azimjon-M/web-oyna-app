import React, { useEffect, useState } from "react";
import AdminPanel from "../../components/AdminPanel";
import axios from "axios";
import { MetroSpinner } from "react-spinners-kit";

const AdminsPanel = () => {
    const UrlYangilik = "http://api.kspi.uz/v1/yangilik/yangilik/";
    const [dataYangilik, setDataYangilik] = useState(null);
    const [isLoader, setIsLoader] = useState(true);
    useEffect(() => {
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
                <AdminPanel dataYangilik={dataYangilik} />
            </div>
            )}
        </div>
    );
};

export default AdminsPanel;
