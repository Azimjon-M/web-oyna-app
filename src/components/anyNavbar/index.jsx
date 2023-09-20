import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const AnyNavbar = () => {
    return (
        <div className='w-full text-white text-[35px] px-20'>
            <ul className='flex justify-start items-end'>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/'>
                        <AiFillHome className='text-[4rem]' />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AnyNavbar