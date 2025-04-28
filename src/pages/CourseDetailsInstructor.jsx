import React from 'react'
import CourseCard from '../componant/CourseCard'
import card from "../assets/image/card.jpg";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import image from '../assets/image/avatar.png'
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import video from '../assets/image/video.jpg'
import Card from '../assets/image/card.jpg';


const courses = [
    {
        image: card,
        duration: "12 weeks",
        title: "Full Stack Web Development",
        description:
            "Become a proficient full-stack developer with HTML, CSS, JavaScript, React.",
        lessons: 20,
        rating: 4.8,
        price: 4999,
    },
    {
        image: card,
        duration: "8 weeks",
        title: "Frontend Mastery",
        description:
            "Master frontend development with Tailwind, React, and performance techniques.",
        lessons: 15,
        rating: 4.7,
        price: 3999,
    },
    {
        image: card,
        duration: "12 weeks",
        title: "Full Stack Web Development",
        description:
            "Become a proficient full-stack developer with HTML, CSS, JavaScript, React.",
        lessons: 20,
        rating: 4.8,
        price: 4999,
    },

];

const CourseDetailsInstructor = () => {
    return (
        <>
            <div className='p-3 relative '>
                <img src={card} alt="hero image" className='h-[70vh] w-full px-4' />
                <div className='shadow-lg bg-white px-6 py-2 max-w-[800px] rounded-xl absolute bottom-0 left-2'>
                    <h1 className='text-xl font-bold mb-3'>Full Stack Web Development</h1>
                    <div className='flex gap-7 '>
                        <div className='pr-4 border-r  border-gray-300'>
                            <h1>Insctucter</h1>
                            <p className='font-bold'>Dylan Meringue</p>
                        </div>
                        <div className='pr-4 border-r border-gray-300'>
                            <h1>Categories</h1>
                            <p className='font-bold'>Oline Technique</p>
                        </div>
                        <div>
                            <h1>Review</h1>
                            <p className='flex justify-center items-center gap-2'>
                                <FaStar className='text-xl text-amber-300' />
                                <FaStar className='text-xl text-amber-300' />
                                <FaStar className='text-xl text-amber-300' />
                                <FaStar className='text-xl text-amber-300' />
                                <FaRegStarHalfStroke className='text-xl text-amber-300' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-2 border-b border-gray-300 flex justify-center items-center gap-8 max-w-[800px] my-4 mx-2'>
                <Link to="">Overview</Link>
                <Link to="/CourseDetailsCurriculum">Curriculmn</Link>
                <Link to="/CourseDetailsInstructor">Instructor</Link>
                <Link to="/CourseDetailsReviews">Reviews</Link>
            </div>

            <div className=' relative p-15 my-6'>

                <div className=' flex  gap-8'>
                    <img src={image} alt="" className='w-[200px]' />
                    <div className='w-[400px] flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>Dylan Meringue</h1>
                        <p>Back-End Development</p>
                        <p>This course is designed to give learners a clear and practical understanding of back-end development. Whether you're new to programming or looking to expand your skills, you’ll gain hands-on experience with the tools and techniques used in real-world development. My goal is to equip you with the knowledge and confidence to build efficient, scalable server-side applications from the ground up.</p>
                    </div>
                </div>

                <div className='max-w-[400px] shadow-xl bg-white p-8 rounded absolute right-10 top-[-70%]'>
                    <img src={video} alt="video image" className='w-[100%]' />

                    <h2 className='font-bold text-center my-4'>4,999</h2>
                    <button className='text-white bg-blue-700 px-12 py-2 rounded text-center my-4'>Add To Cart</button>

                    <div className='flex flex-col gap-6'>
                        <h2 className='text-xl font-bold'>This Course Includes:</h2>
                        <p>62 hours on-demand video</p>
                        <p>Dylan meringue instructor</p>
                        <p>English language</p>
                        <p>Advanced level</p>
                        <p>Certificate of completion</p>
                        <p>Access on mobile and TV</p>
                        <div className='flex items-center gap-2'>
                            <h3>Share it: </h3>
                            <Link to="" className="border  border-gray-300 p-2 rounded-full bg-gray-300"><FaDribbble className='text-sm text-blue-700' /></Link>
                            <Link to="" className='border  border-gray-300 p-2 rounded-full bg-gray-300'><FaLinkedin className='text-sm text-blue-700' /></Link>
                            <Link to="" className='border border-gray-300 p-2 rounded-full bg-gray-300'><FaTwitter className='text-sm text-blue-700' /></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center gap-2 my-20'>
                <h2 className='text-blue-500 text-sm'>Explore Recommended Courses</h2>
                <h1 className='text-4xl'>You Might Also Like</h1>
                <p className='text-sm'>Discover personalized course recommendations curated to match your interests and learning goals.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-self-center ">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            image={course.image}
                            duration={course.duration}
                            title={course.title}
                            description={course.description}
                            lessons={course.lessons}
                            rating={course.rating}
                            price={course.price}
                        />
                    ))}
                </div> 

                
            </div>
        </>
    )
}

export default CourseDetailsInstructor