import React from 'react'

const Card = ({image, heading, info}) => {
  return (
    <div className='bg-gray-50 p-6 flex flex-col gap-6 shadow'>
        <img className='w-[60px]' src={image} alt="icon" />
        <h1 className='font-medium text-2xl'>{heading}</h1>
        <p className='font-light text-lg'>{info}</p>
    </div>
  )
}

export default Card