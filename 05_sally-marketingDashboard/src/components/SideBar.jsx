import React, { useState } from 'react'
import Logo from './svg/Logo'
import Dashboard from './svg/Dashboard'
import Report from './svg/Report'
import Client from './svg/Client'
import Privacy from './svg/Privacy'
import Document from './svg/Document'
import Saved from './svg/Saved'
import Arrange from './svg/Arrange'
import Account from './svg/Account'


const SideBar = () => {
  return (
    <div className='w-1/5 text-white'>
      <div className='flex justify-center items-center gap-2 mt-6'>
        <Logo />
        <h1 className='font-semibold text-3xl'>Sally</h1>
      </div>
      <div className='flex flex-col gap-4 mt-8 text-sm'>
        <h4 className='px-6'>Main</h4>
        <div className='flex flex-col'>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Dashboard />
            <h5 className='cursor-pointer'>Dashboard</h5>
          </div>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Report />
            <h5 className='cursor-pointer'>Report</h5>
          </div>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Client />
            <h5 className='cursor-pointer'>My Client</h5>
          </div>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Document />
            <h5 className='cursor-pointer'>Document</h5>
          </div>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Privacy />
            <h5 className='cursor-pointer'>Privacy</h5>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-12 text-sm'>
        <h4 className='px-6'>Secondary</h4>
        <div className='flex flex-col'>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Saved />
            <h5 className='cursor-pointer'>Saved</h5>
          </div>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Arrange />
            <h5 className='cursor-pointer'>Arrange</h5>
          </div>
          <div className='flex justify-start gap-4 py-3 px-6'>
            <Account />
            <h5 className='cursor-pointer'>Account</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar