import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import {MdBlock} from 'react-icons/md'

const LoginAdmin = ({ data }) => {

    const [isError, setIsError] = useState(false)

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            id: '',
            password: ''
        },
        onSubmit: values => {
            const loggedInUser = data.find(item => item.id === values.id && item.password === values.password);
            if (loggedInUser) {
                navigate('/panel-admins-login/admin-pane-0001')
            } else {
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                }, 4000)
            }
        },
    })

    return (
        <div className='w-full h-[100vh] flex justify-center bg-black pt-32'>
            <div className='w-auto text-center'>
                <h1 className='text-white text-[35px]'>
                    ADMIN PANELGA KIRISH
                </h1>
                <form className='flex flex-col gap-y-4' onSubmit={formik.handleSubmit} autoComplete='on'>
                    <label className='text-white text-start' htmlFor="id">
                        ID
                        <input 
                            className='w-full border-2 border-white bg-black text-[20px] py-2 px-4 focus:outline-none focus:border-red-600 focus:bg-white focus:text-black'
                            type="text" 
                            id='id' 
                            name='id'
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            autoComplete='off'
                        />
                    </label>
                    <label className='text-white text-start' htmlFor="password">
                        PAROL
                        <input 
                            className='w-full border-2 border-white bg-black text-[20px] py-2 px-4 focus:outline-none focus:border-red-600 focus:bg-white focus:text-black'
                            type="password" 
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            autoComplete='off'
                        />
                    </label>
                    <button 
                        className='w-full text-white font-semibold  border-2 border-white mt-5 px-4 py-3 active:bg-white active:text-red-600 active:border-red-600 select-none' 
                        type='submit'
                    >
                        Kirish
                    </button>
                    <div className={`${isError ? 'translate-y-0 opacity-1' : 'opacity-0 -translate-y-5'} bg-red-600 border-blue-400 text-white py-3 transition-all flex justify-center items-center gap-x-2`}>
                        <MdBlock className='text-[18px]' /><b>ID YOKI PAROL HATO BO'LISHI MUMKIN !</b><MdBlock className='text-[18px]' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin