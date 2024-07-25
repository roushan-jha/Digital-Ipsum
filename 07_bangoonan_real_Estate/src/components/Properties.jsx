import React from 'react'
import PropertyCard from './PropertyCard'

const Properties = () => {
  return (
    <div className=' p-32 font-primary'>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>Explore Our Latest Properties</h1>
                    <p className='opacity-60'>Quis in porttitor purus sed</p>
                </div>
                <p className='font-medium text-lg'>See All Property</p>
            </div>
            <div className='w-full flex flex-col gap-6'>
                    <div className='flex gap-6'>
                        <PropertyCard tag="sale" />
                        <PropertyCard tag="rent" />
                        <PropertyCard tag="sale" />
                        <PropertyCard tag="rent" />
                    </div>
                    <div className='flex gap-6'>
                        <PropertyCard tag="sale" />
                        <PropertyCard tag="rent" />
                        <PropertyCard tag="sale" />
                        <PropertyCard tag="rent" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Properties