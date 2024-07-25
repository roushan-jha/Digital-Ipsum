import React from 'react'
import Preference from './Preference'

const InquiryForm = () => {
  return (
    <div className='w-11/12 px-8 py-10 flex flex-col gap-6 bg-white rounded-xl'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-medium text-2xl'>Real Estate Inquiry Form</h1>
            <p className='opacity-40 text-xs leading-relaxed'>Please provide the following information to help us better understand your real estate needs.</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h3 className='font-medium text-lg'>Your Information</h3>
            <input className='bg-white w-full px-4 py-3 rounded-md border-[1px] border-gray-300 focus:outline-none placeholder:text-black placeholder:text-sm' type="text" placeholder='your name' />
            <input className='bg-white w-full px-4 py-3 rounded-md border-[1px] border-gray-300 focus:outline-none placeholder:text-black placeholder:text-sm' type="text" placeholder='your email' />
        </div>
        <div>
            <Preference />
        </div>
        <div>
            <button className='w-full px-6 py-3 border-[1px] bg-primary text-white border-black border-opacity-70 rounded-md'>Get Inquiry</button>
        </div>
    </div>
  )
}

export default InquiryForm