import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between p-4 px-20 w-screen h-auto'>
        <div className='flex w-1/5 justify-start items-center pl-16'>
            <img src="src\assets\Logo.png" alt="logo" className='w-14 pr-3' />
            <h1 className='font-medium text-black text-2xl'>Stack</h1>
        </div>
        <div className='flex w-4/5 pr-16 justify-end items-center text-sm' >
            <a href='./' className='pl-9'>SERVICES</a>
            <a href="./" className='pl-9'>PORTFOLIO</a>
            <a href="./" className='pl-9'>CONTACT US</a>
            <a href="./" className='pl-9'>CAREER</a>
        </div>
    </div>
  )
}

export default NavBar