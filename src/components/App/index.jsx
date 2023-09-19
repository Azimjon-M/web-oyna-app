import React from 'react'
import Carousel from '../Carousel/index'

import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';

function App() {

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
            btnName: 'Institut'
        },
    ]

    return (
        <div>
            <Carousel data={images} />
        </div>
    )
}

export default App