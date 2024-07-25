import React from 'react'
import CountryCard from './CountryCard'

const Countries = () => {
  return (
    <div className=' p-32 font-primary'>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>Browse Property by Country</h1>
                    <p className='opacity-60'>Quis in porttitor purus sed</p>
                </div>
                <p className='font-medium text-lg'>See All Country</p>
            </div>
            <div className='w-full flex gap-6'>
                <CountryCard country={"United States"} />
                <CountryCard country={"Spain"} />
                <CountryCard country={"United Kingdom"} />
                <CountryCard country={"Australia"} />
                <CountryCard country={"France"} />
            </div>
        </div>
    </div>
  )
}

export default Countries