import React from 'react'
import image_placeholder_b from '../assets/placeholder-b.png'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='p-32 bg-slate-200 font-primary'>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>Here What They Say</h1>
                    <p className='opacity-60'>Quis in porttitor purus sed</p>
                </div>
                <p className='font-medium text-lg'>See All Testimonials</p>
            </div>
            <div className='flex justify-between gap-6'>
                <div className='w-2/5 h-auto'>
                    <img className='h-full' src={image_placeholder_b} alt="Image Placeholder" />
                </div>
                <div className='w-3/5 flex flex-col gap-6'>
                    <div className='flex gap-6'>
                        <TestimonialCard />
                        <TestimonialCard />
                    </div>
                    <div className='flex gap-6'>
                        <TestimonialCard />
                        <TestimonialCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials