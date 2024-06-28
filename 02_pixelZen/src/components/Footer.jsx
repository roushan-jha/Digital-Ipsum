import React from 'react'
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='flex bg-slate-100 p-12'>
            <div className='w-2/5 pr-28'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="Logo" />
                    <h1 className='text-2xl font-sora font-medium'>PIXELZEN</h1>
                </div>
                <p className='font-satoshi font-light text-md py-8'>Digicomp is a company that specializes in providing digital marketing services, has more than 10 years of experience making it the best and will continue to develop until now</p>
                <div className='flex gap-4'>
                    <img src={facebook} alt="Facebook Image" />
                    <img src={twitter} alt="Twitter Image" />
                    <img src={instagram} alt="Instagram Image" />
                </div>
            </div>
            <div className='flex w-3/5 justify-between pr-28'>
                <div className='flex flex-col gap-6 font-satoshi'>
                    <h2 className='font-medium'>Social Links</h2>
                    <div className='flex flex-col gap-4 font-light'>
                        <p>Our Services</p>
                        <p>Categories</p>
                        <p>Portfolio</p>
                        <p>Best Features</p>
                        <p>Premium Memeber</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 font-satoshi'>
                    <h2 className='font-medium'>Company</h2>
                    <div className='flex flex-col gap-4 font-light'>
                        <p>Sign Up</p>
                        <p>Contact</p>
                        <p>Office Map</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 font-satoshi'>
                    <h2 className='font-medium'>Platform</h2>
                    <div className='flex flex-col gap-4 font-light'>
                        <p>Newsletter</p>
                        <p>Software Tools</p>
                        <p>Partnership</p>
                        <p>Brand Product</p>
                        <p>Get The App</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 font-satoshi'>
                    <h2 className='font-medium'>Company</h2>
                    <div className='flex flex-col gap-4 font-light'>
                        <p>Sign Up</p>
                        <p>Contact</p>
                        <p>Office Map</p>
                        <p>FAQs</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center font-satoshi font-light bg-orange-100 p-4'>
            <p>&copy;2023 PixelZen All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer