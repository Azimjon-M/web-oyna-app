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
    const cutTitle = 200;
    const cutBody = 500;
    useEffect(() => {
        const loadPost = async () => {
            try {
                await axios.get("https://api.kspi.uz/v1/yangilik/yangilik/").then(res => {
                    setNews(res.data);
                    setLoading(false);
                }).catch(err => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        }
        loadPost();
    }, []);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                        <Swiper
                        navigation={true}
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
                        className="mySwiper w-[100%] h-auto py-[50px!important] flex justify-center"
                    >
                        {news && news.map((item, idx) => (
                            <SwiperSlide className='w-[800px!important] bg-white flex justify-center rounded-3xl overflow-hidden mx-[100px]' key={idx}>
                                <div>
                                    <img className='block w-[800px] h-[1000px] rounded-3xl object-cover' src={item.rasm} alt="yangilik img" />
                                </div>
                                <div>
                                <h1 className='text-3xl text-center px-5 py-5'>{item.title.length > cutTitle ? item.title.slice(0, cutTitle) + "...": item.title}</h1>
                                <p className='text-2xl text-center px-5 pb-5'>{item.body.length > cutBody ? item.body.slice(0, cutBody) + "...": item.body}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                )
            }
        </>
    );
}
export default Yangiliklar;