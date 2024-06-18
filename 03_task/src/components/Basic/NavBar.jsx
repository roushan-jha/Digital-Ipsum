import React from 'react'
import logo from "../../assets/logo-w.png"

const NavBar = () => {
  return (
    <div className='w-full h-10 bg-gray-800 text-white flex justify-between items-center pt-12 pb-2 px-28'>
        <div className='flex justify-center gap-2 items-center'>
            <div className='w-[40px]'>
                <img src={logo} alt="Logo" />
            </div>
            <h1>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-normal'>ipsum</span>
            </h1>
        </div>
        <div className='flex gap-10 items-center text-xl'>
            <a href="./">Products</a>
            <a href="./">Blog</a>
            <a href="./">About Us</a>
            <a href="./">Contact Us</a>
            <a className='border-[1px] border-white py-2 px-4 rounded-lg' href="./">Get Started</a>
        </div>
    </div>
  )
}

export default NavBar