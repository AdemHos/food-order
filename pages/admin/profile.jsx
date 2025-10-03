
import Image from 'next/image'
import React, { useState } from 'react'

// Icons
import { FaBiking,FaLaptop  } from 'react-icons/fa'
import {  FaPowerOff } from 'react-icons/fa6'
import { IoFastFoodOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import Products from '@/components/admin/Products'
import Orders from '@/components/admin/Order'
import Category from '@/components/admin/Category';
import Footer from '@/components/admin/Footer';


const Profile = () => {
     
      const [tabs,setTabs] = useState(0)
  return (
    <div className='flex px-10 min-h-[100vh_-_433px] lg:flex-row flex-col'>
     <div className='border border-gray-300 lg:w-88 w-100 flex-shrink-0 '>
        <div className='relative flex flex-col px-10 py-5 border-b border-b-gray-200'>
            <Image src="/images/admin.png" alt='Profile' 
            width={100} 
            height={100}
            className='rounded-full'/>
            <b className='text-2xl mt-2'>Admin</b>
        </div>
        <ul>
            <li onClick={() => setTabs(0)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 0 && "bg-primary text-white"}`}>
            <IoFastFoodOutline/>
            <button className='ml-1 font-semibold'>Products</button>
        </li>
        <li onClick={() =>setTabs(1)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 1 && "bg-primary text-white"}`}>
            <FaBiking/>
            <button className='ml-1 font-semibold'>Orders</button>
        </li>
        <li onClick={() =>setTabs(2)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 2 && "bg-primary text-white"}`}>
            <BiCategory/>
            <button className='ml-1 font-semibold'>Categories</button>
        </li>
        <li onClick={() =>setTabs(3)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 3 && "bg-primary text-white"}`}>
            <FaLaptop/>
            <button className='ml-1 font-semibold'>Footer</button>
        </li>
        <li onClick={() =>setTabs(4)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 4 && "bg-primary text-white"}`}>
            <FaPowerOff/>
            <button className='ml-1 font-semibold'>Exit</button>
        </li>

        </ul>
        </div>
        {tabs === 0 && <Products/>}
        {tabs === 1 && <Orders/>}
        {tabs === 2 && <Category/>}
        {tabs === 3 && <Footer/>}
        
        
    </div>
  )
}

export default Profile
