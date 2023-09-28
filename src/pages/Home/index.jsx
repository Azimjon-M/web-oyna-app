import React from 'react';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    let getMonth = new Date().getMonth() + 1;

    if (getMonth === 1 || getMonth === 2 || getMonth === 12) {
        dispatch({type: 'SET_DATA', payload: 'qish'})
    } else if (getMonth >= 3 && getMonth <= 5) {
        dispatch({type: 'SET_DATA', payload: 'bahor'})
    } else if (getMonth >= 6 && getMonth <= 8) {
        dispatch({type: 'SET_DATA', payload: 'yoz'})
    } else if (getMonth >= 9 && getMonth <= 11) {
        dispatch({type: 'SET_DATA', payload: 'kuz'})
    } else {
        dispatch({type: 'SET_DATA', payload: 'yoz'})
    };

    return (
        <div>
            <Navbar />
            <Carousel />
        </div>
    )
}

export default Home;