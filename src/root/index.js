import React from 'react';

import Navbar from '../components/Navbar/index';
import { Outlet } from 'react-router-dom';

const root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default root;