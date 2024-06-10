import React from 'react'
import ContactUs from './ContactUs'
import Decoration_2 from "../assets/Decoration2.png"

const footer = () => {
  return (
    <div className='flex flex-col bg-auto bg-no-repeat bg-bottom h-screen' style={{backgroundImage: `url(${Decoration_2})`}}>
      <ContactUs />
      <div className='flex justify-between text-sm pl-20 pr-20 pt-10 pb-10'>
        <p>&copy; Copyright 2019 Stack. All Rights Reserved.</p>
        <div className='font-light'>
            <a href="./" className='pl-9'>Privacy Policy</a>
            <a href="./" className='pl-9'>Terms and Conditions</a>
        </div>
      </div>
    </div>
  )
}

export default footer