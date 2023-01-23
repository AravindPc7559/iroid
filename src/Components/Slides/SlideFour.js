import React from 'react'
import Video from '../VideoCard/Video'

const SlideFour = () => {
    const datas = [
        {
            Title:'History',
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel provident libero, laborum similique doloremque sit aut iure voluptatem veniam vero quaerat! Cum, rem! Cumque iusto, amet in inventore odit unde ullam reprehenderit dolorum repellat vitae similique, autem eum natus suscipit accusamus quaerat. Ex sint excepturi odio, natus sit tempora odit quidem placeat praesentium officia corrupti tenetur nisi! Iste, itaque unde voluptatibus repellendus qui accusamus, inventore, corrupti animi incidunt voluptas aliquam rem accusantium esse labore saepe fuga sequi repellat autem odit natus expedita praesentium deleniti. Ea ab ipsa est consectetur rem vero dicta odio ex similique, fuga cum labore esse voluptatibus molestias, fugiat commodi laboriosam, nulla deleniti maiores sit. Assumenda laborum dolorum doloribus quas accusantium minus eveniet fuga suscipit, earum nulla maiores vel minima ab labore optio voluptates aut quia, deserunt similique aperiam nobis sed. Mollitia dolore atque quia doloribus. Praesentium, dolor? Deserunt tenetur corrupti, nesciunt consectetur iste quidem eos harum eveniet reiciendis nobis ullam laborum obcaecati iure, esse dolorem unde dolore? Dignissimos id similique eveniet minima, aliquam animi iusto deserunt rerum, ipsam eum facilis amet quo eos quas, aspernatur eligendi doloremque pariatur! Nobis ab culpa doloremque, assumenda dolores repudiandae asperiores optio sapiente sequi deleniti ipsa, deserunt, nihil obcaecati libero! Officia."
        },
        {
            Title:'Why The Brand Name Alba?',
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat velit a modi facilis! Sint suscipit accusantium perferendis ad similique adipisci quae molestiae ullam explicabo fugiat, minima voluptates impedit quo itaque commodi delectus, odio corporis obcaecati deleniti? Deserunt tempore voluptas facilis inventore voluptatum, molestiae laboriosam reiciendis deleniti earum numquam, tenetur cum quia illum commodi, ipsa laudantium eligendi adipisci repellat expedita cupiditate dignissimos fugiat nesciunt? Fuga repellat voluptate, molestiae rerum consectetur quibusdam obcaecati illum quas, non error aperiam? Molestias optio non suscipit maiores, expedita inventore ad eaque sed reiciendis a iure quasi nesciunt nulla eligendi voluptate, temporibus veniam. Ullam, inventore ut. Enim."
        },
        {
            Title:'Why The Brand Name Alba?',
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel provident libero, laborum similique doloremque sit aut iure voluptatem veniam vero quaerat! Cum, rem! Cumque iusto, amet in inventore odit unde ullam reprehenderit dolorum repellat vitae similique, autem eum natus suscipit accusamus quaerat. Ex sint excepturi odio, natus sit tempora odit quidem placeat praesentium officia corrupti tenetur nisi! Iste, itaque unde voluptatibus repellendus qui accusamus, inventore, corrupti animi incidunt voluptas aliquam rem accusantium esse labore saepe fuga sequi repellat autem odit natus expedita praesentium deleniti. Ea ab ipsa est consectetur rem vero dicta odio ex similique, fuga cum labore esse voluptatibus molestias, fugiat commodi laboriosam, nulla deleniti maiores sit. Assumenda laborum dolorum doloribus quas accusantium minus eveniet fuga suscipit, earum nulla maiores vel minima ab labore optio voluptates aut quia, deserunt similique aperiam nobis sed. Mollitia dolore atque quia doloribus. Praesentium, dolor? Deserunt tenetur corrupti, nesciunt consectetur iste quidem eos harum eveniet reiciendis nobis ullam laborum obcaecati iure, esse dolorem unde dolore? Dignissimos id similique eveniet minima, aliquam animi iusto deserunt rerum, ipsam eum facilis amet quo eos quas, aspernatur eligendi doloremque pariatur! Nobis ab culpa doloremque, assumenda dolores repudiandae asperiores optio sapiente sequi deleniti ipsa, deserunt, nihil obcaecati libero! Officia."
        },
    ]
  return (
    <div className='w-full h-auto md:mt-10 py-6'>
            <h1 className='text-4xl text-center font-semibold'>Corporate Info</h1>
            <div className='mt-12'>
                {
                    datas.map((obj, index) => (
                        <div className='mt-10' key={index}>
                <h1 className='font-semibold text-xl'>{obj.Title}</h1>
                <p className='text-start mt-2 leading-9 text-sm font-normal'>{obj.desc}</p>       
                        </div>
                    ))
                }
            </div>
            <div className='mt-24'>
            <Video />
            </div>
    </div>
  )
}

export default SlideFour