import { FiClock, FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLocationOutline } from 'react-icons/io5'

function ContactForm() {
  return (
    <div className='py-[30px] px-24 flex md:flex-row flex-col gap-24 justify-between'>
        {/* left section */}
        <div className='py-10'>
            <div className='font-[Manrope]'>
                <p className='font-bold text-[18px] leading-[100%] tracking-normal text-[#1C4ED9] pb-2.5'>Get In Touch</p>
                <h2 className='font-bold text-[48px] leading-[100%] tracking-normal text-[#292929]'>We're here to help</h2>
            </div>
            <ul className='py-[30px] font-[Manrope] text-[#292929]'>
                <div className='flex gap-4'>
                    <div className="bg-[#296AD2] rounded-lg inline-flex items-center justify-center h-[52px] w-[52px]">
                        <IoLocationOutline className="text-white" size={32}/>
                    </div>
                    <li className='pb-10 font-semibold text-[24px] leading-[100%] tracking-normal items-center'>Head Office <br />
                    <span className='font-normal text-[18px] leading-[27px] tracking-normal'>GMS Road Dehradun, <br /> Uttarakhand, India</span></li>
                </div>
                <div className='flex gap-4'>
                    <div className="bg-[#296AD2] rounded-lg inline-flex items-center justify-center h-[52px] w-[52px]">
                        <HiOutlineMail className="text-white" size={32}/>
                    </div>
                    <li className='pb-10 font-semibold text-[24px] leading-[100%] tracking-normal'>Email Support <br />
                    <span className='font-normal text-[18px] leading-[27px] tracking-normal'>info@novanector.co.in</span></li>
                </div>
                <div className='flex gap-4'>
                    <div className="bg-[#296AD2] rounded-lg inline-flex items-center justify-center h-[52px] w-[52px]">
                        <FiPhoneCall className="text-white" size={32}/>
                    </div>
                <li className='pb-10 font-semibold text-[24px] leading-[100%] tracking-normal'>Let's Talk <br />
                    <span className='font-normal text-[18px] leading-[27px] tracking-normal'>Phone: +91 8979891703</span></li>
                </div>
                <div className='flex gap-4'>
                    <div className="bg-[#296AD2] rounded-lg inline-flex items-center justify-center h-[52px] w-[52px]">
                        <FiClock className="text-white" size={32}/>
                    </div>
                <li className='pb-10 font-semibold text-[24px] leading-[100%] tracking-normal'>Office Hours <br />
                    <span className='font-normal text-[18px] leading-[27px] tracking-normal'>09:00 AM - 06:00 PM <br /> Monday - Saturday</span></li>
                </div>
            </ul>
        </div>
        {/* right section */}
        <div className='p-10 font-[Manrope] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] border-1 border-[#E3E3E3] rounded-[8px]'>
            <div className='pb-2.5'>
                <p className='pb-2.5 font-bold text-[18px] leading-[100%] tracking-normal text-[#1C4ED9]'>Send us message</p>
                <h2 className='font-semibold text-[48px] leading-[100%] tracking-normal text-[#292929]'>Need Help? Message.</h2>
            </div>
            <form action="" className='py-5'>
                {/* username */}
                <div className='flex justify-between flex-row gap-5 pb-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>First Name</label>
                        <input type="text" placeholder='Enter your first name' className='border-1 p-4 border-[#DEE0E4]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>Last Name</label>
                        <input type="text" placeholder='Enter your last name' className='border-1 p-4 border-[#DEE0E4]'/>
                    </div>
                </div>
                {/* phone number + Email */}
                <div className='flex justify-between flex-row gap-5 pb-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>Phone Number</label>
                        <input type="text" placeholder='Enter your phone number' className='border-1 p-4 border-[#DEE0E4]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>Email</label>
                        <input type="text" placeholder='Enter your email' className='border-1 p-4 border-[#DEE0E4]'/>
                    </div>
                </div>
                {/* subject */}
                <div className='flex flex-col gap-2 pb-4'>
                    <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>Subject</label>
                    <input type="text" placeholder='Enter subject' className='border-1 p-4 border-[#DEE0E4]'/>
                </div>
                {/* address */}
                <div className='flex flex-col gap-2 pb-4'>
                    <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>Address</label>
                    <input type="text" placeholder='Enter your address' className='border-1 p-4 border-[#DEE0E4]'/>
                </div>
                {/* message */}
                <div className='flex flex-col gap-2 pb-4'>
                    <label htmlFor="" className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>Message</label>
                    <input type="text" placeholder='Type message here..' className='border-1 p-4 border-[#DEE0E4]'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
