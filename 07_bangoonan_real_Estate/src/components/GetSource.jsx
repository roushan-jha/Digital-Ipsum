import React from 'react'
import video_icon from '../assets/Play Icon.png'

const GetSource = () => {
  return (
    <div className='p-32 font-primary'>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='w-3/5 text-3xl font-semibold'>Take a Look Inside Our Newest Property</h1>
                </div>
                <p className='font-medium text-lg'>More on Youtube</p>
            </div>
            <div>
                <div className='w-full h-[70vh] flex justify-center items-center bg-gray-300 rounded-t-xl relative'>
                    <div className='absolute top-[30vh]'>
                        <img src={video_icon} alt="Video Icon" />
                    </div>
                </div>
                <div className='font-primary flex justify-between p-12 bg-primary rounded-b-xl'>
                    <h3 className='w-1/2 font-medium text-3xl text-white'>Get Attractive Property Offers Into Your Inbox</h3>
                    <div className='w-1/2 flex gap-6 justify-end items-center'>
                        <input className='px-4 py-3 rounded-md focus:outline-none' type="text" placeholder='your email' />
                        <button className='flex gap-3 items-center px-6 py-3 font-medium bg-secondary rounded-md'>
                            Get Offer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetSource