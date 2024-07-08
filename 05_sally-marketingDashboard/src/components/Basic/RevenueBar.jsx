import React from 'react'
import revenue_logo from '../../assets/state-layer.png'

const RevenueBar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <div>
                <img src={revenue_logo} alt="Revenue" />
            </div>
            <div>
                <h1 className='font-semibold text-2xl'>Revenue</h1>
                <p>Revenue</p>
            </div>
        </div>
        <div className='flex gap-8 items-center text-sm'>
            <h5 className='cursor-pointer'>Day</h5>
            <h5 className='cursor-pointer'>Week</h5>
            <h5 className='cursor-pointer'>Month</h5>
            <h5 className='cursor-pointer'>Year</h5>
        </div>
    </div>
  )
}

export default RevenueBar