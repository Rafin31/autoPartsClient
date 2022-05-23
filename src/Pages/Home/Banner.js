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
                    <div className=" flex flex-col justify-center items-center slider w-full h-full slderText bg-[url('http://via.placeholder.com/1440x360')] ">
                        <p className="text-3xl font-extrabold">Lorem, ipsum dolor.</p>
                        <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus vel culpa!.</p>


                        <Button width={"w-62"}> Show Now <FiChevronRight className='inline' /> </Button>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col justify-center items-center slider w-full h-full slderText bg-[url('http://via.placeholder.com/1440x360')] ">
                        <p className="text-3xl font-extrabold">Lorem, ipsum dolor.</p>
                        <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus vel culpa!.</p>


                        <Button width={"w-62"}> Show Now <FiChevronRight className='inline' /> </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col justify-center items-center slider w-full h-full slderText bg-[url('http://via.placeholder.com/1440x360')] ">
                        <p className="text-3xl font-extrabold">Lorem, ipsum dolor.</p>
                        <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus vel culpa!.</p>

                        <Button width={"w-62"}> Show Now <FiChevronRight className='inline' /> </Button>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;