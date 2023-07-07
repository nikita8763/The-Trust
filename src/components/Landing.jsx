import React from 'react'

const Landing = () => {
  return (
    <div className='relative'>
        <img className='w-full h-[650px] object-cover' src='https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        <div className="flex justify-start"> 
            <h2 className='absolute leading-tight left-1/3 bottom-1/4 -translate-x-1/3 -translate-y-1/3 pl-0 text-white text-7xl'>Come home to Humsafar! Where your identity is a reason for <span className='text-blue-600 font-bold'>pride</span>, not a reason to <span className='text-blue-600 font-bold'>hide</span>.</h2>
        </div>
    </div>
  )
}

export default Landing