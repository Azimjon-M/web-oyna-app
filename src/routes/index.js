import React from 'react';

import Root from '../root/index';
import Home from '../pages/Home';
import Admin from '../pages/AdminPanel';
import Yangiliklar from '../pages/Yangiliklar';
import DarsJadvali from '../pages/DarsJadvali';
import InstitutHaritasi from '../pages/InstitutHaritasi';


export const routes = [
    {
        element: <Root />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <Admin />,
                path: '/panel-admins-login',
                children: [
                    
                ]
            },
            {
                element: <Yangiliklar />,
                path: '/yangiliklar'
            },
            {
                element: <DarsJadvali />,
                path: '/dars-jadvali'
            },
            {
                element: <InstitutHaritasi />,
                path: '/institut-haritasi'
            }
        ]
    }

]