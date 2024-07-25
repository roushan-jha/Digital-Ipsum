import React from 'react'
import Property from '../svg/Property'

const ServiceCard = () => {
  return (
    <div className='flex flex-col gap-4 border-[1px] border-slate-200 p-8 rounded-xl'>
        <div className='flex justify-center'>
            <div className='w-[120px] flex justify-center items-center bg-slate-100 px-6 py-10 rounded-full'>
                <Property />
            </div>
        </div>
        <div className='flex flex-col justify-center text-center gap-6'>
            <h3 className='font-medium text-xl'>Sell A Property</h3>
            <p className='opacity-70 text-sm'>Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.</p>
        </div>
        <div className='flex justify-center items-center'>
            <button className='px-6 py-3 border-[1px] border-black border-opacity-70 rounded-md'>Learn More</button>
        </div>
    </div>
  )
}

export default ServiceCard