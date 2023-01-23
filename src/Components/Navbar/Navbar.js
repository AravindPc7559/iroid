import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full min-h-14 bg-red-800'>
        <div className='container mx-auto flex items-center justify-between text-white font-normal py-4 px-5 md:px-2'>
            <div className=' text-xs md:text-base'>
                <p>Alba Helpline: 04829 222776</p>
            </div>
            <div className='flex gap-6'>
                <button>Register</button>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar