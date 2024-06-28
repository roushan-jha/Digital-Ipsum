import React from 'react'
import Button from './Button'
import img_placeholder from "../../assets/Image Placeholder.png"

const Home = () => {
  return (
    <div>
        <div className='w-full h-screen bg-gray-800 flex flex-col justify-end items-start text-white px-28 pb-44'>
            <h1 className='font-semibold text-6xl py-8'>Investing made easy</h1>
            <p className='text-lg font-light w-1/2 pr-4 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam dicta non laboriosam exercitationem ab numquam tempora eos cum voluptate.</p>
            <div className='flex gap-4'>
                <Button svg="checkcircle" text="View on App Store" />
                <Button svg="chevronright" text="View on Google Play" />
            </div>
        </div>
        <div className='absolute top-56 right-28'>
            <img className='w-auto' src={img_placeholder} alt="Image Placeholder" />
        </div>
    </div>
  )
}

export default Home