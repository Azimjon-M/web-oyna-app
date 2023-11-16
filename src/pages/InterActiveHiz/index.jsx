import React from 'react';
import InterActiveHizCom from '../../components/InterActiveHiz';
import fon from '../../assets/images/bg.png';

const InterActiveHiz = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-full -z-50">
                <img src={fon} className="min-w-full min-h-full" alt="fon" />
            </div>
            <InterActiveHizCom />
        </div>
    )
}

export default InterActiveHiz;