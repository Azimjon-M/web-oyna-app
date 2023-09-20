import React from 'react'

// import img1 from '../../assets/images/img-1.jpg';
// import img2 from '../../assets/images/img-2.jpg';
// import img3 from '../../assets/images/img-3.jpg';

import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/index';

function App() {

    const content = useRoutes(routes)


    return (
        <div>
            { content }
        </div>
    )
}

export default App