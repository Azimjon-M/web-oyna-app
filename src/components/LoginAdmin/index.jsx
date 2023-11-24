import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import adminImg from '../../assets/images/admins.png' 

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
            try {
                const loggedInUser = data.find(item => item.id === values.id && item.password === values.password);
                if (loggedInUser) {
                    switch (loggedInUser.name) {
                        case "alladmin":
                            navigate('/panel-admins-login/admin-panel-all')
                            break;
                        case "fizmat":
                            navigate('/panel-admins-login/fizmat')
                            break;
                        case "boshlan":
                            navigate('/panel-admins-login/boshlangich')
                            break;
                        case "uzlet":
                            navigate('/panel-admins-login/oz-til-adabiyot')
                            break;
                        case "pedpsx":
                            navigate('/panel-admins-login/ped-psx')
                            break;
                        case "jismad":
                            navigate('/panel-admins-login/jis-mad')
                            break;
                        case "milhun":
                            navigate('/panel-admins-login/milliy-hunar')
                            break;
                        case "xorij":
                            navigate('/panel-admins-login/xorij-til')
                            break;
                        case "tabiy":
                            navigate('/panel-admins-login/tabiy-fan')
                            break;
                        case "ruslet":
                            navigate('/panel-admins-login/rus-tili')
                            break;
                        case "tarix":
                            navigate('/panel-admins-login/tarix')
                            break;
                        case "maktal":
                            navigate('/panel-admins-login/mak-tal')
                            break;
                        case "kechki":
                            navigate('/panel-admins-login/kechki')
                            break;
                        case "sirtqi":
                            navigate('/panel-admins-login/sirtqi')
                            break;
                        default:
                            setIsError(true)
                            setTimeout(() => {
                                setIsError(false)
                            }, 4000)
                    }
                } else {
                    setIsError(true)
                    setTimeout(() => {
                        setIsError(false)
                    }, 4000)
                }
            } catch (error) {
                console.error(error);
            }
        },
    })

    return (
        <div className=' bg-[#D5F7E6] h-screen'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 pt-40'>
                <div>
                    <figure>
                        <image src={adminImg} alt="Admin image" />
                    </figure>
                </div>
                <form className='w-full bg-white max-w-md gap-y-4 shadow-lg p-10' onSubmit={formik.handleSubmit} autoComplete='on'>
                    <h1 className='text-3xl font-bold text-slate-500 text-center'>
                        Kirish
                    </h1>
                    <label className=' text-start' htmlFor="id">
                        ID
                        <input 
                            className='w-full border-2 bg-black text-md py-2 px-4 focus:outline-none focus:border-[#57E6A8] focus:shadow-lg rounded-lg focus:bg-white focus:text-black'
                            type="text" 
                            id='id' 
                            name='id'
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            autoComplete='off'
                        />
                    </label>
                    <label className=' text-start' htmlFor="password">
                        Parol
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
                        className='w-full font-semibold  border-2 mt-5 px-4 py-3 active:bg-white active:text-red-600 active:border-red-600 select-none' 
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