import React from 'react'
import TopBar from './Basic/TopBar'
import Card from './Basic/Card'

const MainSection = () => {
  return (
    <div className='w-4/5 h-auto bg-white m-6 rounded-3xl p-6'>
        <TopBar />
        <div className='my-4'>
            <h1 className='font-semibold text-4xl py-2'>Good morning, Mr.Donut</h1>
            <p className='opacity-90 px-[4px]'>How can we assist you to day?</p>
        </div>
        <div className='mt-8 flex justify-between gap-6'>
            <Card info="Marketing" color='#06E899' />
            <Card info="Tallin Team" overdue="Overdue" color='#FFDE59' />
            <Card info="Sales" overdue="Overdue" color='#FD3549' />
        </div>
    </div>
  )
}

export default MainSection