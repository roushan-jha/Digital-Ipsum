import React from 'react'
import sm_image from '../../assets/sm_image.png'
import strip from '../../assets/strip.png'

const MainCard = () => {
  return (
    <div className='relative p-16 w-3/5'>
      <div className='bg-white text-black w-full px-10 pt-14 pb-10 relative'>
      <div>
        <h1 className='font-sora font-semibold text-xl'>Business Development in our company is growing exponentially</h1>
        <p className='font-satoshi font-light text-md pt-2 pb-8'>Business development in our company is growing exponentially with the help of digital marketing services digicomp, we are happy with this collaboration, the funds will continue in the next project</p>
        <p className='text-orange-400 w-auto'>___________</p>
      </div>
      <div className='flex justify-between'>
        <div className='self-end'>
          <h1 className='font-sora font-medium text-lg pb-1'>Skibidi Totoro</h1>
          <p className='font-satoshi font-light'>CEO Kobra Company</p>
        </div>
        <div>
          <img src={sm_image} alt="Image" />
        </div>
      </div>
    </div>
    <div className='absolute top-0 left-0'>
        <img src={strip} alt="Strip" />
      </div>
    </div>
  )
}

export default MainCard