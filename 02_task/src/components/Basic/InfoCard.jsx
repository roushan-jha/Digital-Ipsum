import React from 'react'
import fadeArrow from "../../assets/fade_arrow.png"
import Button from './Button'

const InfoCard = ({heading, info}) => {
  return (
    <div className='bg-white w-[500px] h-auto px-7 py-10 rounded'>
        <div>
            <img src={fadeArrow} alt="Fade Arrow Image" />
        </div>
        <div>
            <h1 className='font-sora font-semibold text-xl py-4'>{heading}</h1>
            <p className='font-satoshi font-light pb-6'>{info}</p>
        </div>
        <div>
            <Button text="Know more" bcolor="white" tcolor="black" />
        </div>
    </div>
  )
}

export default InfoCard