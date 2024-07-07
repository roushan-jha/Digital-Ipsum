import React from 'react'
import drop_down from '../../assets/arrow down.png'
import Dot from '../svg/Dot'
import RadialBar from './RadialBar'

const Card = ({info, overdue, color}) => {
  return (
    <div className='w-1/3 p-4 rounded-xl shadow-md'>
        <div className='flex justify-between'>
            <p className='text-sm opacity-60'>{info}</p>
            <div className='bg-slate-100 flex gap-2 items-center rounded-md px-2'>
                <p>1M</p>
                <img className='cursor-pointer' src={drop_down} alt="Drop Down icon" />
            </div>
        </div>
        <h1 className='font-semibold text-4xl opacity-85 py-2'>$25,000</h1>
        <div className='flex items-center gap-4 mt-4'>
            <div className='flex items-center gap-2'>
                <Dot color='#06E899' />
                <p className='text-sm'>Debit</p>
            </div>
            {
                overdue ? (
                    <div className='flex items-center gap-2'>
                        <Dot color='#FD3549' />
                        <p className='text-sm'>{overdue}</p>
                    </div>
                ) : " "
            }
        </div>
        <div className='mt-10 mb-2 flex justify-end items-center relative'>
            <RadialBar color={color} />
            <button className='px-4 py-2 rounded-xl font-medium bg-slate-200'>Details</button>
        </div>
    </div>
  )
}

export default Card