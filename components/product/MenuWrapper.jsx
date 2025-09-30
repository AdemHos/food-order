import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col items-center w-full mb-16'>
        <Title addClass={'text-[40px]'}>Our Menu</Title>
      {/* Buttons */}
      <div className='mt-10'>
        <button className='bg-secondary px-6 py-2 rounded-3xl text-white cursor-pointer'>All</button>
        <button className='px-6 py-2 rounded-3xl cursor-pointer'>Burger</button>
        <button className=' px-6 py-2 rounded-3xl cursor-pointer '>Pizza</button>
        <button className=' px-6 py-2 rounded-3xl cursor-pointer'>Steak</button>
        <button className=' px-6 py-2 rounded-3xl cursor-pointer'>Deserts</button>
      </div>
      </div>
      {/* Menu Items */}
      <div className='mt-8 grid grid-cols-3 gap-4'>
        <MenuItem imgSrc="/images/burger.png" prodName="Special Burger" price="$24"/>
        <MenuItem imgSrc="/images/pizza1.png" prodName="Mix Pizza" price="$22"/>
        <MenuItem imgSrc="/images/cake.png" prodName="Sweet Dream" price="$14"/>
        <MenuItem imgSrc="/images/drink1.png" prodName="Pink Cocktail" price="$10"/>
        <MenuItem imgSrc="/images/drink2.png" prodName="Red Fruit Cocktail" price="$10"/>

      </div>
    </div>
  )
}

export default MenuWrapper
