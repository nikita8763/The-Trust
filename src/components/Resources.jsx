import React from 'react'

const Resources = () => {
  return (
    <section className='relative bg-gray-100 py-12' id='resources'>
        <h1 className='font-inter mt-0 pt-0 text-center text-6xl font-medium text-blue-600'>Resources</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16'>
            <img className='w-80 h-96 mix-blend-multiply' src='https://st4.depositphotos.com/1028880/38136/i/450/depositphotos_381368496-stock-photo-blue-sticky-note-isolated-white.jpg' alt='' />
            <img className='w-80 h-96 mix-blend-multiply' src='https://st4.depositphotos.com/1028880/38136/i/450/depositphotos_381368496-stock-photo-blue-sticky-note-isolated-white.jpg' alt='' />
            <img className='w-80 h-96 mix-blend-multiply' src='https://st4.depositphotos.com/1028880/38136/i/450/depositphotos_381368496-stock-photo-blue-sticky-note-isolated-white.jpg' alt='' />
            <img className='w-80 h-96 mix-blend-multiply' src='https://st4.depositphotos.com/1028880/38136/i/450/depositphotos_381368496-stock-photo-blue-sticky-note-isolated-white.jpg' alt='' />
            
            <div className='absolute flex flex-col lg:flex-row justify-between pt-36 font-mono ml-24 text-3xl'>
                <a href='https://humsafar.org/iec-material/' className='hover:text-white'>IEC <br/>Material</a>
                <a href='https://humsafar.org/humsafar-trust-reports/' className='ml-64 pl-4 hover:text-white'>Reports</a>
                <a href='https://humsafar.org/knowledge-products/' className='ml-64 hover:text-white'>Knowledge<br /> Products</a>
                <a href='https://humsafar.org/published-papers/' className='ml-56 pl-3 hover:text-white'>Published <br/>Papers</a>
            </div>
        </div>

    </section>
  )
}

export default Resources