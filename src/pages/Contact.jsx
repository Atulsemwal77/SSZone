import Banner from '../componant/Banner'
import ContactForm from '../componant/ContactForm'
import map from '../assets/image/contactmap.png'
import hero from '../assets/image/contactbanner.png'

function Contact() {
  return (
    <div className='w-full flex flex-col gap-[30px]'>
        <Banner
          title="Contact Us"
          description="Have questions or need support? We’re here to help! Reach out to our team for assistance,
           feedback, or more information—we’d love to hear from you and guide you on your learning journey."
          image={hero}
        />
        <ContactForm/>
        <div className='w-full h-[555px] py-[30px]'>
          <img src={map} alt="map" className='w-full'/>
        </div>
    </div>
  )
}

export default Contact
