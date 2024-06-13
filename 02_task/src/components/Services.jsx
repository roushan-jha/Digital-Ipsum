import React from 'react'
import Button from './Basic/Button'
import Stats from './Basic/Stats'
import image_bg1 from '../assets/image_bg1.png'
import image_bg2 from '../assets/image_bg2.png'


const Services = () => {

    const headings = [
        "Consutant Business Strategy", "Gooogle Ads Management",
        "Research & Discovery", "Social Media Marketing"
    ];
    
    const paragraphs = [
        "we provide the best solution for your business planning so that it can help increase your business to be more advanced in market reach and your company's income",
        "Help manage ads on Google services to further maximize the potential reach of customers who can be targeted and make them more interested in the products",
        "Conduct in-depth and detailed searches and observations to obtain as much information as possible and with high accuracy required by our customers business needs",
        "More interesting with services on social media for your business, because we will manage your business professional account and make  that attracts more consumers"
    ];

  return (
    <div className='p-20'>
        <div className='flex justify-between px-10 py-20'>
            <div className='w-[500px] font-sora font-semibold text-5xl'>
                We Just Offer The Best Services
            </div>
            <div className='w-[400px] pl-16'>
                <p className='font-satoshi font-normal pb-4'>We present the best digital marketing services carried out professionally</p>
                <Button text="Read more" bcolor="white" tcolor="black" />
            </div>
        </div>
        <div className='flex flex-col gap-24 my-12 mx-30 pl-32'>
            <div className='flex gap-12 items-center w-full'>
                <div className='w-1/2'>
                    <img src={image_bg1} alt="Image" />
                </div>
                <Stats heading={headings[0]} info={paragraphs[0]} />
            </div>
            <div className='flex gap-12 items-center w-full'>
                <Stats heading={headings[1]} info={paragraphs[1]} />
                <div className='w-1/2'>
                    <img src={image_bg2} alt="Image" />
                </div>
            </div>
            <div className='flex gap-12 items-center w-full'>
                <div className='w-1/2'>
                    <img src={image_bg1} alt="Image" />
                </div>
                <Stats heading={headings[2]} info={paragraphs[2]} />
            </div>
            <div className='flex gap-12 items-center w-full'>
                <Stats heading={headings[3]} info={paragraphs[3]} />
                <div className='w-1/2'>
                    <img src={image_bg2} alt="Image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services