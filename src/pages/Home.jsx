import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, X } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import hero from "../assets/image/hero.png";
import blog1 from "../assets/image/blog1.jpg";
import blog2 from "../assets/image/blog2.jpg";
import blog3 from "../assets/image/blog3.jpg";
import card from "../assets/image/card.jpg";
import online from "../assets/image/student.jpg";
import vodafone from "../assets/image/vodafone.png";
import intel from "../assets/image/intel.png";
import amd from "../assets/image/amd.png";
import talkit from "../assets/image/talkit.png";
import tesla from "../assets/image/tesla.png";
import Infosys from "../assets/image/Infosys.png";
import image1 from "../assets/image/image04.png";
import image2 from "../assets/image/pexels-julia-m-cameron-4144224 1.png";
import blogimg from '../assets/image/card.jpg'
import CourseCard from "../componant/CourseCard";
// import company from "../assets/image/company.png";
import BlogCard from "../componant/BlogCard";

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
];

// const blog = [
//   {
//     title: "Introduction to JavaScript for the Beginner",
//     description:
//       "Learn the fundamentals of JavaScript from scratch and start building interactive web pages…",
//     date: "10 Apr, 2025",
//     image: blog1,
//   },
//   {
//     title: "Why online Learning is the Key to Career Growth",
//     description:
//       "Understand React components, props, and state to build dynamic UIs.",
//     date: "12 Apr, 2025",
//     image: blog2,
//   },
//   {
//     title: "Mastering Python: Beginner to Advanced Tips",
//     description:
//       "Level up your styling skills using Flexbox, Grid, and animations.",
//     date: "15 Apr, 2025",
//     image: blog3,
//   },
//   {
//     title: "Introduction to JavaScript for the Beginner",
//     description:
//       "Learn the fundamentals of JavaScript from scratch and start building interactive web pages…",
//     date: "10 Apr, 2025",
//     image: blog1,
//   },
//   {
//     title: "Why online Learning is the Key to Career Growth",
//     description:
//       "Understand React components, props, and state to build dynamic UIs.",
//     date: "12 Apr, 2025",
//     image: blog2,
//   },
//   {
//     title: "Mastering Python: Beginner to Advanced Tips",
//     description:
//       "Level up your styling skills using Flexbox, Grid, and animations.",
//     date: "15 Apr, 2025",
//     image: blog3,
//   },
// ];

 const blogData = [
        {
            id: 1,
            title: "Introduction to JavaScript for the Beginner",
            description: "Learn the fundamentals of JavaScript from scratch and start building interactive web pages...",
            date: "10 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
        },
        {
            id: 2,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
        },
        {
            id: 3,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
        },
        {
            id: 4,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
            image: blogimg
        },
        {
            id: 5,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        {
            id: 6,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        
        // Add more entries as needed
    ];


const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of courses in technology, business, design, marketing, and more—designed for all skill levels.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply browse the course catalog, select your desired course, and click the enroll button.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, you’ll receive a certificate of completion after successfully finishing the course.",
  },
  {
    question: "Can I access the courses on mobile?",
    answer:
      "Absolutely! All our courses are mobile-friendly and accessible on any device.",
  },
  {
    question: "How long do I have access to a course after purchasing?",
    answer:
      "Once purchased, you’ll have lifetime access to the course materials.",
  },
  {
    question: "Do I need any prior experience to join a course?",
    answer:
      "No prior experience is required. Most courses start from the basics.",
  },
];

const categories = [
  "All Categories",
  "Trending",
  "Design",
  "Marketing",
  "Programming",
  "Web Design",
];

