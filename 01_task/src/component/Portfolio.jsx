import React from 'react'
import Card from './Card'
import image_4 from '../assets/Image 4.png'
import image_8 from '../assets/Image 8.png'
import image_10 from '../assets/Image 10.png'

const Portfolio = () => {
  return (
    <div className='pl-10 pb-10'>
      <div className='text-center'>
            <h1 className='font-medium text-3xl pb-4'>Our Works</h1>
            <p className='font-light text-md'>Far far away, behind the word mountains, far from the countries</p>
            <p className='font-light text-md'>Vokalia and Consonantia, there lives the blind texts.</p>
        </div>
        <div className='flex gap-8 pl-10 py-10 overflow-hidden'>
          <Card image={image_4} h2="SOCIAL MEDIA" h1="Neo Group" />
          <Card image={image_8} h2="BRANDING" h1="Thank You Card" />
          <Card image={image_10} h2="BRANDING" h1="Madcap Coffee" />
          {/* <Card image={image_10} h2="BRANDING" h1="Madcap Coffee" /> */}
        </div>
    </div>
  )
}

export default Portfolio