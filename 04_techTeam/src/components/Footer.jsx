import React from 'react'
import logo_w from '../assets/logo-w.png'

const Footer = () => {
  return (
    <div className='w-full px-32 bg-black bg-opacity-85 poppins-light text-white pt-24 pb-12'>
        <div className='w-full flex justify-between'>
            <div className='w-1/2 flex flex-col gap-8'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img src={logo_w} alt="Logo" />
                    </div>
                    <h1 className='font-semibold text-3xl opacity-90'>TechTeam.</h1>
                </div>
                <p className='w-2/3 opacity-80'>We are a full-service digital agency, specializing in mordern technology, With the beast service and professional people</p>
            </div>
            <div className='w-1/2 flex justify-around'>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-medium text-lg opacity-90'>Company</h1>
                    <div className='flex flex-col opacity-80 gap-6'>
                        <p>About Us</p>
                        <p>Portfolio</p>
                        <p>Testimonial</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-medium text-lg opacity-90'>Support</h1>
                    <div className='flex flex-col opacity-80 gap-6'>
                        <p>FAQ</p>
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-medium text-lg opacity-90'>Social Media</h1>
                    <div className='flex flex-col opacity-80 gap-6'>
                        <p>Dribbble</p>
                        <p>Behance</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center pt-12 opacity-90'>&copy;2022, TechTeam. All rights reserved</div>
    </div>
  )
}

export default Footer