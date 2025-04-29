import hero from '../assets/image/coursesbanner.jpg'
import Banner from '../componant/Banner'
import Card from '../componant/Card'
import all_course from '../assets/Course_Data'
import { useState } from 'react';


const categoriesButton = [
  "Trending",
  "All Categories",
  "Design",
  "Marketing",
  "Programming",
  "Web Design",
];

function Courses() {
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
    ? all_course
    : all_course.filter((course) => course.category === active);


  return (
    <div className='w-full flex flex-col gap-[30px]'>
        <Banner
          title="Courses"
          description="Discover our wide selection of expert-led 
              courses designed to boost your skills and 
              career growth. Start learning today and 
              take the next step toward your success!"
          image={hero}
        />
        <div className='pt-[30px] px-4 sm:px-10 md:px-24 font-[Manrope] flex flex-col'>
          <p className='font-bold text-[18px] leading-[100%] tracking-normal text-[#1C4ED9] pb-2 text-center uppercase'>Popular Courses</p>
          <h1 className='font-semibold text-[48px] leading-[100%] tracking-normal text-[#292929] pb-2 text-center'>Choose Our Top Courses</h1>
          <p className='font-normal text-[18px] leading-[100%] tracking-normal text-[#6F6F6F] pb-10 text-center'>Discover a world of knowledge and opportunities with our online education platform pursue a new career</p>
          
          <div className="flex gap-6 flex-wrap justify-center">
              {categoriesButton.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`px-6 py-3 rounded-[40px] border text-sm transition duration-300 cursor-pointer font-medium font-[manrope]
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
        <Card
          all_course={filteredCourses}
        />
    </div>
  )
}

export default Courses
