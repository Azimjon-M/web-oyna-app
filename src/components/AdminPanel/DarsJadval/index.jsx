import React from "react";
import TalimTur from './TalimTur/index'
import Fakultet from "./Fakultet";
import Yonalish from "./Yonalish";
import Kurs from "./Kurs";

const DarsJadval = ({dataTalim, dataFakultet, dataYonalish, dataKurs}) => {
    console.log(dataTalim);
    
    return (
        <div className="px-2 py-10">
            <div className="flex flex-col items-center">
                <TalimTur />
                <Fakultet />
                <Yonalish />
                <Kurs />
            </div>
        </div>
    );
};

export default DarsJadval;
