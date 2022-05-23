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
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-1.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-8.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-7.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-5.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-2.png?v=1647879288" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-3.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-4.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-1.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_cate-3.png?v=1647879283" className='mx-auto' alt="" srcSet="" />
                    <p className="category_item text-sm font-bold text-center mt-3">Brake Systems </p>
                    <p className="category_sub_item text-xs font-light text-center ">Available: 10.</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;