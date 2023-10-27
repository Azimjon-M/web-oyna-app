import React from 'react';

import Root from '../root/index';
import Home from '../pages/Home';
import Admin from '../pages/LoginToAdmins';
import Yangiliklar from '../pages/Yangiliklar';
import DarsJadvali from '../pages/DarsJadvali';
import AdminPanel from '../pages/AdminsPanel';
import Raxbaryat from '../pages/Raxbaryat';
import InterActiveHiz from '../pages/InterActiveHiz';
import Fizmat from '../pages/Fizmat';
import Boshlangich from '../pages/Boshlangich';
import OztilAdabiyot from '../pages/OztilAdabiyot';
import PedPsx from '../pages/PedPsx';
import JisMad from '../pages/JisMad';
import MilliyHunar from '../pages/MilliyHunar';
import XorijTil from '../pages/XorijTill';
import TabiyFan from '../pages/TabiyFan';
import RusTili from '../pages/RusTili';
import Tarix from '../pages/Tarix';
import MakTal from '../pages/MakTal';
import Kechki from '../pages/Kechki';
import Sirtqi from '../pages/Sirqi';
import AdminYangilik from '../pages/AdminYangilik';


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
                element: <Fizmat />,
                path: '/panel-admins-login/fizmat'
            },
            {
                element: <Boshlangich />,
                path: '/panel-admins-login/boshlangich'
            },
            {
                element: <OztilAdabiyot />,
                path: '/panel-admins-login/oz-til-adabiyot'
            },
            {
                element: <PedPsx />,
                path: '/panel-admins-login/ped-psx'
            },
            {
                element: <JisMad />,
                path: '/panel-admins-login/jis-mad'
            },
            {
                element: <MilliyHunar />,
                path: '/panel-admins-login/milliy-hunar'
            },
            {
                element: <XorijTil />,
                path: '/panel-admins-login/xorij-til'
            },
            {
                element: <TabiyFan />,
                path: '/panel-admins-login/tabiy-fan'
            },
            {
                element: <RusTili />,
                path: '/panel-admins-login/rus-tili'
            },
            {
                element: <Tarix />,
                path: '/panel-admins-login/tarix'
            },
            {
                element: <MakTal />,
                path: '/panel-admins-login/mak-tal'
            },
            {
                element: <Kechki />,
                path: '/panel-admins-login/kechki'
            },
            {
                element: <Sirtqi />,
                path: '/panel-admins-login/sirtqi'
            },
            {
                element: <AdminYangilik />,
                path: '/panel-admins-login/managment-yangilik'
            },
        ]
    }

]