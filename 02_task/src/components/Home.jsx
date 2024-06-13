import React from 'react'
import NavBar from './Basic/NavBar'
import bg_image from '../assets/bg_img.png'
import main_image from '../assets/main_img.png'
import arrow from '../assets/Arrow.png'

const Home = () => {
    const heading = "We make your business interisting";
    const info = "Make your business more attractive and unique in the eyes of each of your customers to reach a wider market and build a better business";
  return (
    <div className='w-full h-screen bg-auto bg-no-repeat mb-20' style={{backgroundImage: `url(${bg_image})`}}>
        <NavBar />
        <div className='w-full flex justify-between items-center px-20 py-40'>
            <div className='w-[900px] py-10 pr-20 relative'>
                <h1 className='font-sora font-semibold leading-9 text-[4.2rem]'>We make your</h1>
                <h1 className='font-sora font-semibold text-[4.2rem] pb-8'>
                    <span>business</span>
                    <span className='text-orange-500'> interisting</span>
                </h1>
                <p className='font-satoshi font-light pb-6 w-[500px]'>{info}</p>
                <div className='flex justify-between items-center w-52 py-3 pr-2 pl-4 
                    rounded-full border-2 border-slate-200 bg-black text-white'>
                    <div className='text-md font-medium font-satoshi py-2 pl-2'>Getting Started</div>
                    <div className='flex justify-end'>
                        <img src={arrow} alt="Arrow Image" className='w-[40px]' />
                    </div>
                </div>
            </div>
            <div className='w-2/5 absolute right-20 top-40'>
                <img src={main_image} alt="Main Image" />
            </div>
        </div>
    </div>
  )
}

export default Home