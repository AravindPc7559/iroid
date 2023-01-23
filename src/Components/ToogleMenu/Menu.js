import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const Menu = () => {
  return (
    <div className='w-full h-auto py-10 bg-gray-100 shadow-lg container mx-auto absolute'>
            <div className='px-5'>
                <ul className='flex-col text-xl '>
                    <li className='cursor-pointer'>Home</li>
                    <li className='flex cursor-pointer mt-4'><h1>Boys</h1> <AiFillCaretDown className='mt-1' /></li>
                    <li className='flex cursor-pointer mt-4'><h1>Womens</h1> <AiFillCaretDown className='mt-1' /></li>
                    <li className='flex cursor-pointer mt-4'><h1>Girls</h1> <AiFillCaretDown  className='mt-1'/></li>
                    <li className='flex cursor-pointer mt-4'><h1>Boys</h1> <AiFillCaretDown  className='mt-1'/></li>
                </ul>
            </div>
    </div>
  )
}

export default Menu