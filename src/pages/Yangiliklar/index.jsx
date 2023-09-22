import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AnyNavbar from '../../components/anyNavbar';

const Yangiliklar = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f5d42754217c4adfb2af3219e7508901")
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
            <div className='my-5'>
                <div className='grid grid-cols-2 gap-3 my-5 text-center'>
                        {
                            news.map((item, idx) => {
                                return (
                                    <div className='col' key={idx}>
                                        <a href="www,google.com" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <img src={item.urlToImage} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="..."/>
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