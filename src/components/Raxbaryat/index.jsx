import React from 'react'
import rektor from '../../assets/images/rektor.jpg'
import oquv from '../../assets/images/oquv-prorektor.jpg'
import moliya from '../../assets/images/moliya-prorektor.jpg'
import ilmiy from '../../assets/images/ilmiy-prorektor.jpg'
import yoshlar from '../../assets/images/yoshlar-prorektor.jpg'
import xalq from '../../assets/images/xalq-prorektor.jpg'

const Raxbaryat = () => {
  return (
    <>
    <div className='w-[100%]'>
        <div className='my-3 shadow-lg shadow-indigo-500/50'>
            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={rektor} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Xodjayeva Dilnoza Shavkatovna</h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Qo’qon davlat pedagogika instituti rektori</p>
                </div>
            </div>
        </div>
        <div className='my-3 shadow-lg shadow-indigo-500/50'>
            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={oquv} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Nargiza Muzaffarovna Babayeva</h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Qo’qon davlat pedagogika instituti O’quv ishlari bo’yicha prorektori</p>
                </div>
            </div>
        </div>
        <div className='my-3 shadow-lg shadow-indigo-500/50'>
            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={ilmiy} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Nurbek Jo’rayev Sa’dullayevich</h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Qo’qon davlat pedagogika instituti Ilmiy ishlar va innovatsiyalar bo‘yicha prorektori</p>
                </div>
            </div>
        </div>
        <div className='my-3 shadow-lg shadow-indigo-500/50'>
            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={moliya} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Jasurbek Azamov Murodovich</h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Qo’qon davlat pedagogika instituti Moliya va iqtisod ishlari bo‘yicha prorektori</p>
                </div>
            </div>
        </div>
        <div className='my-3 shadow-lg shadow-indigo-500/50'>
            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={yoshlar} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Oxunov Isroiljon Islomovich</h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Qo’qon davlat pedagogika instituti Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo’yicha birinchi prorektor v.v.b</p>
                </div>
            </div>
        </div>
        <div className='my-3 shadow-lg shadow-indigo-500/50'>
            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={xalq} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Kadirova Nigora Abdurashidovna</h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Qo’qon davlat pedagogika instituti Xalqaro hamkorlik masalalari bo’yicha prorektori</p>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Raxbaryat