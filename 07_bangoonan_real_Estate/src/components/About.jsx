import React from 'react'
import check from "../assets/check.png"
import Buy from '../svg/Buy'

const About = () => {
  return (
    <div className=' p-32 bg-slate-200 font-primary'>
        <div className='flex gap-12'>
            <div className='w-2/5 flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-3xl'>Why Choose Bangoonan?</h2>
                    <p className='opacity-60'>Metus morbi sit cras sit a penatibus mauris lobortis tellus. Nisl velit etiam.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div><img src={check} alt="Check Icon" /></div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-medium text-xl'>Excellent Communication</h2>
                            <p className='w-4/5 opacity-60 text-sm'>Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div><img src={check} alt="Check Icon" /></div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-medium text-xl'>Extensive Market Knowledge</h2>
                            <p className='w-4/5 opacity-60 text-sm'>Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div><img src={check} alt="Check Icon" /></div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-medium text-xl'>Strong Negotiators</h2>
                            <p className='w-4/5 opacity-60 text-sm'>Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='px-6 py-3 border-[1px] border-black border-opacity-70 rounded-md'>Learn More</button>
                </div>
            </div>
            <div className='w-3/5 h-auto flex flex-col gap-4'>
                <div className='w-full h-1/2 flex gap-4'>
                    <div className='w-1/2 bg-primary flex justify-center items-center rounded-xl text-white'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-center items-center gap-3'>
                                <Buy color={"#FFD278"} />
                                <p className='font-medium text-3xl'>10,000 +</p>
                            </div>
                            <p className='text-center'>Properties Sold</p>
                        </div>
                    </div>
                    <div className='w-1/2 bg-secondary rounded-xl'></div>
                </div>
                <div className='w-full h-1/2 bg-secondary rounded-xl'></div>
            </div>
        </div>
    </div>
  )
}

export default About