import Image from 'next/image'
import React from 'react'
import Title from './Title'
import { FaShoppingCart } from 'react-icons/fa'

const CampaignItems = () => {
    return (
      <div className='bg-secondary flex items-center gap-x-4 flex-1 rounded-md px-5 py-[15px]'>
        <div className='relative md:w-44 md:h-44 w-36 h-36 after:content-[""]  border-[5px] border-primary rounded-full overflow-hidden'>
        <Image src={"/images/o1.jpg"} alt='' fill style={{objectFit: "cover"}}
        className='hover:scale-105 transition-all'/>
      </div>
      <div className='text-white'>
        <Title addClass={'text-2xl'}>Tasty Saturdays</Title>
        <div>
            <span className='text-[40px]'>%20</span>
            <span className='text-sm inline-block ml-1'>Off</span>
        </div>
        <button className='flex items-center gap-2 px-[30px] py-[8px] bg-primary text-white hover:bg-orange-600 transition-all cursor-pointer rounded-2xl'>Order Now
         <FaShoppingCart size={16}/>
        </button>
      </div>
      </div>
    )
}


const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto py-28 gap-6 flex-wrap'>
      <CampaignItems/>
      <CampaignItems/>
    </div>
  )
}

export default Campaigns
