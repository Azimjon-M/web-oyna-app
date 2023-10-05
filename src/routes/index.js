import React from 'react';

import Root from '../root/index';
import Home from '../pages/Home';
import Admin from '../pages/LoginToAdmins';
import Yangiliklar from '../pages/Yangiliklar';
import DarsJadvali from '../pages/DarsJadvali';
import AdminPanel from '../pages/AdminsPanel';
import Raxbaryat from '../pages/Raxbaryat';


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
                element: <Raxbaryat />,
                path: '/raxbaryat'
            },
            {
                element: <AdminPanel />,
                path: '/panel-admins-login/admin-pane-0001'
            }
        ]
    }

]