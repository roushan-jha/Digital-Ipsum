import React from 'react'
import square_img from '../assets/square-image.png'
import video_img from '../assets/Video Image.png'
import Card from './Card'

const About = () => {

    const description = [
        {
            feedback: `“Amazing professional people. It's a pleasure to work with you. I really can't wait to work together again!”`,
            customer: "Bing Chilling",
            rank: "CEO at Chillz",
        },
        {
            feedback: '"I really enjoyed working with you guys, you guys are very communicative and quick to do the job”',
            customer: "Zhong Xina",
            rank: "Wrestler Professional",
        },
    ]

  return (
    <div className='my-24 relative poppins-light'>
        <div className='flex flex-col gap-8'>
            <div className='pt-14 mx-32 flex gap-8 items-center'>
                <h1 className='w-1/2 font-semibold text-5xl opacity-90 leading-tight'>Get to know us more</h1>
                <p className='w-1/2 text-lg opacity-60 leading-normal'>We are a full-service digital agency, specializing in modern technology,With the best service and professional people</p>
            </div>
            <div className='flex h-[460px]'>
                <div className='w-1/12 h-full'></div>
                <div className='w-11/12'>
                    <div className='h-2/5'></div>
                    <div className='h-3/5 bg-black bg-opacity-85'></div>
                </div>
            </div>
        </div>
        <div className='absolute top-[20%]'>
            <div className='flex justify-between gap-8 px-4'>
                <div>
                    <img src={square_img} alt="Placeholder" />
                </div>
                <div>
                    <img src={video_img} alt="Placeholder" />
                </div>
                <div>
                    <img src={square_img} alt="Placeholder" />
                </div>
            </div>
        </div>
        <div className='pl-32 mt-36 mb-28 relative'>
            <div className='flex justify-between'>
                <div className='flex flex-col w-2/5 gap-6 pb-12'>
                    <h1 className='font-medium text-5xl leading-normal'>What people say about us</h1>
                    <p className='text-lg opacity-60 pr-12 w-11/12'>These are some opinions from our customers about our service and quality.</p>
                </div>
                <div className='w-3/5 flex'>
                    <div className='w-1/12'>

                    </div>
                    <div className='w-11/12'>
                        <div className='h-2/5'></div>
                        <div className='h-3/5 bg-black bg-opacity-85'></div>
                    </div>
                </div>
            </div>
            <div className='w-3/5 flex justify-end pr-2 gap-6 absolute top-0 right-0'>
                <Card feedback={description[0].feedback} customer={description[0].customer} rank={description[0].rank} />
                <Card feedback={description[1].feedback} customer={description[1].customer} rank={description[1].rank} />
            </div>
        </div>
    </div>
  )
}

export default About