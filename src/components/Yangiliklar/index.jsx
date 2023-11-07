import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../../components/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Yangiliklar = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);
    useEffect(() => {
        const loadPost = async () => {
            try {
                await axios.get("http://api.kspi.uz/v1/yangilik/yangilik/").then(res => {
                    setNews(res.data);
                    setLoading(false);
                }).catch(err => {
                    console.log(err);
                    setLoading(false);
                });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        loadPost();
    }, []);

    return (
        <>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper w-[100%] h-auto border border-red-600 py-[50px!important]"
            >
                {news && news.map((item, idx) => (
                    <SwiperSlide className='w-[800px!important] flex justify-center rounded-3xl border border-blue-600 overflow-hidden' key={idx}>
                        <img className='block w-[800px] h-[1200px] rounded-3xl object-cover' src={item.rasm} alt="" />
                        <h1 className='text-5xl text-center heading1 py-5'>{item.title}</h1>
                        <p className='text-2xl text-center pb-5'>{item.body}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
export default Yangiliklar;