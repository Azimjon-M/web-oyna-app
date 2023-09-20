import React, { useEffect } from 'react';
import axios from 'axios'
import AnyNavbar from '../../components/anyNavbar';

const Yangiliklar = () => {

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f5d42754217c4adfb2af3219e7508901")
            .then((res) => {
                console.log(res);
            })
    }, [])
    return (
        <div>
            <AnyNavbar />
        </div>
    )
}

export default Yangiliklar