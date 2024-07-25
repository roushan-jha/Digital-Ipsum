import React from 'react'
import instagram_icon from '../assets/instagram.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-white font-primary font-light px-32'>
      <div className='flex justify-between w-full pt-4 pb-16'>
        <div className='w-1/3 flex flex-col gap-4'>
          <Link to={'/'} className='font-medium text-3xl'>BNGOON</Link>
          <div className='text-sm'>
            <p>Copyright &copy; 2023 Bangoonan</p>
            <p>Designed by TokoTema</p>
          </div>
        </div>
        <div className='w-2/3 flex justify-between gap-12'>
          <div className='w-2/5 flex flex-col gap-4 pr-6'>
            <h2 className='font-normal text-xl'>About Us</h2>
            <p className='text-sm'>Hac ullamcorper diam lacus eget amet penatibus. Consectetur non hendrerit vel amet in eu adipiscing scelerisque.</p>
          </div>
          <div className='w-3/5 flex justify-between'>
            <div className='w-1/2 flex flex-col gap-4'>
              <h2 className='font-normal text-xl'>Location</h2>
              <div className='text-sm flex flex-col gap-2'>
                <p>United States</p>
                <p>United Kingdom</p>
                <p>Australia</p>
              </div>
            </div>
            <div className='w-1/2 flex flex-col gap-4'>
              <h2 className='font-normal text-xl'>Contact Info</h2>
              <div className='text-sm flex flex-col gap-2'>
                <p>123 Main St. Anytown, USA</p>
                <p>+1 (555) 555-5555</p>
                <p>info@bangoonan.com</p>
                <Link className='hover:text-secondary' to={'/career'}>Carrers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[2px] bg-primary'></div>
      <div className='flex justify-between items-center pt-4 pb-10'>
        <div className='flex gap-12'>
          <h2 className='font-medium text-xl'>Follow Us</h2>
          <div className='flex gap-3'>
            <img src={instagram_icon} alt="Instagram Icon" />
            <img src={instagram_icon} alt="Instagram Icon" />
            <img src={instagram_icon} alt="Instagram Icon" />
            <img src={instagram_icon} alt="Instagram Icon" />
          </div>
        </div>
        <div className='flex gap-8'>
          <span className='cursor-pointer'>Privacy</span>
          <span className='cursor-pointer'>Teams</span>
        </div>
      </div>
    </div>
  )
}

export default Footer