import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const MenuItem = () => {
  return (
    <div className='bg-secondary rounded-3xl mb-10'>
     <div className='w-full bg-white grid place-content-center h-[210px] rounded-tl-2xl
     rounded-tr-2xl rounded-bl-[46px]'>
        <div className='relative w-36 h-36 hover:scale-110 transition-all  '>
        <Image src={'/images/burger.png'} alt='' fill style={{objectFit: "cover"}}/>
     </div>
     </div>
     <div className='p-[25px] text-white'>
        <h4 className='text-xl font-semibold'>Special Burger</h4>
        <p className='text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, dolores assumenda! Numquam tempore quos quia!</p>
     
     <div className='flex justify-between mt-4'>
        <span>24$</span>
        <button className='w-10 h-10 rounded-full bg-primary hover:bg-orange-600 text-white
        transition-all cursor-pointer p-2 grid place-content-center'>
            <FaShoppingCart className='text-center'/>
        </button>
     </div>
     </div>
    </div>
  )
}

export default MenuItem
