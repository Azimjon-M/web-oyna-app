import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='w-full absolute top-16 left-0 z-10 text-white text-[35px] px-20'>
            <ul className='flex justify-between items-end bg-[rgba(0, 0, 0, 0.5)!important]'>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/'>
                        <AiFillHome className='text-[4rem]' />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/yangiliklar'>
                        Yangiliklar
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/dars-jadvali'>
                        Dasr jadvali
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/institut-haritasi'>
                        Institut haritasi
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar