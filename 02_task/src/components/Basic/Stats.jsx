import React from 'react'
import Button from './Button'

const Stats = ({heading, info}) => {
  return (
    <div className='w-1/4 bg-white rounded px-8 py-10'>
        <h1 className='font-sora font-semibold text-xl py-4'>{heading}</h1>
        <p className='font-satoshi font-light pb-6'>{info}</p>
        <Button text="Know more" bcolor="white" tcolor="black" />
    </div>
  )
}

export default Stats