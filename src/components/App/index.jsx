import React from 'react'
import Navbar from '../Navbar'
import Carousel from '../Carousel/index'

import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';

function App() {

    const images = [
        {
            src: img1,
            id: 0
        },
        {
            src: img2,
            id: 1,
        },
        {
            src: img3,
            id: 2,
        },
    ]

    return (
        <div>
            <Navbar />
            <Carousel data={images} />
        </div>
    )
}

export default App