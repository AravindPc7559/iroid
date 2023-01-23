import React from 'react'

const SlideOne = () => {
  return (
    <div className='w-full h-auto md:mt-10 py-12'>
       <div>
        <div className='mb-10'>
        <h1 className='text-center font-medium text-red-800 text-5xl'>Happiness Is Our Culture</h1>
        </div>
       <div className='flex justify-center items-center px-2 sm:px-40 mb-10'>
       <p className='text-center text-md text-gray-500 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam a corrupti et explicabo laudantium id laborum aspernatur, voluptas iure totam quas quae nemo inventore hic sunt amet architecto expedita ad deserunt quibusdam corporis, assumenda veritatis maxime nisi. Facilis id voluptates minima unde, alias quisquam, neque totam maxime molestiae dignissimos, laboriosam et! Eius necessitatibus nesciunt numquam nobis reiciendis corrupti veritatis, totam, ab est voluptate, iusto deleniti!</p>
       </div>
        <div className='mx-auto max-w-[700px]'>
            <img src="assets/image/slide/SlideOne/SlideOne.jpg" className='object-cover' alt="SlideOneImg" />
        </div>
       </div>
    </div>
  )
}

export default SlideOne