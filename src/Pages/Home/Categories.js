import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Categories = () => {
    return (
        <div className='container category flex justify-center items-center h-[30vh] max-w-7xl mx-auto'>
            <Swiper
                slidesPerView={6}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    }
                }}
                spaceBetween={20}
                slidesPerGroup={3}
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
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://via.placeholder.com/100x100" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Lorem, ipsum dolor.</p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;