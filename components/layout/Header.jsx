import Logo from "../ui/Logo";
import { FaRegUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Search from "../ui/Search";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className={`h-[5.5rem] relative z-50 ${router.asPath === '/' ? "bg-transparent" : "bg-secondary"}`}>
      <div className="container mx-auto flex justify-between items-center text-white h-full">
        <Logo />

        <nav
          className={` sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal ? "!grid place-content-center" : "hidden"
          }`}
        >
          <ul className="flex gap-4 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[20px] uppercase hover:text-primary font-mono font-bold">
              <a href="#">Home</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary font-mono font-bold">
              <a href="#">Menu</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary font-mono font-bold">
              <a href="#">About</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary font-mono font-bold">
              <a href="#">Book Table</a>
            </li>
          </ul>
          {isMenuModal && (
            <button
            onClick={() => setIsMenuModal(false)}
            className="absolute top-3 right-3 z-50 md:hidden inline-block "
          >
            <IoClose size={24} className="hover:text-primary transition-all" />
          </button>
          )}
        </nav>

        <div className="flex gap-x-4 items-center ">
          <a href="#" className="px-[5px] py-[20px] hover:text-primary">
            <FaRegUser />
          </a>
          <a href="" className="px-[5px] py-[20px] hover:text-primary">
            <FaShoppingCart />
          </a>
          <a
            href="#"
            onClick={() => setIsSearchModal(true)}
            className="px-[5px] py-[20px] hover:text-primary"
          >
            <FaSearch />
          </a>
          <a href="" className="md:inline-block hidden">
            <button className="px-[30px] py-[8px]  bg-primary text-white hover:bg-orange-600 transition-all cursor-pointer rounded-2xl">
              Order Now
            </button>
          </a>
          <button
            onClick={() => setIsMenuModal(true)}
            className="sm:hidden inline-block"
          >
            <FaBars className="text-xl hover:text-primary transition-all" />
          </button>
          
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
