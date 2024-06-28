import React from 'react'
import Client from './Client'
import repeatGrid_3 from "../assets/Repeat Grid 3.png"

const Services = () => {
  return (
    <div>
        <Client />
        <div className='text-center'>
            <h1 className='font-medium text-3xl pb-4'>What we do to our Clients?</h1>
            <p className='font-light text-md'>Far far away, behind the word mountains, far from the countries</p>
            <p className='font-light text-md'>Vokalia and Consonantia, there lives the blind texts.</p>
        </div>
        <div className='relative'>
            <div className='px-20 py-20 flex flex-col bg-auto bg-no-repeat bg-left-bottom'
              style={{backgroundImage: `url(${repeatGrid_3})`}} >
                <div className='h-60 pl-10 flex items-end gap-10'>
                    <div className='bg-white border-b-4 border-b-purple-400 shadow-xl mb-8 w-52 h-52 rounded-md py-2 px-4'>
                        <img src="src\assets\Group 51.png" alt="logo1" />
                        <h1 className='py-3 font-medium text-sm'>Social Media Marketing</h1>
                        <p className='font-light text-sm leading-6 pt-2'>Far far away, behind the word mountains, far from the countries Vokalia</p>
                    </div>
                    <div className='bg-white border-b-4 border-b-blue-300 shadow-xl w-52 h-52 rounded-md py-2 px-4'>
                        <img src="src\assets\Group 53.png" alt="logo2" />
                        <h1 className='py-3 font-medium text-sm'>Search Engine Marketing</h1>
                        <p className='font-light text-sm leading-6 pt-2'>Far far away, behind the word mountains, far from the countries Vokalia</p>
                    </div>
                </div>
                <div className='h-60 pl-10 flex items-end gap-10'>
                    <div className='bg-white border-b-4 border-b-red-300 shadow-xl mb-8 w-52 h-52 rounded-md py-2 px-4'>
                        <img src="src\assets\Group 55.png" alt="logo3" />
                        <h1 className='py-3 font-medium text-sm'>Social Media Montitoring</h1>
                        <p className='font-light text-sm leading-6 pt-2'>Far far away, behind the word mountains, far from the countries Vokalia</p>
                    </div>
                    <div className='bg-white border-b-4 border-b-blue-500 shadow-xl w-52 h-52 rounded-md py-2 px-4'>
                        <img src="src\assets\Group 54.png" alt="logo4" />
                        <h1 className='py-3 font-medium text-sm'>Search Engine Optimize</h1>
                        <p className='font-light text-sm leading-6 pt-2'>Far far away, behind the word mountains, far from the countries Vokalia</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end right-0 top-0 absolute'>
                <img src="src\assets\Illustration-1.png" alt="Illustration-1"/>
            </div>
        </div>
    </div>
  )
}

export default Services