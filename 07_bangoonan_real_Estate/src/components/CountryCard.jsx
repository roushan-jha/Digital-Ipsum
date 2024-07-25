import React from 'react'
import img_placeholder_y from '../assets/placeholder-y.png'

const CountryCard = ({country}) => {
  return (
    <div>
        <div>
            <img src={img_placeholder_y} alt="Image Placeholder" />
        </div>
        <div className='flex flex-col gap-2 py-3'>
            <h3 className='font-medium text-xl'>{country}</h3>
            <p>10 Properties</p>
        </div>
    </div>
  )
}

export default CountryCard