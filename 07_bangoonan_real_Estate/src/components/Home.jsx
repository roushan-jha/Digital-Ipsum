import React from 'react'
import HomeIcon from '../svg/HomeIcon'
import circle_3 from '../assets/3-circle.png'
import InquiryForm from './InquiryForm'

const Home = () => {
  return (
    <div className='p-32 font-primary flex bg-secondary'>
        <div className='w-3/5'>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4 items-center'>
                    <HomeIcon color="#FFD278" />
                    <p className='font-medium'>Bangoonan Real Estate Agent</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-semibold text-6xl'>Find Your Dream</h1>
                    <h1 className='font-semibold text-6xl'>Home Today</h1>
                </div>
                <p className='font-medium w-11/12'>Are you ready to start the search for your dream home? Look no further than Bangoonan Real Estate.</p>
                <div className='w-2/3 flex items-center gap-3 bg-primary text-white p-6 rounded-b-xl rounded-tr-xl'>
                    <div>
                        <img src={circle_3} alt="Profiles" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-medium text-xl'>
                            <span className='text-secondary'>200+</span> Exclusive Agent
                        </h3>
                        <p className='opacity-60'>Ready to serve you</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-2/5 h-auto flex justify-center items-center'>
            <InquiryForm />
        </div>
    </div>
  )
}

export default Home