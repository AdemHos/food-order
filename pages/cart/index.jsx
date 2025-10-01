import Image from "next/image";
import Title from "../../components/ui/Title";
import { FaCheck } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full text-sm text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 uppercase bg-secondary">
              <tr>
                <th scope="col" className="py-3 px-6">PRODUCT</th>
                <th scope="col" className="py-3 px-6">EXTRAS</th>
                <th scope="col" className="py-3 px-6">PRICE</th>
                <th scope="col" className="py-3 px-6">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary hover:bg-primary hover:text-white transition-all">
                <td className="flex items-center justify-center gap-x-6 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <Image src="/images/pizza1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>mayonez, acı sos, ketçap,</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
              </tr>
              <tr className="bg-secondary hover:bg-primary hover:text-white transition-all">
                <td className="flex items-center justify-center gap-x-6 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <Image src="/images/pizza1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>mayonez, acı sos, ketçap,</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
              </tr>
              <tr className="bg-secondary hover:bg-primary hover:text-white transition-all">
                <td className="flex items-center justify-center gap-x-6 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <Image src="/images/pizza1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>mayonez, acı sos, ketçap,</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] md:w-auto w-full flex flex-col justify-center text-white p-12">
          <Title addClass="text-[40px]">CART TOTAL</Title>

          <div className="mt-6">
            <b>Subtotal: </b>$20 <br />
            <b className=" inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$20
          </div>

          <div className="flex">
            <button className=" flex items-center gap-x-4 px-[30px] py-[8px]  bg-green-500 text-white hover:bg-green-600 mt-4 transition-all cursor-pointer rounded-2xl">
            <FaCheck size={28}/>
            <span className="text-lg font-bold">Checkout Now</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart