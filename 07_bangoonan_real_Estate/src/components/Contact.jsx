import React from 'react'
import Phone from '../svg/Phone'

const Contact = () => {
  return (
    <div className='font-primary flex justify-between px-32 py-16 bg-primary'>
        <h3 className='w-1/2 font-semibold text-4xl text-white'>Contact Us to Start Your Real Estate Journey!</h3>
        <div className='w-1/2 flex gap-6 justify-end items-center'>
            <button className='px-4 py-3 bg-gray-700 rounded-md text-white'>Contact Us</button>
            <button className='flex gap-3 items-center px-4 py-3 bg-secondary rounded-md'>
                <Phone />
                <p className='font-medium'>648 933 4646</p>
            </button>
        </div>
    </div>
  )
}

export default Contact