import React from 'react'
import {TiTickOutline} from 'react-icons/ti'

const SlideTwo = () => {
    const Points = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt facere dolorum voluptas?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt facere dolorum voluptas, tempora provident veritatis eius enim eaque nulla eaque nullanulla?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt facere dolorum voluptas, tempora provident veritatis eius enim eaque nulla tempora provident veritatis eius enim eaque nulla ?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt facere dolorum voluptas, tempora provident veritatis eius enim eaque nulla?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt facere dolorum voluptas, tempora provident veritatis eius enim eaque nulla?'
    ]
  return (
    <div className='w-full h-auto md:mt-16 md:py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='flex justify-evenly'>
            <img src="assets/image/slide/SlideTwo/SlideTwo1.png" className='object-cover' alt="SlideOneImg" />
        </div>
            <div>
                <div className='text-center md:text-start md:px-10'>
                <h1 className='text-3xl leading-10 font-semibold'>What Do We To Make Our Employees Stay Happy And Satisfied</h1>
                </div>
                <div className='md:px-12 mt-6'>
                    <ul className='mt-2'>
                        {
                            Points.map((data, index) => (
                                <li className='mt-5 flex' key={index}>
                                <div className='bg-green-500  rounded-full w-fit h-fit mt-2'><TiTickOutline className='text-white'/></div>
                                <p className='ml-2 leading-7 text-sm font-medium'>{data}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
        </div>
    </div>
  )
}

export default SlideTwo