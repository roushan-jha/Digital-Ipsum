import React from 'react'
import marketSavy from '../assets/marketSavy.png'
import overlays from '../assets/overlays.png'
import starsup from '../assets/starsup.png'

const Clients = () => {
  return (
    <div className='w-full flex justify-between items-center px-20 py-10 border-y-2 border-orange-500 from-orange-500 to-transparent'>
        <p className='w-[50%] font-satoshi font-normal text-lg'>Our Clients:</p>
        <div className='flex justify-between w-[50%]'>
            <img src={marketSavy} alt="Company Logo" className='opacity-50' />
            <img src={starsup} alt="Company Logo" className='opacity-50' />
            <img src={overlays} alt="Company Logo" className='opacity-50' />
            <img src={starsup} alt="Company Logo" className='opacity-50' />
        </div>
    </div>
  )
}

export default Clients