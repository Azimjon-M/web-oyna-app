import React from "react";
import Yangiliklar from "./Yangiliklar";
import DarsJadval from "./DarsJadval";

const AdminPanel = ({dataYangilik}) => {
    return (
        <div>
            <Yangiliklar dataYangilik={dataYangilik}  />
            <DarsJadval />
        </div>
    );
};

export default AdminPanel;
