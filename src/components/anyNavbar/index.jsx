import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AnyNavbar = () => {
    return (
        <div className='w-full relative top-16 left-0 px-20'>
            <ul className='flex justify-start items-end'>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} `} to='/'>
                        <AiFillHome className='text-[4rem] text-black' />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AnyNavbar