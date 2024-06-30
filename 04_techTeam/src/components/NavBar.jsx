import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='flex justify-between py-12 poppins-light px-32'>
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <div className='flex gap-12'>
            <a href="./">Home</a>
            <a href="./">Services</a>
            <a href="./">Client</a>
            <a href="./">Contact</a>
            <a href="./">About Us</a>
        </div>
        <div>
            <button className='py-2 px-6 bg-orange-500 text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default NavBar