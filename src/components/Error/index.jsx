import React from 'react';
import { useLocation } from 'react-router-dom';

const Error = ({ error }) => {
    const location = useLocation();
    const { state } = location;
    return (
        <div>
            <h2>Xatolik</h2>
            <p className='text-bold text-xl text-center'>{state && state.error && state.error.message}</p>
            {/* <p className='text-bold text-5xl text-center'>{state && state.error && state.error.request.status}</p> */}
            {/* Qo'shimcha xatolik ma'lumotlari shu yerdan chiqarilishi mumkin */}
        </div>
    );
}

export default Error;
