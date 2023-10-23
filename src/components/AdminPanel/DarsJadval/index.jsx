import React from "react";
import TalimTur from './TalimTur/index'
import Fakultet from "./Fakultet";
import Yonalish from "./Yonalish";
import Kurs from "./Kurs";

const DarsJadval = ({dataTalim, dataFakultet, dataYonalish, dataKurs}) => {    
    return (
        <div className="px-2 py-10">
            <div className="flex flex-col items-center">
                <TalimTur dataTalim={dataTalim} />
                <Fakultet dataTalim={dataTalim} dataFakultet={dataFakultet} />
                <Yonalish dataTalim={dataTalim} dataFakultet={dataFakultet} dataYonalish={dataYonalish}/>
                <Kurs dataTalim={dataTalim} dataFakultet={dataFakultet} dataYonalish={dataYonalish} dataKurs={dataKurs} />
            </div>
        </div>
    );
};

export default DarsJadval;
