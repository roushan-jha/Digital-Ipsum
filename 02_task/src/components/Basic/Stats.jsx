import React from 'react'
import Button from './Button'

const Stats = ({heading, info}) => {
  return (
    <div className='w-[400px] rounded px-8 py-10'>
        <h1 className='font-sora font-semibold text-4xl py-6'>{heading}</h1>
        <p className='font-satoshi font-light pb-6'>{info}</p>
        <Button text="Know more" bcolor="white" tcolor="black" />
    </div>
  )
}

export default Stats