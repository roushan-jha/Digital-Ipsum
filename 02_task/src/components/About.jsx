import React from 'react'
import MainCard from './Basic/MainCard'
import SimpleCard from './Basic/SimpleCard'
import Button from './Basic/Button'
import left_arrow from '../assets/left_arrow.png'
import right_arrow from '../assets/right_arrow.png'
import strip from '../assets/strip.png'
import sm_image from '../assets/sm_image.png'

const About = () => {
  return (
    <div id='about'>
        <div className='bg-slate-100'>
            <div className='flex justify-between items-center px-20 pt-24 pb-12'>
                <h1 className='w-3/4 font-sora font-semibold text-5xl'>What Our Client Says</h1>
                <div className='w-1/4 flex justify-center gap-4'>
                    <div className='w-[62px] h-[62px] flex justify-center items-center border-2 border-slate-200 p-2'>
                        <img src={left_arrow} alt="Left Arrow" />
                    </div>
                    <div className='w-[62px] h-[62px] flex justify-center items-center border-2 border-slate-200 p-2'>
                        <img src={right_arrow} alt="Right Arrow" />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <MainCard />
            </div>
        </div>
        <div>
            <div className='flex justify-between px-10 py-20'>
                <div className='w-[560px] font-sora font-semibold text-5xl'>
                    Let's See A Selection Of Our Work
                </div>
                <div className='w-[400px] pl-12'>
                    <p className='font-satoshi font-normal pb-4'>
                        Here are some examples of your work that can be used as a reference for the quality we produce
                    </p>
                    <Button text="Read more" bcolor="white" tcolor="black" />
                </div>
            </div>
            <div className='flex justify-between px-10'>
                <SimpleCard heading="Business Progress" info="Tracking and monitoring the business that is being developed with a predetermined strategy to see results in real time and accurately" />
                <SimpleCard heading="Digital Advertising" info="See how the results of the digital ads that you create and broadcast to attract more attention from potential customers" />
                <SimpleCard heading="Company Data Recap" info="Recapitulate to make the company's business documents more presentable and informative with many interesting features" />
            </div>
        </div>
    </div>
  )
}

export default About