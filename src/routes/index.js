import React from 'react';

import Root from '../root/index';
// public
import Home from '../pages/Home';
import Admin from '../pages/LoginToAdmins';
import Yangiliklar from '../pages/Yangiliklar';
import DarsJadvali from '../pages/DarsJadvali';
import AdminPanel from '../pages/AdminsPanel';
import Raxbaryat from '../pages/Raxbaryat';
import InterActiveHiz from '../pages/InterActiveHiz';
// private super admin
import AdminYangilik from '../pages/AdminYangilik';
import AdminTalimTur from '../pages/AdminTalimTuri';
import AdminFakultet from '../pages/AdminFakultet';
import AdminYonalish from '../pages/AdminYonalish';
import AdminKurs from '../pages/AdminKurs';
import AdminDJRasm from '../pages/AdminDJRasm';
import AdminRaxbaryat from '../pages/AdminRaxbaryat';
// private admin
import AniqTabiyFan from '../pages/AniqTabiyFan';
import UzRuFil from '../pages/UzRuFil';
import XorijiyFilologiya from '../pages/XorijiyFilologiya';
import PedIjtFan from '../pages/PedIjtFan';
import AmaliyFanlar from '../pages/AmaliyFanlar';
import MakBoshTal from '../pages/MakBoshTal';
import Kechki from '../pages/Kechki';
import Sirtqi from '../pages/Sirtqi';



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
                element: <InterActiveHiz />,
                path: 'inter-active-hizmatlar'
            },
            {
                element: <Admin />,
                path: '/panel-admins-login',
            },
            {
                element: <AdminPanel />,
                path: '/panel-admins-login/admin-panel-all'
            },
            {
                element: <AniqTabiyFan />,
                path: '/panel-admins-login/aniq-tabiy-fan'
            },
            {
                element: <UzRuFil />,
                path: '/panel-admins-login/uzbek-rus-filologiyasi'
            },
            {
                element: <XorijiyFilologiya />,
                path: '/panel-admins-login/xorijiy-filologiya'
            },
            {
                element: <PedIjtFan />,
                path: '/panel-admins-login/ped-ijt-fan'
            },
            {
                element: <AmaliyFanlar />,
                path: 'panel-admins-login/amaliy-fanlar'
            },
            {
                element: <MakBoshTal />,
                path: '/panel-admins-login/mak-bosh-talim'
            },
            {
                element: <Sirtqi />,
                path: '/panel-admins-login/sirtqi'
            },
            {
                element: <Kechki />,
                path: '/panel-admins-login/kechki'
            },
            {
                element: <AdminYangilik />,
                path: '/panel-admins-login/managment-yangilik'
            },
            {
                element: <AdminTalimTur />,
                path: '/panel-admins-login/managment-taliom-tur'
            },
            {
                element: <AdminFakultet />,
                path: '/panel-admins-login/managment-fakultet'
            },
            {
                element: <AdminYonalish />,
                path: '/panel-admins-login/managment-yonalish'
            },
            {
                element: <AdminKurs />,
                path: '/panel-admins-login/managment-kurs'
            },
            {
                element: <AdminDJRasm />,
                path: '/panel-admins-login/managment-dars-jadval-rasm'
            },
            {
                element: <AdminRaxbaryat />,
                path: '/panel-admins-login/managment-raxbaryat'
            },
        ]
    }

]