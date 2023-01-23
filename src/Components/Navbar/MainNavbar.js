import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart, AiFillCaretDown} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'

const MainNavbar = ({setToogleMenu, toogleMenu}) => {
  return (
    <div className='w-full min-h-14 bg-transparent'>
        <div className='container mx-auto flex items-center justify-between text-black font-normal py-4 px-5 md:px-2 mt-2 md:mt-5'>
            <div className='text-red-800 text-3xl font-semibold '>
                <h6>Logo</h6>
            </div>
            <div className='hidden lg:flex'>
                <ul className='flex gap-24'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='flex cursor-pointer'><h1>Boys</h1> <AiFillCaretDown className='mt-1' /></li>
                    <li className='flex cursor-pointer'><h1>Womens</h1> <AiFillCaretDown className='mt-1' /></li>
                    <li className='flex cursor-pointer'><h1>Girls</h1> <AiFillCaretDown  className='mt-1'/></li>
                    <li className='flex cursor-pointer'><h1>Boys</h1> <AiFillCaretDown  className='mt-1'/></li>
                </ul>
            </div>
            <div className='flex gap-5 text-xl'>
                <button className='cursor-pointer'><BsSearch /></button>
                <button className='cursor-pointer'><AiOutlineShoppingCart /></button>
                <div className='lg:hidden'>
                <FaBars className='text-xl cursor-auto' onClick={() => setToogleMenu(!toogleMenu)}/>
            </div>  
            </div>
            
        </div>
    </div>
  )
}

export default MainNavbar