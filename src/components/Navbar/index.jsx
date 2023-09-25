import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Navbar = ({post, bg, color}) => {
    return (
        <div className={`${post ? post : 'relative' } ${bg ? `bg-[${bg}]` : 'bg-[rgba(0, 0, 0, 0)]'} ${ color ? `text-${color}` : '' } w-full left-0 z-50 text-[35px] px-20 py-16 `}>
            <ul className='flex justify-between items-end'>
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