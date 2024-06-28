import React from 'react'
import InfoCard from './Basic/InfoCard'
import bg_top from '../assets/bg_top.png'
import bg_bottom from '../assets/bg_bottom.png'

const Features = () => {

    const headings = [
        "Best Technology Tools", "Fast & Responsive Result", 
        "More Flexible Pricing", "Data Security Guarantee"
      ];
      const paragraphs = [
        "It's easier to develop a business with the latest modern technology tools that we have so that it can give your business the opportunity to grow bigger",
        "We guarantee the impact of our work can be seen quickly and precisely because of our business strategy and great team that work professionally",
        "The price offers we provide tend to be more flexible, you can choose according to your needs, you don't have to choose a particular package",
        "We will manage your business and company data security wisely and guaranteed to be safe from outside parties, without any fraud from our side"
      ];

  return (
    <div id='feature'>
        <div className='w-full h-auto flex justify-between text-center items-center px-40 py-12'>
            <div>
                <p className='text-4xl font-sora font-medium text-orange-500 p-2'>250+</p>
                <p className='font-satoshi font-normal'>Our Happy Customer</p>
            </div>
            <div>
                <p className='text-4xl font-sora font-medium text-orange-500 p-2'>100+</p>
                <p className='font-satoshi font-normal'>Best Service Provided</p>
            </div>
            <div>
                <p className='text-4xl font-sora font-medium text-orange-500 p-2'>570+</p>
                <p className='font-satoshi font-normal'>Product Portfolio Results</p>
            </div>
            <div>
                <p className='text-4xl font-sora font-medium text-orange-500 p-2'>300+</p>
                <p className='font-satoshi font-normal'>Our Business Partner</p>
            </div>
        </div>
        <div className='mt-10 mx-20 pb-20 bg-slate-100 bg-left-top bg-auto bg-no-repeat' style={{backgroundImage: `url(${bg_bottom}), url(${bg_top})`, backgroundPosition: 'left top, right bottom'}} >
            <div className='px-20 pt-24 pb-8 font-sora font-semibold text-5xl'>
                The Best Features We Present
            </div>
            <div className='flex flex-col gap-10 pt-10'>
                <div className='flex justify-center gap-10 items-center'>
                    <InfoCard heading={headings[0]} info={paragraphs[0]} />
                    <InfoCard heading={headings[0]} info={paragraphs[0]} />
                </div>
                <div className='flex justify-center gap-10 items-center'>
                    <InfoCard heading={headings[0]} info={paragraphs[0]} />
                    <InfoCard heading={headings[0]} info={paragraphs[0]} /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features