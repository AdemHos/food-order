import Title from "../ui/Title"


const Orders = () => {
  return (
    
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Orders</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border border-gray-700 hover:bg-primary ">
              
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                63049e92...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
               Adem Hos
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Preparing...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-4 py-2 bg-green-600 text-white rounded-xl cursor-pointer hover:opacity-85 transition-all">Next Stage</button>
              </td>
              
            </tr>
            <tr className="transition-all bg-secondary border border-gray-700 hover:bg-primary ">
              
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                63049e92...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
               Adem Hos
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Preparing...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-4 py-2 bg-green-600 text-white rounded-xl cursor-pointer hover:opacity-85 transition-all">Next Stage</button>
              </td>
              
            </tr>
            <tr className="transition-all bg-secondary border border-gray-700 hover:bg-primary ">
              
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                63049e92...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
               Adem Hos
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Preparing...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-4 py-2 bg-green-600 text-white rounded-xl cursor-pointer hover:opacity-85 transition-all">Next Stage</button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>  
    
  )
}

export default Orders
