import React from 'react'
import circle from '../assets/circle.png'

const Card = ({feedback, customer, rank}) => {
  return (
    <div className='w-[360px] flex flex-col gap-6 px-6 py-8 shadow-2xl bg-white'>
        <div className='text-lg font-medium opacity-70'>{feedback}</div>
        <div className='flex gap-3'>
            <div>
                <img src={circle} alt="Profile Icon" />
            </div>
            <div>
                <h1 className='font-medium text-lg'>{customer}</h1>
                <p className='opacity-60'>{rank}</p>
            </div>
        </div>
    </div>
  )
}

export default Card