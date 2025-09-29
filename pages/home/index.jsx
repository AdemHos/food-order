
import MenuWrapper from '@/components/product/MenuWrapper'
import Reservation from '@/components/Reservation'
import Input from '@/components/form/Input'
import About from '@/components/ui/About.'
import Campaigns from '@/components/ui/Campaigns'
import Carousel from '@/components/ui/Carousel'
import React from 'react'
import Customers from '@/components/customers/Customers'

const index = () => {
  return (
    <div className=''>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
      <Customers/>
      
    </div>
  )
}

export default index
