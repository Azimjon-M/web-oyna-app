import React from 'react';
import { Outlet } from 'react-router-dom';
import BgImage from '../assets/images/bg.png'

const root = () => {
    return (
        <div className='relative'>
            <Outlet />
            <img className='h-[100vh] w-auto absolute top-0 left-0 border-4 border-blue-600 -z-20' src={BgImage} />
        </div>
    )
}

export default root;