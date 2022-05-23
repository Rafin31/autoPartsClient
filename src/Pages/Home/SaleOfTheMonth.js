import React, { useEffect, useState } from 'react';
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import deal1 from '../../Assets/Dels/deal1.jpg'
import deal2 from '../../Assets/Dels/deal2.jpg'
import deal3 from '../../Assets/Dels/deal3.jpg'
import CountdownTimer from '../Shared/ShowCounter';



const SaleOfTheMonth = () => {


    const firstDeal = 3 * 24 * 60 * 60 * 1000;
    const secondtDeal = 9 * 24 * 60 * 60 * 1000;
    const thirdDeal = 3 * 24 * 60 * 60 * 1000;
    const fourthDeal = 6 * 24 * 60 * 60 * 1000;

    const NOW_IN_MS = new Date().getTime();

    const firstDealEnds = NOW_IN_MS + firstDeal;
    const secondDealEnds = NOW_IN_MS + secondtDeal;
    const thirdDealEnds = NOW_IN_MS + thirdDeal;
    const fourthDealEnds = NOW_IN_MS + fourthDeal;


    return (
        <div className='container max-w-[1700px] mx-auto '>
            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">Deals of the month</p>
            </div>
            <div className="dealsWrapper w-full grid laptop:grid-cols-12 desktop:grid-cols-12 mobile:grid-cols-1 gap-5 mx-auto">

                <div className="dealWrapperLeft  laptop:col-span-8">

                    <Swiper
                        slidesPerView={2}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        spaceBetween={20}
                        slidesPerGroup={2}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-0">
                                <img src={deal1} className='mx-left' alt="" srcSet="" />
                                <div className="dealDetails">
                                    <p className='text-bold text-lg text-blue-600'> <span><s className='text-sm text-gray-400 mr-2'>$500</s>$359</span></p>
                                    <p className='text-xl font-extrabold text-black'>NRG Innovations® - 3-Spoke Chameleon Classic</p>
                                    <p className='text-sm text-gray-400 mt-3 '>Air & fuel delivery</p>

                                    <p className='text-sm font-bold text-gray-400 mt-8 mb-5'>Sale Ends In</p>
                                    <CountdownTimer targetDate={firstDealEnds} />

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal2} className='mx-left' alt="" srcSet="" />
                                <div className="dealDetails">
                                    <p className='text-bold text-lg text-blue-600'> <span><s className='text-sm text-gray-400 mr-2'>$500</s>$359</span></p>
                                    <p className='text-xl font-extrabold text-black'>NRG Innovations® - 3-Spoke Chameleon Classic</p>
                                    <p className='text-sm text-gray-400 mt-3 '>Air & fuel delivery</p>

                                    <p className='text-sm font-bold text-gray-400 mt-8 mb-5'>Sale Ends In</p>
                                    <CountdownTimer targetDate={secondDealEnds} />

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal3} className='mx-left' alt="" srcSet="" />
                                <div className="dealDetails">
                                    <p className='text-bold text-lg text-blue-600'> <span><s className='text-sm text-gray-400 mr-2'>$500</s>$359</span></p>
                                    <p className='text-xl font-extrabold text-black'>NRG Innovations® - 3-Spoke Chameleon Classic</p>
                                    <p className='text-sm text-gray-400 mt-3 '>Air & fuel delivery</p>

                                    <p className='text-sm font-bold text-gray-400 mt-8 mb-5'>Sale Ends In</p>
                                    <CountdownTimer targetDate={thirdDealEnds} />

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal1} className='mx-left' alt="" srcSet="" />
                                <div className="dealDetails">
                                    <p className='text-bold text-lg text-blue-600'> <span><s className='text-sm text-gray-400 mr-2'>$500</s>$359</span></p>
                                    <p className='text-xl font-extrabold text-black'>NRG Innovations® - 3-Spoke Chameleon Classic</p>
                                    <p className='text-sm text-gray-400 mt-3 '>Air & fuel delivery</p>


                                    <p className='text-sm font-bold text-gray-400 mt-8 mb-5'>Sale Ends In</p>
                                    <CountdownTimer targetDate={fourthDealEnds} />

                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>



                </div>
                <div className="dealWrapperRight  laptop:col-span-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore dolor, dolorum, necessitatibus ut nesciunt eveniet, et hic praesentium optio quo fuga itaque consequatur voluptas eaque error maxime voluptatibus ad aperiam! Similique, eos labore. Maxime, ipsum ea dicta consectetur nemo quibusdam aut tenetur recusandae necessitatibus molestiae repellendus quo hic quaerat.</div>
            </div>
        </div>
    );
};
export default SaleOfTheMonth;