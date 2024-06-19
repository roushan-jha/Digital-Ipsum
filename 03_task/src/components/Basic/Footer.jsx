import React from 'react'
import icon_placeholder from "../../assets/Icon Placeholder.png"
import footer_logo from "../../assets/logo-b.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-evenly py-24 px-32 w-full h-[400px]'>
            <div>
                <Link to={"/"} className='py-6'>
                    <img src={footer_logo} alt="Logo" />
                </Link>
                <div>
                    <div className='flex justify-center items-center gap-3 py-3'>
                        <img src={icon_placeholder} alt="Placeholder" />
                        <p className='font-light'>8819 Ohio St. South Gate, CA 90280</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 py-3'>
                        <img src={icon_placeholder} alt="Placeholder" />
                        <p className='font-light'>8819 Ohio St. South Gate, CA 90280</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 py-3'>
                        <img src={icon_placeholder} alt="Placeholder" />
                        <p className='font-light'>8819 Ohio St. South Gate, CA 90280</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='py-6 font-semibold text-lg'>Service</h1>
                <div className='flex flex-col gap-3'>
                    <p>Illustration</p>
                    <p>Mobile Design</p>
                    <p>Motion Graphic</p>
                    <p>Web Design</p>
                    <p>Development</p>
                    <p>SEO</p>
                </div>
            </div>
            <div>
                <h1 className='py-6 font-semibold text-lg'>Company</h1>
                <div className='flex flex-col gap-3'>
                    <p>Features</p>
                    <p>Our Team</p>
                    <p>Portfolio</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div>
                <h1 className='py-6 font-semibold text-lg'>Our Social Media</h1>
                <div className='flex gap-3'>
                    <p className='w-[48px] text-center border-[1px] border-blue-600 text-blue-600 rounded-full p-2'>Dr</p>
                    <p className='w-[48px] text-center border-[1px] border-blue-600 text-blue-600 rounded-full p-2'>Bh</p>
                    <p className='w-[48px] text-center border-[1px] border-blue-600 text-blue-600 rounded-full p-2'>Md</p>
                    <p className='w-[48px] text-center border-[1px] border-blue-600 text-blue-600 rounded-full p-2'>Ig</p>
                    <p className='w-[48px] text-center border-[1px] border-blue-600 text-blue-600 rounded-full p-2'>Fb</p>
                </div>
            </div>
        </div>
        <div className='font-light px-48 pb-4'>Copyright Tanah Air Studio</div>
    </div>
  )
}

export default Footer