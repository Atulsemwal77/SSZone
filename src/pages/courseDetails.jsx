import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import arrow from '../assets/image/up_line 1.png'
import video from '../assets/image/video.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CourseCard from '../componant/CourseCard'
import card from '../assets/image/card.jpg'
import right from '../assets/image/checkmark-circle-02.png'

const CourseDetails = () => {
    const location = useLocation()
    const data = location.state

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

  return (
    <>
    <div className='p-3 relative '>
            <img src={data.image} alt="hero image" className='h-[70vh] w-full px-4' />
            <div className='shadow-lg bg-white px-6 py-2 max-w-[800px] rounded-xl absolute bottom-0 left-2'>
                <h1 className='text-xl font-bold mb-3'>{data.title}</h1>
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

    <div className=' relative'>
                <div className='max-w-[800px] pl-15 p-2'>
                    <h1 className='text-xl font-bold'>Description</h1>
                    <p className='my-4'>Dive into the world of Full Stack Web Development and learn how to build complete, dynamic web applications from start to finish. This course covers both front-end and back-end technologies, giving you a solid foundation in HTML, CSS, JavaScript, server-side programming, databases, APIs, and deployment. Whether you're designing user-friendly interfaces or writing powerful server logic, you’ll gain hands-on experience with real-world projects. Perfect for beginners or aspiring developers looking to become versatile and job-ready in the tech industry.</p>
                </div>
                <div className='max-w-[600px] pl-15 p-2 flex flex-col  gap-4'>
                    <h1 className='text-xl font-bold'>What You Will Learn</h1>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' /> Build responsive websites using HTML, CSS, and JavaScript.</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Develop dynamic web applications with front-end frameworks.</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Create and manage server-side logic with backend technologies</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Work with databases and perform CRUD operations.</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Connect frontend and backend using RESTful APIs.</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Deploy full stack applications to live servers.</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Understand version control with Git and GitHub.</p>
                    <p className='flex items-center gap-2'> <img src={right} alt="" className='size-4' />Gain real-world experience through hands-on projects.</p>
                </div>
                <div className='max-w-[400px] shadow-xl bg-white p-5 rounded absolute right-10 top-[-20%]'>
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

export default CourseDetails