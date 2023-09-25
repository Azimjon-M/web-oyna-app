import React from 'react'
import AnyNavbar from '../../components/anyNavbar'

const InstitutHaritasi = () => {
    return (
        <div>
            <AnyNavbar />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstitutHaritasi