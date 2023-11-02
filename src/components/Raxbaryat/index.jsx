import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../../components/Loader';

const Raxbaryat = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);
    useEffect(() => {
        const loadPost = async () => {
            try {
                await axios.get("http://api.kspi.uz/v1/rahbariyat/rahbariyat/").then(res => {
                    setNews(res.data);
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
                        <div className='mx-3 my-5 text-center'>
                            {
                                news && news.map((item, idx) => (
                                        <div className='my-3 shadow-lg shadow-indigo-500/50' key={idx}>
                                            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <img src={item.rasm} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                                                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                                                    <h4 className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400">{item.lavozim}</h4>
                                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{item.fish}</h5>
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