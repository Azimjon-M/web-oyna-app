import React, { useState, useEffect } from 'react';
import ErrorPage from '../../pages/ErrorPage';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const componentDidCatch = (error, info) => {
            console.error('Xatolik:', error);
            console.error('Xatolik ma\'lumoti:', info);
            setHasError(true);
        };

        // Eslatma: componentDidCatch funksiyasi useEffect orqali chaqirilgan
        return () => {
            console.log('useEffect bo\'yicha chaqirildi');
        };
    }, []); // Effect faqat bir marta bajariladi

    if (hasError) {
        return <ErrorPage />;
    }

    return children;
}

export default ErrorBoundary;
