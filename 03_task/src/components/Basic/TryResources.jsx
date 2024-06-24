import React from 'react'
import Button from './Button'

const TryResources = () => {
  return (
    <div className='h-screen relative bg-gray-800'>
        <div className='w-[72%] bg-gray-400 h-screen'></div>
        <div className='bg-white w-[500px] flex flex-col justify-center items-center px-10 py-20 rounded-xl absolute top-24 right-32'>
            <center>
                <h1 className='font-semibold text-6xl pb-6'>Wanna try our resource?</h1>
            </center>
            <center className='text-lg font-light pb-10 p-4'>What a brand new resource, You can try our resource and explore how it works</center>
            <div className='flex gap-4'>
                <Button svg="checkcircle" text="View on App Store" color="blue" />
                <Button svg="chevronright" text="View on Google Play" color="blue" />
            </div>
        </div>
    </div>
  )
}

export default TryResources