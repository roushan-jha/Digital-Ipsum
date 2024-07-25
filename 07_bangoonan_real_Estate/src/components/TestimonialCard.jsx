import React from 'react'
import star from '../assets/Star.png'
import profile from '../assets/profile.png'

const TestimonialCard = () => {
  return (
    <div className='w-1/2 flex flex-col gap-4 p-8 bg-white rounded-xl shadow-md'>
        <div className='flex gap-2'>
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
        </div>
        <div className='text-sm mt-2'>My wife and I have been dealing with Bangoonan for over 18 months, and they are outstanding. Co-operative nd understanding, as well as very efficient.</div>
        <div className='flex gap-3 items-center'>
            <div>
                <img src={profile} alt="Profile" />
            </div>
            <h3 className='font-medium text-xl'>Marc Pillay</h3>
        </div>
    </div>
  )
}

export default TestimonialCard