import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='w-full absolute top-16 left-0 z-10 text-white text-[35px] px-20'>
            <ul className='flex justify-between items-end bg-[rgba(0, 0, 0, 0.5)!important]'>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} `} to='/'>
                        <AiFillHome className='text-[4rem]' />
                    </Link>
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} `} to='/yangiliklar'>
                        Yangiliklar
                    </Link>
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} `} to='/dars-jadvali'>
                        Dasr jadvali
                    </Link>
                </li>
                <li>
                    <Link className={`${isActive => isActive ? '' : ''} `} to='/institut-haritasi'>
                        Institut haritasi
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar