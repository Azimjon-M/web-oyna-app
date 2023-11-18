import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    return (
        <div className="max-w-xl mx-auto pt-16 px-3">
            <h1 className="text-4xl font-bold text-center mb-10 uppercase text-sky-700">Admin panel</h1>
            <Link to="/panel-admins-login/managment-yangilik">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Yangiliklar paneli</button>
            </Link>
            <Link to="/panel-admins-login/managment-raxbaryat">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Rahbariyat</button>
            </Link>
            <Link to="/panel-admins-login/managment-taliom-tur">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Talim turi</button>
            </Link>
            <Link to="/panel-admins-login/managment-fakultet">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Fakultet</button>
            </Link>
            <Link to="/panel-admins-login/managment-yonalish">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Yo'nalish</button>
            </Link>
            <Link to="/panel-admins-login/managment-kurs">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Kurs</button>
            </Link>
            <Link to="/panel-admins-login/managment-dars-jadval-rasm">
                <button className="btn btn-lg border-sky-600 border text-sky-700 hover:text-white hover:bg-sky-700 rounded-lg w-full text-xl font-bold uppercase mb-5 shadow-lg">Dars jadvali rasmi</button>
            </Link>
        </div>
    );
};

export default AdminPanel;
