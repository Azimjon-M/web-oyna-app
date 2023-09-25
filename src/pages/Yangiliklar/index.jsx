import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AnyNavbar from '../../components/anyNavbar';

const Yangiliklar = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-09-21&to=2023-09-21&sortBy=popularity&apiKey=f5d42754217c4adfb2af3219e7508901")
            .then((res) => {
                setNews(res.data.articles)
            })
            return (
                setNews([])
            )
    }, [])

    return (
        <div>
            <AnyNavbar />
            <div className='mt-16'>
                <div className='mx-3 my-5 text-center'>
                        {
                            news.map((item, idx) => {
                                return (
                                    <div className='my-3' key={idx}>
                                        <a href="www.google.com" className="w-full flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <img src={item.urlToImage} className="ml-3 object-cover w-[40%] rounded-t-lg h-96" alt="..."/>
                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default Yangiliklar