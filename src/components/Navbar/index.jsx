import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import qish from '../../assets/images/qish.gif';
import bahor from '../../assets/images/bahor.gif';
import yoz from '../../assets/images/yoz.gif';
import kuz from '../../assets/images/kuz.gif';
import { useSelector } from 'react-redux';

const Navbar = () => {
    // Settings Admin panel
    const [isSetting, setIsSetting] = useState(false);
    const [clickTimeout, setClickTimeout] = useState(null);
    
    const handleDown = () => {
        const timeout = setTimeout(() => {
            setIsSetting(true)
        }, 3000);
        setClickTimeout(timeout);
    };    
    
    const handleUp = () => {
        clearTimeout(clickTimeout);
        setClickTimeout(null);
        setTimeout(() => {
            setIsSetting(false)
        }, 3000)
    }

    const date = useSelector(state => state.reducerData.state);
    
    return (
        <div className={`${date === 'kuz' && 'text-white'} w-full relative left-0 z-50 text-[35px] px-10 py-16 shadow-2xl`}>
            <div className='w-full h-full absolute top-0 left-0 -z-10 overflow-hidden'>
                {
                    date === "bahor" ? 
                    <img className='w-full h-auto' src={bahor} alt="bahor" />
                    : date === "yoz" ?
                    <img className='w-full h-auto' src={yoz} alt="yoz" />
                    : date === "kuz" ?
                    <img className='w-full h-auto' src={kuz} alt="kuz" />
                    : date === "qish" ?
                    <img className='w-full h-auto' src={qish} alt="qish" />
                    : ''
                }
            </div>
            <ul className='flex justify-between items-end'>
                <li onMouseDown={handleDown} onMouseUp={handleUp}>
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
                    <NavLink className={`${ isActive => isActive ? " after:w-full after:h-1 after:border-b-2 after:border-red-600 after:absolute after:bottom-0 after:left-0 " : 'after:border-none'} relative font-[900] text-[32px] `} to='/yangiliklar'>
                        Yangiliklar
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${ isActive && ''}`} to='/dars-jadvali'>
                        Dars jadvali
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${ isActive => isActive ? '' : ''} font-[900] text-[32px] `} to='/raxbaryat'>
                        Raxbaryat
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${ isActive => isActive ? '' : ''} font-[900] text-[32px] `} to='/raxbaryat'>
                        Iteraktiv hizmatlar
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;