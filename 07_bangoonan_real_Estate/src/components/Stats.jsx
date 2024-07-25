import React from 'react'

const Stats = () => {
  return (
    <div className='flex justify-between px-32 py-16 font-primary bg-primary text-white'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='font-medium text-4xl'>20+</h3>
            <p>Years in the industry</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='font-medium text-4xl'>90%</h3>
            <p>Customer satisfaction</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='font-medium text-4xl'>10K</h3>
            <p>Properties sold</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='font-medium text-4xl'>50+</h3>
            <p>Country served</p>
        </div>
    </div>
  )
}

export default Stats