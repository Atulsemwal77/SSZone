import { CiStar } from 'react-icons/ci'
import image from '../assets/image/coursecard.jpg'
import { FaStar } from 'react-icons/fa'
import { MdCurrencyRupee } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

function CartItems() {
  return (
    <div className='flex sm:flex-row flex-col font-[Manrope] gap-6'>
        {/* left section */}
      <div className=''>
        <div className='w-[824px] h-[136px]  border-1 border-[#E3E3E3] rounded-[4px] p-5 flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-5'>
            <div className='p-1'>
                <img src={image} alt="" className='w-[127px] h-[80px] rounded-[4px]'/>
            </div>
            <div>
                <h3 className='font-semibold text-[20px] leading-[100%] tracking-normal pb-1 text-[#292929]'>Full Stack Web Development</h3>
                <p className='font-normal text-[14px] leading-[100%] tracking-normal text-[#6F6F6F] pb-2'>By Dylan Meringue</p>
                <div className='flex items-center gap-1 pb-2'>
                    <p className='font-bold text-[14px] leading-[100%] tracking-normal text-[#C08B00]'>4.5 </p>
                    <FaStar className='text-[#FABF23]'/>
                    <FaStar className='text-[#FABF23]'/>
                    <FaStar className='text-[#FABF23]'/>
                    <FaStar className='text-[#FABF23]'/>
                    <FaStar className='text-[#FABF23]'/>
                </div>
                <p className='font-medium text-[14px] leading-[100%] tracking-normal text-[#6F6F6F]'>
                    <span className='pr-3'>*10.5 total hours</span>
                    <span className='pr-3'>*30 Lectures</span>
                    <span className='pr-3'>*All Levels</span>
                </p>
            </div>
        </div>
        <div className='flex items-center'>
            <MdCurrencyRupee className='text-[#232323] text-[20px]'/>
            <p className='font-normal text-[18px] leading-[100%] tracking-normal'>4,999</p>
        </div>
        <p className='font-medium text-[14px] leading-[100%] tracking-normal text-[#296AD2]'>Remove</p>
      </div>
      </div>
      {/* right section */}
      <div className='w-[400px]'>
        {/* top section */}
        <div className='pb-6'>
            <div className='p-6 border-1 rounded-[4px] border-[#E3E3E3]'>
                <h3 className='font-bold text-[20px] leading-[100%] tracking-normal text-[#1A1A1A] pb-5 p-3'>Order Summary</h3>
                <div className='flex justify-between flex-row p-3 pb-5'>
                    <p className='font-semibold text-[16px] leading-[100%] tracking-normal text-[#1A1A1A] uppercase'>Subtotal</p>
                    <div className='flex items-center'>
                        <MdCurrencyRupee className='text-[#232323] text-[20px]'/>
                        <p className='font-semibold text-[16px] leading-[100%] tracking-normal text-[#232323]'>9,998</p>
                    </div>
                </div>
                <div className='flex justify-between flex-row p-3 pb-5'>
                    <p className='font-normal text-[16px] leading-[100%] tracking-normal text-[#1A1A1A] uppercase'>total promo</p>
                    <div className='flex items-center'>
                        <MdCurrencyRupee className='text-[#232323] text-[20px]'/>
                        <p className='font-normal text-[16px] leading-[100%] tracking-normal text-[#232323]'>500</p>
                    </div>
                </div>
                <div className='flex justify-between flex-row p-3 border-b-1 mb-5'>
                    <p className='font-bold text-[18px] leading-[100%] tracking-normal text-[#1A1A1A] uppercase'>total</p>
                    <div className='flex items-center'>
                        <MdCurrencyRupee className='text-[#232323] text-[20px]'/>
                        <p className='font-bold text-[16px] leading-[100%] tracking-normal text-[#232323]'>9498</p>
                    </div>
                </div>
                <button className='py-3 px-6 rounded-[4px] bg-[#296AD2] font-medium text-[16px] leading-[100%] tracking-normal w-full uppercase text-[#FFFFFF]'>Checkout</button>
            </div>
        </div>
        {/* bottom section */}
        <div className='p-6 border-1 rounded-[4px] border-[#E3E3E3]'>
            <h3 className='font-bold text-[20px] leading-[100%] tracking-normal text-[#1A1A1A] pb-5 p-3'>Promotions</h3>
            <div className='border-1 border-dashed p-3 border-[#296AD2]'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-[16px] leading-[100%] tracking-normal'>25BBUYVNJHV4774<span className='font-normal text-[#6F6F6F]'> is applied
                    Udemy coupon</span></p>
                    <p className='bg-[#EBF5FF] p-2'><IoMdClose className='text-[#296AD2] text-[24px]'/></p>
                </div>
            </div>
            <div className='pt-5'>
                <div className='flex justify-between items-center gap-4'>
                    <input type="text" placeholder='Enter Coupon' className='p-2 border-1 border-[#DEE0E4]'/>
                    <button className='py-3 px-6 bg-[#296AD2] text-[#ffffff] rounded-[4px] font-medium text-[16px] leading-[100%] tracking-normal'>Apply</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
