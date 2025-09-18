import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 after:content-['] after:w-screen after:h-screen
    after:bg-black after:opacity-50 after:absolute after:top-0 after:left-0 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="grid place-content-center w-full h-full">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white p-10 border-2 rounded-2xl">
            <Title addClass={"text-[30px] text-center"}>Search</Title>
            <input
              type="text"
              placeholder="Search"
              className="border border-primary w-full p-2 rounded-xl my-10"
            />
            
              <ul>
                <li className="flex justify-between items-center p-2 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src={"/images/burger.png"}
                      alt="Burger"
                      width={52}
                      height={52}
                    />
                  </div>
                  <span className="font-bold">Spicy Burger</span>
                  <span className="font-bold">20$</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src={"/images/pizza.png"}
                      alt="Pizza"
                      width={52}
                      height={52}
                    />
                  </div>
                  <span className="font-bold">Special Pizza</span>
                  <span className="font-bold">22$</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src={"/images/steak.png"}
                      alt="Steak"
                      width={52}
                      height={52}
                    />
                  </div>
                  <span className="font-bold">Steak BBQ</span>
                  <span className="font-bold">30$</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src={"/images/cake.png"}
                      alt="Cake"
                      width={52}
                      height={52}
                    />
                  </div>
                  <span className="font-bold">White Cake</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
              <button onClick={() => setIsSearchModal(false)} className="absolute top-3 right-3 ">
                <IoClose size={24} className="hover:text-primary transition-all"/>
              </button>
            
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
