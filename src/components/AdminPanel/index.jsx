import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    return (
        <div className="relative ">
            <div className="p-12">
                <div className="text-center">
                    <h1 className="text-[30px] font-bold">YANGILIKLAR PANELI</h1>
                    <Link to="/panel-admins-login/managment-yangilik">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-[30px] font-bold">DARS JADVAL PANELI</h1>
                    <h1 className="text-[25px] font-bold">Talim Turi</h1>
                    <Link to="/panel-admins-login/managment-taliom-tur">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                    <h1 className="text-[25px] font-bold">Fakultet</h1>
                    <Link to="/panel-admins-login/managment-fakultet">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                    <h1 className="text-[25px] font-bold">Yonalish</h1>
                    <Link to="/panel-admins-login/managment-yonalish">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                    <h1 className="text-[25px] font-bold">Kurs</h1>
                    <Link to="/panel-admins-login/managment-kurs">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                    <h1 className="text-[25px] font-bold">Dars jadval rasmi</h1>
                    <Link to="/panel-admins-login/managment-dars-jadval-rasm">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-[30px] font-bold">RAXBARYAT PANELI</h1>
                    <Link to="/panel-admins-login/managment-raxbaryat">
                        <button className="border border-blue-800 bg-blue-400 text-white px-10 py-2 font-bold rounded-md mt-3">KIRISH</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
