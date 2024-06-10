import React from 'react'

const Card = ({image, h2, h1}) => {
  return (
    <div className='w-80 h-auto rounded-md shadow-lg'>
      <div className='w-full'>
        <img src={image} alt="Image" className='h-60 w-full object-cover' />
      </div>
      <div className='py-6 pl-6 pr-16'>
        <h2 className='text-blue-500 text-sm'>{h2}</h2>
        <h1 className='font-medium text-2xl'>{h1}</h1>
        <p className='mt-5 text-sm font-light leading-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        <button className='bg-blue-600 text-white text-sm px-4 py-2 shadow-md shadow-blue-400 rounded-md mt-4 hover:bg-blue-400'>View Case Study</button>
      </div>
    </div>
  )
}

export default Card