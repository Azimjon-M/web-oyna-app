import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = ({ data }) => {
    const [isActive, setIsActive] = useState(false)

    
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            id: '',
            password: ''
        },
        onSubmit: values => {
            if (values.id === data.id && values.password === data.password) {
                navigate('/')
            } else {
                setIsActive(true)
                setTimeout(() => {
                    setIsActive(false)
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
                <form className='flex flex-col gap-y-4' onSubmit={formik.handleSubmit}>
                    <label className='text-white text-start' htmlFor="id">
                        ID
                        <input 
                            className='w-full border-2 border-white bg-black text-[20px] py-2 px-4 focus:outline-none focus:border-red-600 focus:bg-white focus:text-black'
                            type="text" 
                            id='id' 
                            name='id'
                            onChange={formik.handleChange}
                            value={formik.values.id}
                        />
                    </label>
                    <label className='text-white text-start' htmlFor="password">
                        PARO'L
                        <input 
                            className='w-full border-2 border-white bg-black text-[20px] py-2 px-4 focus:outline-none focus:border-red-600 focus:bg-white focus:text-black'
                            type="password" 
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </label>
                    <button 
                        className='w-full text-white font-semibold  border-2 border-white mt-5 px-4 py-3 active:bg-white active:text-red-600 active:border-red-600 select-none' 
                        type='submit'
                    >
                        Kirish
                    </button>
                    <div className={`${isActive ? 'translate-y-0 opacity-1' : 'opacity-0 -translate-y-5'} bg-red-600 border-blue-400 text-white py-2 transition-all`}>
                        ! <b>ID YOKI PAROL HATO BO'LISHI MUMKIN</b> !
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin