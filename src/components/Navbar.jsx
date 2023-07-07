import React from 'react'
import LoginPage from './LoginPage';

const Navbar = () => {

  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-gray-250">
        <h2 className="text-4xl sm:text-4xl lg:text-4xl px-2"><span className='font-bold text-blue-600'>T</span>rus<span className='font-bold text-blue-600'>t</span></h2>
        <nav class="md:ml-auto flex flex-wrap items-center text-lg justify-space font-semibold space-x-7 > * + *">
          <a  href="/" class="mr-5 hover:text-blue-600 cursor-pointer">Home</a>
          <a  href="#projects" class="mr-5 hover:text-blue-600 cursor-pointer">Project</a>
          <a href='#resources' class="mr-5 hover:text-blue-600 cursor-pointer">Resources</a>
          <a href='#opportunity' class="mr-5 hover:text-blue-600 cursor-pointer">Opportunity</a>
          <a href='#aboutus' class="mr-5 hover:text-blue-600 cursor-pointer">About Us</a>
          <a href='#contactus' class="mr-5 hover:text-blue-600 cursor-pointer">Contact Us</a>
          <a class="mr-5 hover:text-blue-600 cursor-pointer">Sign Up</a>
        </nav>
    </div>
  )
}

export default Navbar;