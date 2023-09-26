import Navbar from '../../components/Navbar'
import React from 'react'
import Form from '../../components/Forma'

const InstitutHaritasi = () => {
    return (
        <div>
            <Navbar />
            <div className='w-full flex flex-col justify-center text-center'>
                <h1>
                    Institut haritasi
                </h1>
                <div className='w-full flex flex-col px-10'>
                    <div className='border border-red-600'>
                        <div className='bg-gray-300'>
                            <h1>
                                Yangiliklar 1
                            </h1>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstitutHaritasi