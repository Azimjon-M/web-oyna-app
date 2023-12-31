import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import logo from "../../assets/icons/logo.png";


import qish from '../../assets/images/winterNav.png';
import bahor from '../../assets/images/springNav.png';
import yoz from '../../assets/images/yoz.png';
import kuz from '../../assets/images/autumnNav.png';
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
        <div className={`${(date === 'kuz' || date === 'yoz' || date === 'bahor') && 'text-white'} w-full h-[320px] relative left-0 z-50 text-[35px] px-10 py-16`}>
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
                            <img className='w-[60px] h-auto' src={logo} alt="icon" />
                        </Link>
                    }
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${ isActive ? 'bg-[#0256B0] px-4 py-2 rounded-2xl' : '' } font-[900] text-[32px] `} to='/yangiliklar'>
                        Yangiliklar
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${ isActive ? 'bg-[#0256B0] px-4 py-2 rounded-2xl' : '' } font-[900] text-[32px] `} to='/dars-jadvali'>
                        Dars jadvali
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${ isActive ? 'bg-[#0256B0] px-4 py-2 rounded-2xl' : '' } font-[900] text-[32px] `} to='/raxbaryat'>
                        Rahbariyat
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${ isActive ? 'bg-[#0256B0] px-4 py-2 rounded-2xl' : '' } font-[900] text-[32px] `} to='/inter-active-hizmatlar'>
                        Interaktiv xizmatlar
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;