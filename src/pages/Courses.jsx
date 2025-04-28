import hero from '../assets/image/coursesbanner.jpg'
import Banner from '../componant/Banner'
import Card from '../componant/Card'
import all_course from '../assets/Course_Data'

function Courses() {
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
        <div className='py-[30px] px-4 sm:px-10 md:px-24 font-[Manrope] flex flex-col'>
          <p className='font-bold text-[18px] leading-[100%] tracking-normal text-[#1C4ED9] pb-2 text-center uppercase'>Popular Courses</p>
          <h1 className='font-semibold text-[48px] leading-[100%] tracking-normal text-[#292929] pb-2 text-center'>Choose Our Top Courses</h1>
          <p className='font-normal text-[18px] leading-[100%] tracking-normal text-[#6F6F6F] pb-10 text-center'>Discover a world of knowledge and opportunities with our online education platform pursue a new career</p>
        </div>

        <Card
          all_course={all_course}
        />
    </div>
  )
}

export default Courses
