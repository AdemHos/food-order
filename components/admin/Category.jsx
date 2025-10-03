import React, { useState } from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'

const Category = () => {
    const [inputText,setInputText] = useState("")
    const [categories,setCategories] = useState([""])
  return (
    <div className='lg:p-8 flex-1 mt-5 lg:mt-0'>
       <Title addClass={'text-[40px]'}>Categories</Title>
       <div className='mt-6'>
        <div className='flex gap-x-4 flex-1 items-center'>
            <Input 
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            placeholder="Add a new Category"/>
           
            <button onClick={() =>{
                setCategories([...categories,inputText])
                setInputText("")
            }} className="px-[20px] py-[8px]  bg-primary text-white hover:bg-orange-600 transition-all cursor-pointer rounded-2xl">
              Add
            </button>
        </div>
        <div className='mt-10'>
           {categories.map((category,index) =>(
             <div key={index} className='flex justify-between mt-4 '>
                <b className='text-xl'>{category}</b>
                <button onClick={() =>
                    setCategories(categories.filter((cat) =>
                    cat !== category ))
                } className='px-[20px] py-[8px]  bg-red-600 text-white hover:opacity-90 transition-all cursor-pointer rounded-2xl'>Delete</button>
            </div>
           ))}
        </div>
       </div>
    </div>
  )
}

export default Category
