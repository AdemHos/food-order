import Image from 'next/image'
import React from 'react'

const CustomersItem = ({imgSrc,name,location}) => {
  return (
    <div className='mt-5 mx-4'>
      <div className='p-6 bg-secondary text-white rounded-[5px]'>
       <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius qui quidem, officia nihil beatae.</p>
       <div className='flex flex-col mt-4'>
        <span className='font-bold text-lg'>{name}</span>
        <span className='text-[15px] font-thin'>{location}</span>
       </div>
      </div>
      <div className="relative w-[115px] h-[115px] border-4 border-primary rounded-full mt-8
      flex justify-center before:content-[''] before:w-5 before:h-5 before:bg-primary
      before:absolute before:top-0 before:-translate-y-3 before:rotate-45">
         <Image src={imgSrc} alt='Client' 
         fill 
         className='rounded-full ' 
         style={{objectFit:"contain"}} /> 
      </div>
    </div>
  )
}

export default CustomersItem
