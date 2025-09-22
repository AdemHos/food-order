import MenuWrapper from '@/components/product/MenuWrapper'
import Campaigns from '@/components/ui/Campaigns'
import Carousel from '@/components/ui/Carousel'
import React from 'react'

const index = () => {
  return (
    <div className=''>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
    </div>
  )
}

export default index
