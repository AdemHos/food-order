import Logo from "../ui/Logo"
import { FaRegUser,FaShoppingCart,FaSearch } from "react-icons/fa";
import Navbar from "../ui/Navbar";
import { useState } from "react";
import Search from "../ui/Search";



const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false)
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto flex justify-between text-white h-full">
       
        <Logo/>
       

      
         <Navbar/>
      
      
       <div className='flex gap-x-4 items-center '>
      <a href="#" className='px-[5px] py-[20px] hover:text-primary'>
        <FaRegUser/>
      </a>
      <a href="" className='px-[5px] py-[20px] hover:text-primary'>
        <FaShoppingCart/>
      </a>
      <a href="#" 
      onClick={() =>setIsSearchModal(true)} className='px-[5px] py-[20px] hover:text-primary'>
        <FaSearch/>
      </a>
      <a href="
       
      ">
        <button className='px-[30px] py-[8px]  bg-primary text-white hover:bg-orange-600 rounded-2xl'>Order Now</button>
      </a>
    </div>
      </div>
      {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
      )} 
    </div>
  )
}

export default Header
