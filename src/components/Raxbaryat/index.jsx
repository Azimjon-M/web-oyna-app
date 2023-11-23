import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../../components/Loader';
import cardBg from '../../assets/images/card-bg.png'

const Raxbaryat = () => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPost = async () => {
            try {
                await axios.get("https://api.kspi.uz/v1/rahbariyat/rahbariyat/").then(res => {
                    setPerson(res.data);
                    setLoading(false);
                }).catch(err => {
                    console.log(err);
                    setLoading(false);
                });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        loadPost();
    }, []);
    
    return (
        <>
            <div className='w-[100%]'>
                <div className=''>
                    {loading ? <Loader /> :
                        <div className='mx-3 my-2 text-center'>
                            {
                                person && person.sort((a, b) => a.id - b.id).map((item, idx) => (
                                        <div className='my-4 border border-[#0156B0] text-white rounded-[30px] overflow-hidden bg-[#0156B0] z-0' key={idx}>
                                            <div className="flex">
                                                <div className='z-10'>
                                                    <img className="w-[340px] h-[245px]" src={item.rasm} alt="" />
                                                </div>
                                                <div className="relative flex justify-center items-center">
                                                    <img className='w-[700px] h-[245px] translate-x-[-30px] z-20' src={cardBg} alt="" />
                                                    <div className="absolute top-[50%] left-5 translate-y-[-50%] z-50">
                                                        <h5 className="font-bold text-[28px] text-start">{item.fish}</h5>
                                                        <h4 className="font-bold text-[28px] text-start">{item.lavozim}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
export default Raxbaryat;