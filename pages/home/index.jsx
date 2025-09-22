import Input from '@/components/form/Input'
import MenuWrapper from '@/components/product/MenuWrapper'
import Reservation from '@/components/Reservation'
import About from '@/components/ui/About.'
import Campaigns from '@/components/ui/Campaigns'
import Carousel from '@/components/ui/Carousel'
import React from 'react'

const index = () => {
  return (
    <div className=''>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
    </div>
  )
}

export default index
