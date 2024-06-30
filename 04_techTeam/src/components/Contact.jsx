import React from 'react'
import speedometer from '../assets/Speedometer.png'
import star from '../assets/Star.png'
import browser_icon from '../assets/Protect Browser.png'

const Contact = () => {
  return (
    <div className='pl-32 my-6 relative'>
        <div className='flex justify-between'>
            <div className='flex flex-col w-1/2 gap-6'>
                <h1 className='font-medium text-5xl leading-normal'>The advantages when you work with us</h1>
                <p className='text-lg opacity-60 pr-6'>We are a creative agency engaged in technology, we have been trusted by thousands of customers and companies, our services have been guaranteed for years</p>
                <div>
                    <button className='py-2 px-6 bg-orange-500 text-white'>Contact Us</button>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='h-1/4'></div>
                <div className='h-1/2 bg-black bg-opacity-85'></div>
                <div className='h-1/4'></div>
            </div>
        </div>
        <div className='w-[460px] flex flex-col gap-6 justify-center items-center p-3 absolute top-0 right-32'>
            <div className='flex gap-3 items-center px-6 py-4 bg-orange-500 shadow-xl'>
                <div>
                    <img src={speedometer} alt="Icon" />
                </div>
                <h1 className='font-medium text-2xl'>Fast & Ease To Communicate</h1>
            </div>
            <div className='flex gap-3 items-center px-6 py-4 bg-white shadow-xl'>
                <div>
                    <img src={star} alt="Icon" />
                </div>
                <h1 className='font-medium text-2xl'>Fast & Ease To Communicate</h1>
            </div>
            <div className='flex gap-3 items-center px-6 py-4 bg-white shadow-xl'>
                <div>
                    <img src={browser_icon} alt="Icon" />
                </div>
                <h1 className='font-medium text-2xl'>Fast & Ease To Communicate</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact