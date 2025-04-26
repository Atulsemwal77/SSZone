import React from 'react'
import CartItems from '../componant/CartItems'

function Cart() {
  return (
    <div className='max-w-[1440px] w-full py-[30px] px-24 font-[Manrope]'>
        <div>
            <h1 className='font-semibold text-[48px] leading-[100%] tracking-normal pb-6'>Shopping Cart</h1>
            <p className='font-semibold text-[18px] leading-[100%] tracking-normal text-[#1C4ED9] pb-6'>2 Courses in Cart</p>
        </div>
        <CartItems/>
      
    </div>
  )
}

export default Cart
