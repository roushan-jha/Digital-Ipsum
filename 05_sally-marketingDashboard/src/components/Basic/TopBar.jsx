import React from 'react'
import circle from '../../assets/circle.png'
import Notification from '../svg/Notification'
import Invoice from '../svg/Invoice'
import Search from '../svg/Search'

const TopBar = () => {
  return (
    <div className='flex justify-between py-6 px-12'>
        <div className='w-2/5 px-6 flex gap-2 items-center bg-slate-100 rounded-xl'>
            <Search />
            <div className='w-full'>
                <input className='bg-transparent py-2 w-full' type="text" placeholder='Search something' />
            </div>
        </div>
        <div className='w-3/5 flex justify-end gap-8 items-center'>
            <Notification />
            <Invoice />
            <div>
                <img src={circle} alt="Placeholder" />
            </div>
        </div>
    </div>
  )
}

export default TopBar