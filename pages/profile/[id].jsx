
import Account from '@/components/profile/Account'
import Order from '@/components/profile/Orders'
import Password from '@/components/profile/Password'
import axios from 'axios'
import { signOut, useSession,  } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaBiking, FaHome } from 'react-icons/fa'
import { FaKey, FaPowerOff } from 'react-icons/fa6'


const Profile = ({user}) => {
    const {data:session} = useSession()
    const {push} = useRouter()
    const handleSignOut = () => {
           if(confirm("Are you sure you want to sign out ?")) {
            signOut({redirect:false})
            push("/auth/Login")
           }
        }

        useEffect(() => {
         if(!session) {
            push("/auth/Login")
         }
        },[session,push])
     
      const [tabs,setTabs] = useState(0)
  return (
    <div className='flex px-10 min-h-[100vh_-_433px] lg:flex-row flex-col'>
     <div className='border border-gray-300 lg:w-88 w-100 flex-shrink-0 '>
        <div className='relative flex flex-col px-10 py-5 border-b border-b-gray-200'>
            <Image src={user.image ? user.image : "/images/client2.jpg"} alt='Profile' 
            width={100} 
            height={100}
            className='rounded-full'/>
            <b className='text-2xl mt-2'>{user.fullName}</b>
        </div>
        <ul>
            <li onClick={() => setTabs(0)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 0 && "bg-primary text-white"}`}>
            <FaHome/>
            <button className='ml-1 font-semibold'>Accout</button>
        </li>
        <li onClick={() =>setTabs(1)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 1 && "bg-primary text-white"}`}>
            <FaKey/>
            <button className='ml-1 font-semibold'>Password</button>
        </li>
        <li onClick={() =>setTabs(2)} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 2 && "bg-primary text-white"}`}>
            <FaBiking/>
            <button className='ml-1 font-semibold'>Orders</button>
        </li>
        <li onClick={handleSignOut} className={`border border-gray-200 hover:bg-primary hover:text-white transition-all w-full p-2 cursor-pointer flex items-center gap-x-2 
                ${tabs === 3 && "bg-primary text-white"}`}>
            <FaPowerOff/>
            <button className='ml-1 font-semibold'>Exit</button>
        </li>

        </ul>
        </div>
        {tabs === 0 && <Account user={user}/>}
        {tabs === 1 && <Password user={user}/>}
        {tabs === 2 && <Order/>}
        
    </div>
  )
}

export async function getServerSideProps({req,params}) {
   
   const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)

    return {
        props: {
            
            user: user ? user.data : null
        }
    }
}

export default Profile
