import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import adminImg from '../../assets/images/adminImg.png'

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
        <div className=' bg-[#F9FAFB] h-screen'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center justify-items-center grid-rows-1 pt-40'>
                <div>
                    <figure>
                        <img src={adminImg} alt="Admin img"/>
                    </figure>
                </div>
                <form className='w-full max-h-[100rem] bg-white max-w-md gap-y-4 shadow-lg rounded-lg p-10' onSubmit={formik.handleSubmit} autoComplete='on'>
                    <h1 className='text-3xl font-bold text-slate-500 text-center mb-1'>
                        Kirish
                    </h1>
                    <label className='text-md font-bold pl-2 text-slate-500' htmlFor="id">
                        ID
                        <input 
                            className='w-full border text-md mb-4 py-3 px-4 focus:outline-none focus:border-[#57E6A8] shadow-sm focus:shadow-lg rounded-lg focus:bg-state-300 focus:text-black'
                            type="text" 
                            id='id' 
                            name='id'
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            autoComplete='off'
                        />
                    </label>
                    <label className='text-md font-bold pl-2 text-slate-500' htmlFor="password">
                        Parol
                        <input 
                            className='w-full border text-md py-3 px-4 focus:outline-none focus:border-[#57E6A8] shadow-sm focus:shadow-lg rounded-lg focus:bg-state-300 focus:text-black'
                            type="password" 
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            autoComplete='off'
                        />
                    </label>
                    <button 
                        className='btn bg-sky-600 hover:bg-sky-700 shadow-lg text-white w-full mt-8 select-none' 
                        type='submit'
                    >
                        Kirish
                    </button>
                    <div className={`${isError ? 'translate-y-0 opacity-1' : 'opacity-0 -translate-y-5'} bg-red-600 border-blue-400 text-white py-3 transition-all flex justify-center items-center gap-x-2`}>
                        <b>ID yoki Parol xato</b>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin