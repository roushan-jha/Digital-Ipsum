import React from 'react'
import invest_icon from "../../assets/invest.png"
import growth_icon from "../../assets/growth.png"
import preson_icon from "../../assets/person.png"
import Card from './Card'



const Stats = () => {
    
    const headings = [
        "Investing Simplified", 
        "Exclusively for investment",
        "Build your wealth"
    ];
    const paragraphs = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis nam magni omnis placeat!",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis nam magni omnis placeat!",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis nam magni omnis placeat!",
    ];

  return (
    <div className='mt-32 px-32 py-16'>
        <div>
            <h1 className='font-semibold text-5xl py-8'>Investing Simplified</h1>
            <p className='text-lg font-light w-1/2 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem id accusantium!</p>
        </div>
        <div className='w-full h-auto mt-8 flex justify-center gap-10 items-center'>
            <Card image={invest_icon} heading={headings[0]} info={paragraphs[0]} />
            <Card image={growth_icon} heading={headings[1]} info={paragraphs[1]} />
            <Card image={preson_icon} heading={headings[2]} info={paragraphs[2]} />
        </div>
        <div className='text-center py-10'>
            <button className='py-2 px-3 border-[1px] border-blue-500 font-medium text-blue-500 rounded-lg'>View all features</button>
        </div>
        <div className='mt-28'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-5xl'>Us by numbers</h1>
                <p className='text-lg font-light w-1/2 pr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id neque perspiciatis delectus!</p>
            </div>
            <div className='mt-16 flex gap-4'>
                <div className='w-[75%] h-[300px] flex justify-between'>
                    <div className='w-[260px] flex flex-col justify-between'>
                        <div className='w-full h-[140px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                            <h1 className='font-semibold py-3 text-5xl'>345%</h1>
                            <p classname='text-lg'>Total ROI</p>
                        </div>
                        <div className='w-full h-[140px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                            <h1 className='font-semibold py-3 text-5xl'>126%</h1>
                            <p classname='text-lg'>Average annual ROI</p>
                        </div> 
                    </div>
                    <div className='w-[260px] flex flex-col justify-between'>
                        <div className='w-full h-[140px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                            <h1 className='font-semibold py-3 text-5xl'>0.657</h1>
                            <p classname='text-lg'>Accumulated wealth</p>
                        </div>
                        <div className='w-full h-[140px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                            <h1 className='font-semibold py-3 text-5xl'>98.3412</h1>
                            <p classname='text-lg'>Average Accumulated wealth</p>
                        </div>
                    </div>
                    <div className='w-[260px] flex flex-col justify-between'>
                        <div className='w-full h-[140px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                            <h1 className='font-semibold py-3 text-5xl'>$3,521</h1>
                            <p classname='text-lg'>Total invested</p>
                        </div>
                        <div className='w-full h-[140px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                            <h1 className='font-semibold py-3 text-5xl'>$13,230</h1>
                            <p classname='text-lg'>Invested value</p>
                        </div>
                    </div>
                </div>
                <div className='w-[25%] bg-blue-500 flex flex-col justify-center items-center p-10 rounded-lg'>
                    <h1 className='font-semibold py-6 text-5xl text-white'>$25,140</h1>
                    <p className='text-lg text-white'>Return on Investment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats