"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

import Image from 'next/image'
import img1 from '../../../../public/Assets/Images/PlaceHolders/1.webp'
import img2 from '../../../../public/Assets/Images/PlaceHolders/2.webp'
const SwiperHome = () => {
    return (
        <>
            <Swiper
              dir="rtl"
              loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            
                className="mySwiper !rounded !m-3"
                pagination={{
                    clickable: true,
                }}
                // modules={[Autoplay,Pagination]}
            >
                <SwiperSlide>
                <Image src={img1}/>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={img2}/>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={img1}/>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={img1}/>
                </SwiperSlide>
              
            </Swiper>
        </>
    )
}

export default SwiperHome