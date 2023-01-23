import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 mt-5'>
        <div className='md:flex py-10 border-b-2 '>
            <div className='md:w-[30%] flex justify-center md:justify-end px-6 py-10 md:py-24 border-r-4 border-gray-400'>
               <div className=''>
               <img src="/assets/image/Footer/Lorry.png" alt="" className=' md:w-[200px]' />
                <p className='mt-2 text-lg text-white text-center'>Fast Delivery In 3-5 Days</p>
               </div>
            </div>
            <div className='md:w-[70%] md:flex justify-between px-10 py-10'>
                <div className='mb-10 md:mb-0'>
                    <h1 className='text-xl font-medium text-white'>Quick Link</h1>
                    <ul className='mt-5 md:mt-10 text-white '>
                        <li>Gift Card</li>
                        <li className='mt-4'>LookBook 2021</li>
                        <li className='mt-4'>Privacy Policy</li>
                        <li className='mt-4'>Shipping And Return</li>
                    </ul>
                </div>

                <div className='mt-20 md:mt-0'>
                    <h1 className='text-xl font-medium text-white'>Company</h1>
                    <ul className='mt-5 md:mt-10 text-white'>
                        <li >About Us</li>
                        <li className='mt-4'>Contact Us</li>
                        <li className='mt-4'>Pricing Plan</li>
                        <li className='mt-4'>Knowledge Base</li>

                    </ul>
                </div>

                <div className='mt-20 md:mt-0'>
                    <h1 className='text-xl font-medium text-white'>NewsLetter</h1>
                    <p className='text-white mt-5 md:mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam?</p>
                    <div className=' mt-5 flex'>
                    <input type="text" className='w-[70%] h-[50px] px-2' placeholder='Enter Your Email Address...' />
                    <button className='w-[30%] h-[50px] px-2 border-1 bg-gray-500'>Subscribe</button>
                    </div>
                </div>
              
            </div>
        </div>
        <div className='px-10 py-5'>
            <p className='text-center text-gray-200'>@2021 Alba. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer