import React from 'react'
import img from '../../img/specials.jpg'
import './Swiper.css'

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="swipermaster"><img src={img} alt=""/></SwiperSlide>
      <SwiperSlide className="swipermaster"><img src={img} alt=""/></SwiperSlide>
      <SwiperSlide className="swipermaster"><img src={img} alt=""/></SwiperSlide>
      <SwiperSlide className="swipermaster"><img src={img} alt=""/></SwiperSlide>
      ...
    </Swiper>
  );
};