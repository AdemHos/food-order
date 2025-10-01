import Image from "next/image";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex  justify-center items-center flex-col p-10  min-w-[1000px]">
        <div className=" flex items-center flex-1  w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  63107f5559...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Emin Başbayan
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Adana
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $18
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-primary w-full p-10 mt-6 flex justify-between">
          <div className="flex flex-col relative">
           <Image src="/images/paid.png" alt="Payment" 
           width={40}
           height={40}
           objectFit="contain"/>
           <span>Payment</span>
          </div>
          <div className="flex flex-col relative animate-pulse">
           <Image src="/images/bake.png" alt="Preparing" 
           width={40}
           height={40}
           objectFit="contain"/>
           <span>Preparing</span>
          </div>
          <div className="flex flex-col relative">
           <Image src="/images/bike.png" alt="On the Way" 
           width={40}
           height={40}
           objectFit="contain"/>
           <span>On the Way</span>
          </div>
          <div className="flex flex-col relative">
           <Image src="/images/delivered.png" alt="Delivered" 
           width={40}
           height={40}
           objectFit="contain"/>
           <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
