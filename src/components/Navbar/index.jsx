import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import qish from '../../assets/images/qish.gif';
import bahor from '../../assets/images/bahor.gif';
import yoz from '../../assets/images/yoz.gif';
import kuz from '../../assets/images/kuz.gif';

const Navbar = () => {
    // Settings Admin panel
    const [isSetting, setIsSetting] = useState(false);
    // 
    const [isSeason, setIsSeason] = useState('default')

    
    const handleDown = () => {
        setTimeout(() => {
            setIsSetting(true);
        }, 3000);
    };

    const handleUp = () => {
        clearTimeout(handleDown)
        setTimeout( () => {
            setIsSetting(false);
        }, 5000);
    };

    useEffect(() => {
        let getDate = new Date();
        let getMonth = getDate.getMonth() + 1;

        if (getMonth === 1 || getMonth === 2 || getMonth === 12) {
            setIsSeason('qish') ; 
        } else if (getMonth >= 3 && getMonth <= 5) {
            setIsSeason('bahor');
        } else if (getMonth >= 6 && getMonth <= 8) {
            setIsSeason('yoz');
        } else if (getMonth >= 9 && getMonth <= 11) {
            setIsSeason('kuz');
        } else {
            setIsSeason('default');
        };

    }, []);

    return (
        <div className={`${isSeason === 'qish' ? 'text-black' : isSeason === 'bahor' ? 'text-black' : isSeason === 'yoz' ? 'text-black' : isSeason === 'kuz' ? 'text-white' : ''} w-full relative left-0 z-50 text-[35px] px-20 py-16 shadow-2xl`}>
            <div className='w-full h-full absolute top-0 left-0 -z-10 overflow-hidden'>
                {
                    isSeason === "bahor" ? 
                    <img className='w-full h-auto' src={bahor} alt="bahor" />
                    : isSeason === "yoz" ?
                    <img className='w-full h-auto' src={yoz} alt="yoz" />
                    : isSeason === "kuz" ?
                    <img className='w-full h-auto' src={kuz} alt="kuz" />
                    : isSeason === "qish" ?
                    <img className='w-full h-auto' src={qish} alt="qish" />
                    : ''
                }
            </div>
            <ul className='flex justify-between items-end'>
                <li onMouseDown={handleDown} onMouseUp={handleUp}>
                    {isSetting ?
                        <NavLink className={`${isActive => isActive ? '' : ''} `} to='/admin'>
                            <FiSettings className='text-[4rem]' /> 
                        </NavLink>
                    : 
                        <NavLink className={`${isActive => isActive ? '' : ''} `} to='/'>
                            <AiFillHome className='text-[4rem]' />
                        </NavLink>
                    }
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/yangiliklar'>
                        Yangiliklar
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/dars-jadvali'>
                        Dars jadvali
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/institut-haritasi'>
                        Institut haritasi
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} font-[900] text-[30px] `} to='/admin'>

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar