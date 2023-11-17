import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Error />
            <button onClick={() => navigate('/')}>Bosh sahifaga qaytish</button>
        </div>
    )
}

export default ErrorPage;