import React from 'react'
import Carousel from '../Carousel/index'

import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import Navbar from '../Navbar';

import { useRoutes } from 'react-router-dom';
import {routes} from '../../routes/index';

function App() {

    const content = useRoutes(routes)

    const images = [
        {
            id: 0,
            src: img1,
            btnName: 'Dars jadval'
        },
        {
            id: 1,
            src: img2,
            btnName: 'Yangiliklar'

        },
        {
            id: 2,
            src: img3,
            btnName: 'Institut haritasi'
        },
    ]

    return (
        <div>
            {/* <Navbar /> */}
            {/* <Carousel data={images} /> */}
            { content }
        </div>
    )
}

export default App