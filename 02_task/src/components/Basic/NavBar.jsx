import React from 'react'
import logo from '../../assets/logo.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full flex justify-between px-20 py-10'>
      <div className='w-3/5 flex gap-1 justify-start items-center'>
        <img src={logo} alt="Logo" className='w-[28px]' />
        <h1 className='font-sora font-semibold text-lg'>PIXELZEN</h1>
      </div>
      <div className='w-2/5 flex gap-8 justify-center items-center font-satoshi font-normal'>
        <HashLink smooth to={"/#home"}>Home</HashLink>
        <HashLink smooth to={"/#feature"}>Features</HashLink>
        <HashLink smooth to={"/#service"}>Services</HashLink>
        <HashLink smooth to={"/#about"}>About Us</HashLink>
        <Link to={"./"} className='border-2 border-slate-200 px-3 py-2 rounded-3xl'>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default NavBar;