function Home() {
  const [active, setActive] = useState("All Categories");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const filteredCourses =
    active === "All Categories"
      ? courses
      : courses.filter((course) => course.category === active);

  return (
    <div>
      <section className="px-4 md:px-16 mx-auto   ">
        <div className="flex flex-col lg:flex-row items-center justify-between  py-10 gap-5 ">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-blue-700 font-bold uppercase text-sm">
              Welcome to SSZone Technology
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Your Dreams with Our Courses
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Join thousands of learners and achieve success with our expert-led
              online courses. Learn at your own pace and build valuable skills
              to boost your career.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition  cursor-pointer duration-300 ease-in-out  hover:scale-105 ">
              Enroll Now <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative z-10">
              <img
                src={hero}
                alt="Student"
                className="  lg:rounded-lg md:w-full w-80"
              />

              <div className="absolute md:top-40 top-0 md:left-4 -left-6 bg-white rounded-lg shadow px-4 py-2 flex items-center ">
                <div className="flex items-center gap-1">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div className=" ">
                    <p className="text-blue-600 font-bold text-sm justify-self-center">
                      50+
                    </p>
                    <p className="text-gray-600 text-sm justify-self-center">
                      Online Courses
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute  lg:-bottom-5 -bottom-15 lg:left-65  md:left-50  left-20 bg-white rounded-lg shadow px-4 py-2">
                <p className="justify-self-center">10K+</p>
                <p className="text-sm font-semibold text-gray-700 justify-self-center">
                  Online Students
                </p>
                <div className="flex  mt-1">
                  <img
                    src={online}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                  <img
                    src={online}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                  <img
                    src={online}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                  <img
                    src={online}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 z-0 flex justify-center items-center">
              <div className="md:w-100 md:h-100 w-75 h-75  rounded-full bg-blue-500 opacity-100 border-dashed border-4 border-blue-100"></div>
            </div>
          </div>
        </div>

        <div className=" relative w-full overflow-hidden px-3">
          <div className="flex w-full justify-between gap-8 my-12 scrolling">
            <img src={vodafone} alt="vodafone" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={Infosys} alt="Infosys" />

            {/* Duplicate for Smooth Infinite Scrolling */}

            <img src={vodafone} alt="vodafone" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={Infosys} alt="Infosys" />

            <img src={vodafone} alt="vodafone" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={Infosys} alt="Infosys" />

            <img src={vodafone} alt="vodafone" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={Infosys} alt="Infosys" />
          </div>
        </div>

        <div className="">
          <div className="py-5 justify-self-center items-center">
            <div>
              <p className="text-blue-700 font-bold justify-self-center   py-3">
                POPULAR COURSES
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold justify-self-center  py-3">
                Choose Our Top Courses
              </h1>
            </div>
            <div>
              <p className="justify-self-center py-3 ">
                Discover a world of knowledge and opportunities with our online
                education platform pursue a new career.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap py-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 cursor-pointer
              ${
                active === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-500 hover:bg-blue-100"
              }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-self-center ">
            {filteredCourses.map((course, index) => (
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
          <button className="bg-blue-600 hover:bg-blue-700 mt-5 text-white px-6 py-3 rounded-lg flex items-center justify-self-center gap-2 transition  cursor-pointer duration-300 ease-in-out  hover:scale-105 ">
            Explore All Courses <ArrowRight size={20} />
          </button>
        </div>

        <div className=" flex flex-col lg:flex-row justify-around items-center gap-20 pt-10 p-2 ">
          <div className=" max-w-[500px] justify-self-start ">
            <h1 className="text-4xl my-8">
              Start Learning With Skills Hunt Now.
            </h1>
            <p className="text-sm">
              Tap into your full potential with online courses guided by
              industry experts. Master high-demand skills on your schedule and
              take control of your career journey today.
            </p>
            <div className="grid grid-cols-2 gap-2 my-8">
              <li className=" list-none">Start learning from our experts.</li>
              <li className=" list-none">Enhance your skills with us now.</li>
              <li className=" list-none">Do the professional level Courses</li>
              <li className=" list-none">Get our verified Certificate</li>
            </div>
            <button className=" flex gap-2 items-center bg-blue-700 text-white px-8 py-4 rounded-lg my-4  cursor-pointer duration-300 ease-in-out  hover:scale-105 ">
              Browse Courses <ArrowRight className="text-xl " />
            </button>
          </div>
          <div className=" relative">
            <img
              src={image1}
              alt="image1"
              className="h-[35vh] lg:h-[40vh] relative z-10 "
            />
            <img
              src={image2}
              alt="image2"
              className="h-[40vh] absolute top-[-100px] right-[-60px] lg:right-[-100px]"
            />
          </div>
        </div>

        <div>
          <div className="pt-10 justify-self-center items-center">
            <div>
              <p className="text-blue-700 font-bold justify-self-center   py-3">
                OUR BLOG
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold justify-self-center  py-3">
                Latest Blogs
              </h1>
            </div>
            <div>
              <p className="justify-self-center  py-3">
                Stay updated with the latest insights, tips, and trends from our
                expert blog posts
              </p>
            </div>
          </div>
          <div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-self-center ">
              {/* {blog.map((course, index) => (
                <BlogCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  date={course.date}
                  image={course.image}
                />
              ))} */}
              {blogData.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            
                        />
                    ))}
            </div>
          </div>
        </div>



        <div className=" ">
        <div className="pt-10 justify-self-center items-center">
            <div>
              <p className="text-blue-700 font-bold justify-self-center    py-3">
              Testimonials
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold justify-self-center  py-3">
              What Our Student Says About Us
              </h1>
            </div>
            <div>
              <p className="justify-self-center  pt-3">
              Hear real stories and experiences from students who’ve transformed their careers with our courses
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 py-10">
            <div className="flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]">
              <p className="text-center">
                <span className="text-blue-500 text-3xl">“</span>
                Studying online saved me a lot of money, and I didn't have to
                commute. The quality of the courses was fantastic, and I could
                learn at my own pace.{" "}
              </p>
              <div className="flex justify-center items-center gap-2">
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaRegStarHalfStroke className="text-xl text-amber-300" />
              </div>
              <img src="" alt="" className="size-13 rounded-full" />
              <h2 className="text-xl font-bold">Sakshi Chaudhary</h2>
              <h3 className="text-blue-600">UI/UX Designer</h3>
            </div>

            <div className="flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]">
              <p className="text-center">
                <span className="text-blue-500 text-3xl">“</span>
                Studying online saved me a lot of money, and I didn't have to
                commute. The quality of the courses was fantastic, and I could
                learn at my own pace.{" "}
              </p>
              <div className="flex justify-center items-center gap-2">
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaRegStarHalfStroke className="text-xl text-amber-300" />
              </div>
              <img src="" alt="" className="size-13 rounded-full" />
              <h2 className="text-xl font-bold">Sakshi Chaudhary</h2>
              <h3 className="text-blue-600">UI/UX Designer</h3>
            </div>
            <div className="flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]">
              <p className="text-center">
                <span className="text-blue-500 text-3xl">“</span>
                Studying online saved me a lot of money, and I didn't have to
                commute. The quality of the courses was fantastic, and I could
                learn at my own pace.{" "}
              </p>
              <div className="flex justify-center items-center gap-2">
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaRegStarHalfStroke className="text-xl text-amber-300" />
              </div>
              <img src="" alt="" className="size-13 rounded-full" />
              <h2 className="text-xl font-bold">Sakshi Chaudhary</h2>
              <h3 className="text-blue-600">UI/UX Designer</h3>
            </div>

            <div className="flex flex-col justify-center items-center p-5 gap-4 shadow-xl bg-[#EBF5FF] max-w-[260px]">
              <p className="text-center">
                <span className="text-blue-500 text-3xl">“</span>
                Studying online saved me a lot of money, and I didn't have to
                commute. The quality of the courses was fantastic, and I could
                learn at my own pace.{" "}
              </p>
              <div className="flex justify-center items-center gap-2">
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaStar className="text-xl text-amber-300" />
                <FaRegStarHalfStroke className="text-xl text-amber-300" />
              </div>
              <img src="" alt="" className="size-13 rounded-full" />
              <h2 className="text-xl font-bold">Sakshi Chaudhary</h2>
              <h3 className="text-blue-600">UI/UX Designer</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="py-10 justify-self-center items-center">
            <div>
              <p className="text-blue-700 font-bold justify-self-center    py-3">
                Quick Answers
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold justify-self-center  py-3">
                Frequently Asked Questions
              </h1>
            </div>
            <div>
              <p className="justify-self-center  py-3">
                Find clear answers to common questions about our courses,
                platform, and learning experience.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-base font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? <X size={18} /> : <Plus size={18} />}
                </div>
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 mt-2 transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
