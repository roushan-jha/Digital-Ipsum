import React from 'react'
import marketSavy from '../assets/marketSavy.png'
import overlays from '../assets/overlays.png'
import starsup from '../assets/starsup.png'

const Clients = () => {
  return (
    <div>
      <div className='fade h-[2px] bg-gradient-to-r from-transparent via-orange-400'></div>
      <div className='w-full flex justify-between items-center px-20 py-10'>
        <p className='w-[50%] font-satoshi font-normal text-lg'>Our Clients:</p>
        <div className='flex justify-between w-[50%]'>
            <img src={marketSavy} alt="Company Logo" className='opacity-50' />
            <img src={starsup} alt="Company Logo" className='opacity-50' />
            <img src={overlays} alt="Company Logo" className='opacity-50' />
            <img src={starsup} alt="Company Logo" className='opacity-50' />
        </div>
      </div>
      <div className='fade h-[2px] bg-gradient-to-r from-transparent via-orange-400'></div>
    </div>
  )
}

export default Clients