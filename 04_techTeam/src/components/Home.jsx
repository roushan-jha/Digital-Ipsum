import React from 'react'
import rect_image from '../assets/Replace Image.png'

const Home = () => {
  return (
    <div className='mt-6 poppins-light p-0'>
        <div className='pt-14 pb-20 mx-32 flex justify-between items-center'>
            <h1 className='w-3/5 font-semibold text-5xl opacity-90 leading-tight'>We are the best technology company agency</h1>
            <p className='w-2/5 text-lg opacity-60 leading-normal'>We are a full-service digital agency, specializing in modern technology,With the best service and professional people</p>
        </div>
        <div className='w-full flex'>
            <div className='w-40'>
                <div className='h-1/2'></div>
                <div className='h-1/2 bg-black opacity-85'></div>
            </div>
            <div className='w-full h-auto flex justify-around items-center bg-orange-500'>
                <img src={rect_image} alt="Placeholder" />
            </div>
            <div className='w-40'>
                <div className='h-1/2'></div>
                <div className='h-1/2 bg-black opacity-85'></div>
            </div>
        </div>
        <div className='flex justify-center gap-16 py-16 items-center text-white bg-black opacity-85'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='font-medium text-5xl'>12+</h1>
                <p className='text-lg'>Years Experience</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='font-medium text-5xl'>1,5K</h1>
                <p className='text-lg text-center'>Worldwide Client</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='font-medium text-5xl'>18+</h1>
                <p className='text-lg text-center'>Partner Company</p>
            </div>
        </div>
    </div>
  )
}

export default Home