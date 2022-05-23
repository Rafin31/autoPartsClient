import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronRight } from 'react-icons/fi'


import { Autoplay, Pagination, Navigation } from "swiper"; // EffectFade
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div className='container max-w-[1700px] mx-auto'>
            <Swiper
                spaceBetween={30}
                // effect={"fade"}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]} // EffectFade
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" flex flex-col justify-center mobile:p-5 laptop:pl-56 desktop:pl-56  slider w-full h-full slderText-1 ">
                        <p className='text-xl font-bold text-white'>One Day Special</p>

                        <p className="text-6xl font-black text-yellow-500">
                            <span className='text-sm text-gray-300 font-bold'>GET UP TO</span> 20% Off</p>


                        <p className="text-xl font-light text-white">On All Engine oil Products</p>



                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col justify-center items-end mobile:p-5 laptop:pr-56 desktop:pr-56  slider w-full h-full slderText-2 ">
                        <p className='text-xl font-bold text-red-600 pr-5'>One Day Special</p>

                        <p className="text-6xl font-black text-yellow-500 pr-5">
                            <span className='text-sm text-white font-bold'>GET UP TO</span> 20% Off</p>


                        <p className="text-xl text-white font-light text-white pr-5">On All Engine oil Products</p>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col justify-center mobile:p-5 laptop:pl-56 desktop:pl-56  slider w-full h-full slderText-3 bg-[url('https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_slide-1.png?v=1650379580')] ">
                        <p className='text-xl font-bold text-white'>One Day Special</p>
                        <p className="text-6xl font-black text-yellow-500"> <span className='text-sm text-gray-300 font-bold'>GET UP TO</span> 20% Off</p>
                        <p className="text-xl font-light text-white">On All Engine oil Products</p>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;