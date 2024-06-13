import React from 'react'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div className='w-full flex justify-between px-20 py-10'>
      <div className='w-3/5 flex gap-1 justify-start items-center'>
        <img src={logo} alt="Logo" className='w-[28px]' />
        <h1 className='font-sora font-semibold text-lg'>PIXELZEN</h1>
      </div>
      <div className='w-2/5 flex gap-8 justify-center items-center font-satoshi font-normal'>
        <a href="./">Home</a>
        <a href="./">Services</a>
        <a href="./">Features</a>
        <a href="./">About Us</a>
        <a href="./" className='border-2 border-slate-200 px-3 py-2 rounded-3xl'>Contact Us</a>
      </div>
    </div>
  )
}

export default NavBar;