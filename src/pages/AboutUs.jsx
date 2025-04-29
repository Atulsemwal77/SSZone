import React from 'react'
import vodafone from '../assets/image/vodafone.png'
import intel from '../assets/image/intel.png'
import amd from '../assets/image/amd.png'
import talkit from '../assets/image/talkit.png'
import tesla from '../assets/image/tesla.png'
import Infosys from '../assets/image/Infosys.png'
import image1 from '../assets/image/image04.png'
import image2 from '../assets/image/pexels-julia-m-cameron-4144224 1.png'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import bgImage from "../assets/image/about.jpg"

const AboutUs = () => {
    return (
        <>
            <div
                className="h-[60vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className=" p-8 rounded-lg  text-black md:w-1/2 w-full">
                    <h1 className="md:text-5xl text-3xl font-bold mb-4">About Us</h1>
                    <p className="md:text-lg text-sm leading-relaxed">
                    At SSZone Technology, we’re dedicated to empowering learners with practical, career-ready skills. We provide flexible, expert-led training to help you enhance your expertise and advance your career, all at your own pace.
                    </p>
                </div>
            </div>

            <div className=" relative w-full overflow-hidden px-3">
                <div className="flex w-full justify-between gap-8 my-12 scrolling">

                    <img src={vodafone} alt="vodafone" />
                    <img src={intel} alt="intel" />
                    <img src={tesla} alt="tesla" />
                    <img src={amd} alt="amd" />
                    <img src={talkit} alt="talkit" />
                    <img src={Infosys} alt='Infosys' />

                    {/* Duplicate for Smooth Infinite Scrolling */}

                    <img src={vodafone} alt="vodafone" />
                    <img src={intel} alt="intel" />
                    <img src={tesla} alt="tesla" />
                    <img src={amd} alt="amd" />
                    <img src={talkit} alt="talkit" />
                    <img src={Infosys} alt='Infosys' />


                    <img src={vodafone} alt="vodafone" />
                    <img src={intel} alt="intel" />
                    <img src={tesla} alt="tesla" />
                    <img src={amd} alt="amd" />
                    <img src={talkit} alt="talkit" />
                    <img src={Infosys} alt='Infosys' />


                    <img src={vodafone} alt="vodafone" />
                    <img src={intel} alt="intel" />
                    <img src={tesla} alt="tesla" />
                    <img src={amd} alt="amd" />
                    <img src={talkit} alt="talkit" />
                    <img src={Infosys} alt='Infosys' />


                </div>
            </div>

            <div className=' flex flex-col lg:flex-row justify-around items-center gap-20 py-10 p-2 '>
                <div className=' max-w-[400px] '>
                    <h1 className='text-4xl my-8'>Start Learning With Skills Hunt Now.</h1>
                    <p className='text-sm'>Tap into your full potential with online courses guided by industry experts.
                        Master high-demand skills on your schedule and take control of your
                        career journey today.</p>
                    <div className='grid grid-cols-2 gap-2 my-8'>
                        <li className=' list-none'>Start learning from our experts.</li>
                        <li className=' list-none'>Enhance your skills with us now.</li>
                        <li className=' list-none'>Do the professional level Courses</li>
                        <li className=' list-none'>Get our verified Certificate</li>
                    </div>
                    <button className=" flex gap-2 items-center bg-blue-700 text-white px-8 py-4 rounded-lg my-4">Browse Courses <FaArrowRightLong className='text-xl ' /></button>
                </div>
                <div className=' relative'>
                    <img
                        src={image1}
                        alt="image1" className='h-[35vh] lg:h-[40vh] relative z-10 ' />
                    <img src={image2} alt="image2" className='h-[40vh] absolute top-[-100px] right-[-60px] lg:right-[-100px]' />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-7 p-6 my-10'>
                <h1 className='text-4xl font-bold'>Achieve Your Goal With SSZone Technology</h1>
                <p className='text-sm'>Empowering you with skills and knowledge to turn your goals into reality.</p>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                    <div className='flex flex-col justify-center items-center p-5 gap-3 shadow-2xl bg-[#FFFFFF] max-w-[260px]'>
                        <img src="" alt="" className='size-13 rounded-full' />
                        <h2 className='text-xl font-bold'>High Quality Courses</h2>
                        <p className='text-center'>Expert-designed courses crafted to deliver practical skills and real-world knowledge.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center p-5 gap-3 shadow-2xl bg-[#FFFFFF] max-w-[260px]'>
                        <img src="" alt="" className='size-13 rounded-full' />
                        <h2 className='text-xl font-bold'>Expert Instructors</h2>
                        <p className='text-center'>Learn from industry professionals with real-world experience and proven expertise.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center p-7 gap-3 shadow-2xl bg-[#FFFFFF] max-w-[260px]'>
                        <img src="" alt="" className='size-13 rounded-full' />
                        <h2 className='text-xl font-bold'>Certification</h2>
                        <p className='text-center'>Earn a recognized certificate to showcase your skills and boost your career.</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center gap-7 p-6 my-10 '>
                <h1 className='text-4xl font-bold'>What Our Student Says About Us</h1>
                <p className='text-sm'>Hear real stories and experiences from students who’ve transformed their careers with our courses.</p>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
                    <div className='flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]'>
                        <p className='text-center'>
                            <span className='text-blue-500 text-3xl'>“</span>
                            Studying online saved me a lot of money, and I didn't have to commute. The quality of the courses was fantastic, and I could learn at my own pace. </p>
                        <div className='flex justify-center items-center gap-2'>
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaRegStarHalfStroke className='text-xl text-amber-300' />
                        </div>
                        <img src="" alt="" className='size-13 rounded-full' />
                        <h2 className='text-xl font-bold'>Sakshi Chaudhary</h2>
                        <h3 className='text-blue-600'>UI/UX Designer</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]'>
                        <p className='text-center'>
                            <span className='text-blue-500 text-3xl'>“</span>
                            Studying online saved me a lot of money, and I didn't have to commute. The quality of the courses was fantastic, and I could learn at my own pace. </p>
                        <div className='flex justify-center items-center gap-2'>
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaRegStarHalfStroke className='text-xl text-amber-300' />
                        </div>
                        <img src="" alt="" className='size-13 rounded-full' />
                        <h2 className='text-xl font-bold'>Sakshi Chaudhary</h2>
                        <h3 className='text-blue-600'>UI/UX Designer</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]'>
                        <p className='text-center'>
                            <span className='text-blue-500 text-3xl'>“</span>
                            Studying online saved me a lot of money, and I didn't have to commute. The quality of the courses was fantastic, and I could learn at my own pace. </p>
                        <div className='flex justify-center items-center gap-2'>
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaStar className='text-xl text-amber-300' />
                            <FaRegStarHalfStroke className='text-xl text-amber-300' />
                        </div>
                        <img src="" alt="" className='size-13 rounded-full' />
                        <h2 className='text-xl font-bold'>Sakshi Chaudhary</h2>
                        <h3 className='text-blue-600'>UI/UX Designer</h3>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default AboutUs