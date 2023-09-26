import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Navbar = ({post, bg, color}) => {

    const [isSetting, setIsSetting] = useState(false);
    
    const handleDown = () => {
        setTimeout(() => {
            setIsSetting(true)
        }, 3000)
    };

    const handleUp = () => {
        clearTimeout(handleDown)
    };

    return (
        <div className={`${post ? post : 'relative' } ${bg ? `bg-[${bg}]` : 'bg-[rgba(0, 0, 0, 0)]'} ${ color ? `text-${color}` : '' } w-full left-0 z-50 text-[35px] px-20 py-16 `}>
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
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/yangiliklar'>
                        Yangiliklar
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/dars-jadvali'>
                        Dars jadvali
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/institut-haritasi'>
                        Institut haritasi
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${isActive => isActive ? '' : ''} `} to='/admin'>

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar