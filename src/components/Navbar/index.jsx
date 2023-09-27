import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import qish from '../../assets/images/qish.gif';
import bahor from '../../assets/images/bahor.gif';
import yoz from '../../assets/images/yoz.gif';
import kuz from '../../assets/images/kuz.gif';

const Navbar = () => {
    // Settings Admin panel
    const [isSetting, setIsSetting] = useState(false);
    // Fasillar Navbarda
    const [season, setSeason] = useState('default')

    const handleDown = () => {
        setTimeout(() => {
            setIsSetting(true);
        }, 3000);
        setTimeout( () => {
            setIsSetting(false);
        }, 8000);
    };    
    
    useEffect(() => {

        let getMonth = new Date().getMonth() + 1;

        const getSeason = () => {
            if (getMonth === 1 || getMonth === 2 || getMonth === 12) {
                setSeason('qish') ; 
            } else if (getMonth >= 3 && getMonth <= 5) {
                setSeason('bahor');
            } else if (getMonth >= 6 && getMonth <= 8) {
                setSeason('yoz');
            } else if (getMonth >= 9 && getMonth <= 11) {
                setSeason('kuz');
            } else {
                setSeason('default');
            };
        }
        getSeason();
    }, []);

    return (
        <div className={`${season === 'kuz' && 'text-white'} w-full relative left-0 z-50 text-[35px] px-20 py-16 shadow-2xl`}>
            <div className='w-full h-full absolute top-0 left-0 -z-10 overflow-hidden'>
                {
                    season === "bahor" ? 
                    <img className='w-full h-auto' src={bahor} alt="bahor" />
                    : season === "yoz" ?
                    <img className='w-full h-auto' src={yoz} alt="yoz" />
                    : season === "kuz" ?
                    <img className='w-full h-auto' src={kuz} alt="kuz" />
                    : season === "qish" ?
                    <img className='w-full h-auto' src={qish} alt="qish" />
                    : ''
                }
            </div>
            <ul className='flex justify-between items-end'>
                <li onMouseDown={handleDown}>
                    {isSetting ?
                        <Link to='/panel-admins-login'>
                            <FiSettings className='text-[4rem]' /> 
                        </Link>
                    : 
                        <Link to='/'>
                            <AiFillHome className='text-[4rem]' />
                        </Link>
                    }
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/yangiliklar'>
                        Yangiliklar
                    </Link>
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/dars-jadvali'>
                        Dars jadvali
                    </Link>
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/institut-haritasi'>
                        Institut haritasi
                    </Link>
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/admin'>

                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar