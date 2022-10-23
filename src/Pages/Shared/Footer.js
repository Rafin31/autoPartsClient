import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFillTelephoneOutboundFill, BsFillClockFill, BsFacebook } from 'react-icons/bs'
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'


import './Footer.css'

const Footer = () => {
    return (
        <div className='w-full mx-auto bg-[#212121] h-[auto] pt-16 pb-8 px-10' id='contact'>

            <div className="footerContainer max-w-[1700px] mx-auto grid grid-cols-12 ">
                <div className="footer flex flex-col justify-center footerLeft laptop:col-span-3 mobile:col-span-12 border-[#373737] laptop:border-r-[1px] laptop:border-b-0  mobile:border-b-[1px] mobile:border-r-[0px]
                ">

                    <Link to={"/"}>
                        <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_logowhite.png?v=1651032674" alt="" srcSet="" />
                    </Link>

                    <p className="footerAbout text-[#959595] text-sm laptop:w-[90%]">
                        Chaos Auto Parts was established in 1983 to cater to the large automotive market place in the world. And within a short period of time we've established ourselves as the #1 online automotive and motorcycle parts store.
                    </p>

                    <div className="footerLeftContactWrapper flex justify-center items-center w-full mobile:pb-12">
                        <img className='mb-auto' src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_feedback.png?v=1648141162" alt="" srcSet="" />
                        <div className="footerLeftContactRight">
                            <p className="text-xl font-bold text-yellow-500">Feedback</p>

                            <p className="footerAbout text-[#959595] text-sm my-2 w-[60%]">
                                Your comments help us improve our website
                            </p>

                            <Link to={'/'} className="text-white selection:font-bold underline">Send Us Your Feedback <IoIosArrowForward className='inline ml-3' /> </Link>
                        </div>
                    </div>
                </div>

                <div className="footer footerRight col-span-9">


                    <div className="footerRightWrapper w-[100%] pl-5">
                        <div className="footerRightTop w-[100%] flex flex-wrap justify-evenly items-center mx-auto border-b-[1px] border-[#373737] pb-5 desktop:flex-nowrap">
                            <div className="boxWrapper flex justify-around items-center w-[100%]  flex-nowrap laptop:flex-wrap mobile:flex-wrap ">

                                <div className="box box-1">
                                    <p className='text-[#959595] text-sm mb-2'  > <BsFillTelephoneOutboundFill className='inline text-yellow-500 mr-2' /> Hotline</p>
                                    <p className='text-lg font-bold text-white cursor-pointer mobile:text-sm'>+880 1860958541</p>
                                </div>
                                <div className="box box-2">
                                    <p className='text-[#959595] text-sm mb-2'>  <BsFillTelephoneOutboundFill className='inline text-yellow-500 mr-2' />  TECHNICAL SUPPORT</p>
                                    <p className='text-lg font-bold text-white cursor-pointer mobile:text-sm'>+880 1860958541</p>
                                </div>
                                <div className="box box-3">
                                    <p className='text-[#959595] text-sm mb-2'>  <BsFillClockFill className='inline text-yellow-500 mr-2' />  Mon-Fri</p>
                                    <p className='text-lg font-bold text-white cursor-pointer mobile:text-sm'>+880 1860958541</p>
                                </div>
                                <div className="box box-4">
                                    <button
                                        className='py-3 px-4 rounded-lg border-[1px] mt-0 border-white text-black bg-white  hover:bg-blue-600 hover:border-blue-600 hover:text-white laptop:mt-5' >
                                        <BsFillTelephoneOutboundFill className='inline mr-2' />
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                            <div className="box box-5 flex justify-evenly w-full items-center laptop:mt-10 mobile:mt-10 desktop:mt-0 cursor-pointer laptop:col-span-12 laptop:justify-center" >
                                <div className="social bg-black p-5 mr-5 rounded-full">
                                    <BsFacebook className='text-xl text-white font-extrabold cursor-pointer ' />
                                </div>
                                <div className="social bg-black p-5 mr-5 rounded-full">
                                    <BsInstagram className='text-xl text-white font-extrabold  cursor-pointer' />
                                </div>
                                <div className="social bg-black p-5 mr-5 rounded-full">
                                    <AiFillLinkedin className='text-xl text-white font-extrabold  cursor-pointer' />
                                </div>
                                <div className="social bg-black p-5 mr-5 rounded-full">
                                    <AiFillYoutube className='text-xl text-white font-extrabold cursor-pointer ' />
                                </div>

                            </div>
                        </div>

                        <div className="footerRightBottom 2 grid laptop:grid-cols-4 mobile:grid-cols-1 w-full mt-10   mobile:gap-y-8 laptop:gap-y-0 mx-auto">
                            <div className="footerNav">
                                <p className='text-xm font-bold text-white mb-5'>Customer Service</p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Help Center </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> My Account </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Return Policy </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Gift Cards </Link> </p>
                            </div>
                            <div className="footerNav">
                                <p className='text-xm font-bold text-white mb-5'> QUICK LINKS</p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Search </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> About Us</Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Contact Us </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Invest us</Link> </p>
                            </div>
                            <div className="footerNav">
                                <p className='text-xm font-bold text-white mb-5'>About Us</p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Company Info </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}>
                                    Press Releases</Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Careers </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Reviews </Link> </p>
                            </div>
                            <div className="footerNav">
                                <p className='text-xm font-bold text-white mb-5'>CATALOGS</p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}>All Makes </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> All Parts </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> All Brands </Link> </p>
                                <p className='text-xm font-light text-[#959595] my-3'> <Link to={'/'}> Accessories </Link> </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


            <div className="footerCopyRight border-t-[1px] border-[#373737] pt-10 mt-20">
                <div className="copyright w-full flex justify-between items-center">
                    <p className="text-sm text-bold text-[#959595]">Copyright © {new Date().getFullYear()} Asif Hossain . All rights reserved</p>
                    <div className="imgs">
                        <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_autozpro_card.png?v=1648141162" className="inline m-0 p-0" alt="" srcSet="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;