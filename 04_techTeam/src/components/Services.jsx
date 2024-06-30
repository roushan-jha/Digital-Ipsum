import React from 'react'
import browser_lock from '../assets/browser-lock.png'
import cloud_icon from '../assets/Protect Cloud.png'
import laptop_phone_icon from '../assets/Laptop & Phone.png'

const Services = () => {
  return (
    <div className='relative overflow-x-hidden'>
        <div className='my-32 pl-32 poppins-light flex gap-8'>
            <div className='flex flex-col w-1/3 gap-6'>
                <h1 className='font-medium text-5xl leading-normal'>What can we do for you</h1>
                <p className='text-lg opacity-60 pr-6'>We have several services for you, our services are carried out by professional people in their fields</p>
                <div>
                    <span className='text-lg cursor-pointer poppins-regular border-b-black border-b-[1px]'>See more services</span>
                </div>
            </div>
            <div className='w-2/3 flex z-20'>
                <div className='w-1/12'>

                </div>
                <div className='w-11/12'>
                    <div className='h-1/2'></div>
                    <div className='h-1/2 bg-black bg-opacity-85'></div>
                </div>
            </div>
        </div>
        <div className='mx-32 flex justify-between gap-4 absolute top-32 left-1/3 z-40'>
            <div className='bg-orange-500 w-[360px] h-[260px] p-4 flex flex-col items-center justify-center gap-4 text-white'>
                <div>
                    <img src={browser_lock} alt="Icon" />
                </div>
                <h1 className='font-medium text-2xl'>Cyber Security</h1>
                <p className='text-center text-lg'>Cyber security is the practice of defending computers, servers, mobile devices, electronic....</p>
            </div>
            <div className='w-[230px] h-[150px] p-4 flex flex-col items-center self-end mb-8 justify-center gap-4 shadow-2xl bg-white'>
                <div>
                    <img src={cloud_icon} alt="Icon" />
                </div>
                <h1 className='font-medium text-2xl'>Cloud Computing</h1>
            </div>
            <div className='w-[230px] h-[150px] p-4 flex flex-col items-center self-end mb-8 justify-center gap-4 shadow-2xl bg-white'>
                <div>
                    <img src={laptop_phone_icon} alt="Icon" />
                </div>
                <h1 className='font-medium text-2xl'>IT Service</h1>
            </div>
        </div>
    </div>
  )
}

export default Services