import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';

const Yangiliklar = () => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);
    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const res = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f5d42754217c4adfb2af3219e7508901");
            setNews(res.data.articles);
            setLoading(false);
        }
        loadPost();
    }, []);

    return (
        <>
            <div className='w-[100%]'>
                <Navbar position='relative' color='blach' />
                <div className=''>
                    {loading ? <Loader /> :
                        <div className='mx-3 my-5 text-center'>
                            {
                                news.map((item, idx) => {
                                    const text = item.description;
                                    let modifiedText = "";
                                    if (text.length > 150) {
                                        modifiedText += text.slice(0, 150) + "... ";
                                    } else {
                                        modifiedText += text + " ";
                                    }
                                    return (
                                        <div className='my-3 shadow-lg shadow-indigo-500/50' key={idx}>
                                            <div className="w-full flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <img src={item.urlToImage} className="m-5 object-cover w-[40%] rounded-t-lg h-60" alt="..." />
                                                <div className="flex flex-col justify-between p-4 leading-normal w-[60%]">
                                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">{modifiedText.trim()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
export default Yangiliklar;