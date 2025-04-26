import React from 'react'
import CartItems from '../componant/CartItems'
import all_course from '../assets/Course_Data'
import Card from '../componant/Card'

function Cart() {
  const topThree = all_course.slice(0, 3);

  return (
    <div className='max-w-[1440px] w-full font-[Manrope]'>
        <div className='px-4 md:px-24 py-[30px] '>
            <h1 className='font-semibold text-[48px] leading-[100%] tracking-normal pb-6'>Shopping Cart</h1>
          <CartItems/>
        </div>
        <div className=''>
        <Card
              pageTitle="Explore Recommended Courses"
              pageHeading="You Might Also Like"
              pageSubHeading="Discover personalized course recommendations curated to match your interests and learning goals."
              course={topThree}
            />
        </div>
    </div>
  )
}

export default Cart
