import React from "react";
import Yangiliklar from "./Yangiliklar";
import DarsJadval from "./DarsJadval";

const AdminPanel = ({dataYangilik, dataTalim, dataFakultet, dataYonalish, dataKurs}) => {
    return (
        <div>
            <Yangiliklar dataYangilik={dataYangilik}  />
            <DarsJadval dataTalim={dataTalim} dataFakultet={dataFakultet} dataYonalish={dataYonalish} dataKurs={dataKurs} />
        </div>
    );
};

export default AdminPanel;
