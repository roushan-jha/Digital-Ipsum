import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className=' p-32 font-primary'>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>Discover Our Services</h1>
                    <p className='opacity-60'>Quis in porttitor purus sed</p>
                </div>
                <p className='font-medium text-lg'>See All Services</p>
            </div>
            <div className='flex justify-between gap-8'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    </div>
  )
}

export default Services