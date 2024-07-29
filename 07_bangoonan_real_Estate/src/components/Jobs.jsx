import React from 'react'

const Jobs = ({post, salary, location}) => {
  return (
    <div className='w-3/4 flex p-4 border-[1px] border-slate-200 rounded-xl'>
        <div className='w-full flex justify-between'>
            <div className='w-2/5 flex flex-col gap-2'>
                <h2 className='font-medium text-xl'>{post}</h2>
                <p className='opacity-60 text-sm'>Posuere id quam lorem dignissim.</p>
            </div>
            <div className='w-[30%]'>
                <div className='flex flex-col gap-2 pl-10'>
                    <h4>Salary : {salary}</h4>
                    <p className='opacity-60 text-sm'>{location}</p>
                </div>
            </div>
            <div className='w-[30%] flex justify-end items-center'>
                <button className='px-4 py-3 bg-primary text-white rounded-lg'>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Jobs