import React from 'react'
import AnyNavbar from '../../components/anyNavbar'
import Form from '../../components/Forma'

const InstitutHaritasi = () => {
    return (
        <div>
            {/* <AnyNavbar /> */}
            <div className='w-full flex flex-col justify-center text-center'>
                <h1>
                    Institut haritasi
                </h1>
                <div className='w-full flex flex-col px-10'>
                    <div className='border border-red-600'>
                        <div className='bg-gray-300'>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstitutHaritasi