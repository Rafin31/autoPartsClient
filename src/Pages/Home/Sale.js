import React from 'react';

import { IoIosArrowForward } from 'react-icons/io'

const Sale = () => {
    return (
        <div className='max-w-[1700px] mx-auto h-[auto] flex justify-center items-center grid gap-5 mb-10 mobile:grid-cols-1 desktop:grid-cols-3 laptop:grid-cols-2'>


            <div className="saleBox saleBox-1 justify-center">
                <div className="card card-1 rounded-none lg:max-w-lg h-full">
                    <div className="card-body justify-center h-full">

                        <div className="card_body_top">
                            <p className=' mb-2 text-lg  font-bold'>Big Sale up to <span className='text-xl text-red-600 '>40%</span></p>
                            <p className='laptop:text-6xl desktop:text-6xl font-black text-black w-[50%] mobile:text-4xl'>Genuine sale</p>
                            <p className='mt-3 laptop:text-lg desktop:text-lg  font-light text-black mobile:text-sm'>We supply top brands</p>
                        </div>

                        <button
                            className='desktop:w-[50%] laptop:w-[50%] mobile:w-1/2 py-3 px-4 mt-3 rounded-lg border-[1px] border-white 
                        text-black bg-white  hover:bg-blue-600 hover:border-blue-600 hover:text-white' >Shop Now <IoIosArrowForward className='inline' /> </button>

                    </div>
                </div>
            </div>
            <div className="saleBox saleBox-2">
                <div className="card card-2 rounded-none lg:max-w-lg ">
                    <div className="card-body justify-center h-full">

                        <div className="card_body_top">
                            <p className=' mb-2 text-lg text-white  font-bold'>Lower Price</p>
                            <p className='laptop:text-6xl desktop:text-6xl font-black text-white w-[50%] mobile:text-4xl'>GEAR ESSENTIALS</p>
                            <p className='mt-3 laptop:text-lg desktop:text-lg  font-light text-white mobile:text-sm'>Save from over <span className='text-sm font-semibold text-warning'>80,000 parts</span></p>
                        </div>

                        <button
                            className='desktop:w-[50%] laptop:w-[50%] mobile:w-1/2 py-3 px-4 mt-3 rounded-lg border-[1px] border-white 
                        text-black bg-white  hover:bg-warning hover:border-warning hover:text-black' >Shop Now <IoIosArrowForward className='inline' /> </button>

                    </div>
                </div>
            </div>
            <div className="saleBox saleBox-3 grid gap-5 grid-cols-1 grid-rows-2 
            laptop:col-span-2 desktop:col-span-1">
                <div className="subBox subBox-1">
                    <div className="card card-3 rounded-none min-h-full lg:max-w-lg ">
                        <div className="card-body justify-start h-full">

                            <div className="card_body_top">
                                <p className='laptop:text-3xl desktop:text-3xl font-black text-white w-[60%] mobile:text-xl'>ALL PARTS &
                                    ACCESSORIES</p>
                                <p className='text-sm font-bold text-white'>UP TO <span className='text-sm font-semibold text-warning'>80,000 parts</span></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="subBox subBox-2">
                    <div className="card card-4 rounded-none min-h-full lg:max-w-lg ">
                        <div className="card-body justify-center items-end h-full">
                            <div className="card_body_top pl-[800px]">

                                <p className=' laptop:text-2xl desktop:text-3xl font-bold text-white w-[60%] mobile:text-xl'>TOP QUALITY
                                    <span className=' laptop:text-2xl desktop:text-3xl font-semibold text-red-600 mobile:text-xl'>BATTERIES</span></p>

                                <p className='text-base font-black text-white '>STAY CHARGED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;