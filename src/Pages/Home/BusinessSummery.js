import React from 'react';
import './Home.css'

import { AiFillFlag } from 'react-icons/ai'
import { ImUsers } from 'react-icons/im'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '../Shared/Button';

const BusinessSummery = () => {
    return (
        <div className="parentWrapper min-w-full py-6  bg-[#f5f5f5]">
            <div className='container max-w-[1700px] mx-auto mt-10'>
                <div className="title mb-8">
                    <p className="title-text text-3xl font-extrabold pl-3">Our Business</p>
                </div>
                <div className="businessStats grid desktop:grid-cols-4 laptop:grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-2 gap-7">
                    <div className="text-center country">
                        <div className="states flex flex-col justify-evenly items-center ">
                            <AiFillFlag className='inline-block text-4xl text-cyan-600' />
                            <p className='text-4xl font-bold text-black my-3'>72</p>
                            <p className='text-cyan-600 text-lg font-bold'>Countries</p>
                        </div>
                    </div>
                    <div className="text-center product">
                        <div className="states flex flex-col justify-evenly items-center ">
                            <ImUsers className='inline-block text-4xl text-cyan-600' />
                            <p className='text-4xl font-bold text-black my-3'>365+</p>
                            <p className='text-cyan-600 text-lg font-bold'>Employee</p>
                        </div>
                    </div>
                    <div className="text-center happyClient">
                        <div className="states flex flex-col justify-evenly items-center ">
                            <BsFillHandThumbsUpFill className='inline-block text-4xl text-cyan-600' />
                            <p className='text-4xl font-bold text-black my-3'>125+</p>
                            <p className='text-cyan-600 text-lg font-bold'>Feedback</p>
                        </div>
                    </div>
                    <div className="text-center feedback">
                        <div className="states flex flex-col justify-evenly items-center ">
                            <HiOutlineUserGroup className='inline-block text-4xl text-cyan-600' />
                            <p className='text-4xl font-bold text-black my-3'>96+</p>
                            <p className='text-cyan-600 text-lg font-bold'>Customers</p>
                        </div>
                    </div>
                </div>

                <div class="card w-[80%] mx-auto bg-base-100 mt-10">
                    <div class="card-body grid laptop:grid-cols-2 mobile:grid-cols-1 desktop:grid-cols-2 tablet:grid-cols-2 gap-x-14">
                        <div className="subscribe">
                            <p className='text-3xl font-bold text-cyan-500'>Looking For Automotive Professional?</p>
                            <p className='text-lg font-light text-black'>Join our FREE membership program for industry professionals - receive these exclusive benefits:</p>
                        </div>
                        <div className="buttons grid laptop:grid-cols-2 mobile:grid-cols-1 desktop:grid-cols-2 tablet:grid-cols-1 gap-5 my-auto ">

                            <Button width={"w-[100%]"}>Subscribe</Button>
                            <button
                                className='btn text-black border-0 
                                bg-yellow-300 
                                hover:from-blue-500 hover:to-cyan-500 hover:text-white' >
                                Contact us <IoIosArrowForward className='inline ml-2' /> </button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default BusinessSummery;