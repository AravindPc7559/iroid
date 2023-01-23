import React from 'react'

const SlideThree = () => {
  return (
    <div className='w-full h-auto py-5'>
       <div className='grid grid-cols-1 md:grid-cols-2'>
             {/* First Card */}
            <div className='w-full min-h-[640px] bg-transparent'>
               <div className='w-full h-[400px] rounded-tr-[160px] overflow-hidden relative' style={{
                background:'url("https://images.pexels.com/photos/4078023/pexels-photo-4078023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                objectFit:'cover'
               }}>
                <div className='absolute text-white top-4 md:top-[20%] left-[5%] opacity-100 px-6 overflow-auto z-20'>
                <h1 className='font-extrabold text-2xl'>Our Vision</h1>
                <p className=' text-sm md:text-md font-medium leading-7 mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore delectus esse rem obcaecati explicabo distinctio quia cupiditate voluptatum soluta a harum amet facere vero modi dignissimos odit mollitia accusamus, doloribus ea. Dicta autem sit vitae incidunt atque et ex. Laudantium, reiciendis cupiditate quam aperiam facilis maiores dicta ut sed nulla esse magnam? Officiis, nulla quas aut suscipit ad minima ex.</p>
                </div>
                <div className='w-full h-full bg-blue-400 opacity-60 rounded-bl-[100px] z-10' />
               </div>
               {/* Second Card */}
               <div className='w-full h-[200px] mt-5 overflow-hidden'>
                <img src="https://images.pexels.com/photos/12812922/pexels-photo-12812922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='object-contain' alt="" />
               </div>
            </div>
            {/* Third Card */}
            <div className='md:max-w-[500px] min-h-auto md:ml-32  bg-transparent'>
            <div className='w-full min-h-[620px] overflow-hidden relative' style={{
                background:'url("https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1600")',
                objectFit:'cover'
            }}>
                 <div className='absolute text-white top-[10%] md:top-[20%] left-[5%] opacity-100 px-6 overflow-auto z-20'>
                <h1 className='font-extrabold text-2xl'>Our Mission</h1>
                <p className=' text-sm md:text-md font-medium leading-7 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <ul className='list-disc'>
                    <li className='mt-3 leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloremque voluptatum ratione nulla optio.</li>
                    <li className='mt-3 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium neque veniam quae commodi sint sapiente magni atque explicabo cupiditatev sapiente magni atque explicabo cupiditate.</li>
                    <li className='mt-3 leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloremque voluptatum ratione nulla optio.</li>
                </ul>
                </div>
                <div className='w-full min-h-[620px] bg-red-900 opacity-60 z-10 ' />
               </div>
            </div>
       </div>
    </div>
  )
}

export default SlideThree