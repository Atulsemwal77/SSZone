import { Link } from 'react-router-dom'
import hero from '../assets/image/coursesbanner.jpg'
import Banner from '../componant/Banner'
import Card from '../componant/Card'
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
            <Card
              pageTitle="Popular Courses"
              pageHeading="Choose Our Top Courses"
              pageSubHeading="Discover a world of knowledge and opportunities with our online education platform pursue a new career"
            />
    </div>
  )
}

export default Courses
