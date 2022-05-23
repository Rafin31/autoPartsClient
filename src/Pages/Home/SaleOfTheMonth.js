import React from 'react';
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import deal1 from '../../Assets/Dels/deal1.jpg'
import deal2 from '../../Assets/Dels/deal2.jpg'
import deal3 from '../../Assets/Dels/deal3.jpg'


const SaleOfTheMonth = () => {
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

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal1} className='mx-left' alt="" srcSet="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal2} className='mx-left' alt="" srcSet="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal3} className='mx-left' alt="" srcSet="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="dealSliderWrapper grid grid-cols-2 gap-3">
                                <img src={deal1} className='mx-left' alt="" srcSet="" />
                                <p>Lorem ipsum dolor sit amet.</p>
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