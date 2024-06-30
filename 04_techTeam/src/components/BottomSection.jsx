import React from 'react'
import Footer from './Footer'
import sm_image from '../assets/sm-image.png'

const BottomSection = () => {
  return (
    <div className='mt-16'>
        <div className='py-16 mx-32 flex justify-between items-center'>
            <h1 className='w-3/5 font-semibold text-5xl opacity-90 leading-tight'>Trusted by technology companies</h1>
            <p className='w-2/5 text-lg opacity-80 leading-normal'>We are trusted by technology companies in the world, because our very satisfactory performance makes them believe in us</p>
        </div>
        <div className='w-full flex'>
            <div className='w-40 h-full'>
                <div className='h-[80px]'></div>
                <div className='h-[80px] bg-black opacity-85'></div>
            </div>
            <div className='w-full h-[160px] flex justify-around items-center px-24 py-12 bg-orange-500'>
                <div>
                    <img src={sm_image} alt="Placeholder" />
                </div>
                <div>
                    <img src={sm_image} alt="Placeholder" />
                </div>
                <div>
                    <img src={sm_image} alt="Placeholder" />
                </div>
                <div>
                    <img src={sm_image} alt="Placeholder" />
                </div>
                <div>
                    <img src={sm_image} alt="Placeholder" />
                </div>
            </div>
            <div className='w-40 h-full'>
                <div className='h-[80px]'></div>
                <div className='h-[80px] bg-black opacity-85'></div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BottomSection