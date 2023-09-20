import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const AnyNavbar = () => {
    return (
        <div className='w-full mt-16 px-20'>
            <ul className='flex justify-start items-end'>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/'>
                        <AiFillHome className='text-[4rem] text-black' />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AnyNavbar