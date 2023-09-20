import React from 'react';

import Home from '';
import Admin from '';

export const routes = [
    {
        element: <root />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/'
            }
        ]
    }

]