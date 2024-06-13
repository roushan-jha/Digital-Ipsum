import React from 'react'
import image from '../../assets/image.png'
import Button from './Button'

const SimpleCard = ({heading, info}) => {
  return (
    <div className='w-[360px] h-[580px] bg-white'>
        <div className='h-3/5 relative'>
            <img className='rounded-br-3xl' src={image} alt="Image" />
            <div className='w-auto absolute right-2 bottom-8'>
                <Button text="Read more" bcolor="white" tcolor="black" />
            </div>
        </div>
        <div className='h-2/5'>
            <h1 className='font-sora font-semibold text-2xl py-4'>{heading}</h1>
            <p className='font-satoshi font-light pb-4'>{info}</p>
        </div>
    </div>
  )
}

export default SimpleCard