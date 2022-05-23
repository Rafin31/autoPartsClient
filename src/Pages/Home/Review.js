import React from 'react';
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { Autoplay, Pagination, Navigation } from "swiper";
import Rating from 'react-rating';


const Review = () => {
    return (
        <div className='container max-w-[1700px] mx-auto my-10 py-16'>

            <div className="title mb-36">
                <p className="title-text text-3xl font-black">Our Customer Review</p>
            </div>

            <Swiper
                slidesPerView={3}
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

                    <div className="reviewWrapper grid grid-cols-1 gap-3">
                        <div className="reviewtop">
                            <div className="reviewState flex justify-center align-baseline">
                                <p className='text-7xl text-yellow-400 font-black mr-2'>5</p>
                                <div className="reviewName">
                                    <p className='font-bold'>Lorem, ipsum.</p>
                                    <p className='text-xs text-gray-400'>2 Days ago</p>
                                    <Rating
                                        placeholderRating={5}
                                        readonly={true}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<AiFillStar className='text-yellow-400' />}
                                        fullSymbol={<AiFillStar className='text-yellow-400' />}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="reviewBottom w-[60%] mx-auto text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda voluptates eaque tempora a earum minus repudiandae cumque expedita saepe!
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="reviewWrapper grid grid-cols-1 gap-3">
                        <div className="reviewtop">
                            <div className="reviewState flex justify-center align-baseline">
                                <p className='text-7xl text-yellow-400 font-black mr-2'>4.5</p>
                                <div className="reviewName">
                                    <p className='font-bold'>Lorem, ipsum.</p>
                                    <p className='text-xs text-gray-400'>2 Days ago</p>
                                    <Rating
                                        placeholderRating={4.5}
                                        readonly={true}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<AiFillStar className='text-yellow-400' />}
                                        fullSymbol={<AiFillStar className='text-yellow-400' />}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="reviewBottom w-[60%] mx-auto text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda voluptates eaque tempora a earum minus repudiandae cumque expedita saepe!
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="reviewWrapper grid grid-cols-1 gap-3">
                        <div className="reviewtop">
                            <div className="reviewState flex justify-center align-baseline">
                                <p className='text-7xl text-yellow-400 font-black mr-2'>3.5</p>
                                <div className="reviewName">
                                    <p className='font-bold'>Lorem, ipsum.</p>
                                    <p className='text-xs text-gray-400'>2 Days ago</p>
                                    <Rating
                                        placeholderRating={3.5}
                                        readonly={true}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<AiFillStar className='text-yellow-400' />}
                                        fullSymbol={<AiFillStar className='text-yellow-400' />}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="reviewBottom w-[60%] mx-auto text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda voluptates eaque tempora a earum minus repudiandae cumque expedita saepe!
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="reviewWrapper grid grid-cols-1 gap-3">
                        <div className="reviewtop">
                            <div className="reviewState flex justify-center align-baseline">
                                <p className='text-7xl text-yellow-400 font-black mr-2'>5</p>
                                <div className="reviewName">
                                    <p className='font-bold'>Lorem, ipsum.</p>
                                    <p className='text-xs text-gray-400'>2 Days ago</p>
                                    <Rating
                                        placeholderRating={5}
                                        readonly={true}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<AiFillStar className='text-yellow-400' />}
                                        fullSymbol={<AiFillStar className='text-yellow-400' />}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="reviewBottom w-[60%] mx-auto text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda voluptates eaque tempora a earum minus repudiandae cumque expedita saepe!
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Review;