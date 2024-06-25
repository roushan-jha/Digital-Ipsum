import React from 'react'

const Timeline = () => {
    
    const items = [
        {
          title: "Journey 1", desc: "Using Google Font"
        },
        {
          title: "Journey 2", desc: "Made for Figma"
        },
        {
          title: "Journey 3", desc: "Visual Hierarchy"
        },
        {
          title: "Journey 4", desc: "Organized Component"
        },
    ];

    return (
      <div className='w-full mt-16'>
        <div className='relative'>
        <div className='w-full flex justify-between items-center'>
          <div className='text-center z-30'>
            <span className='bg-blue-100 px-2 border-4 border-blue-500 border-opacity-40 rounded-full cursor-pointer text-sm'>1</span>
            <h1 className='py-2 font-medium text-lg opacity-70'>{items[0].title}</h1>
            <p>{items[0].desc}</p>
          </div>
          <div className='text-center z-30'>
            <span className='bg-blue-100 px-2 border-4 border-blue-500 border-opacity-40 rounded-full cursor-pointer text-sm'>2</span>
            <h1 className='py-2 font-medium text-lg opacity-70'>{items[1].title}</h1>
            <p>{items[1].desc}</p>
          </div>
          <div className='text-center z-30'>
            <span className='bg-blue-100 px-2 border-4 border-blue-500 border-opacity-40 rounded-full cursor-pointer text-sm'>3</span>
            <h1 className='py-2 font-medium text-lg opacity-70'>{items[2].title}</h1>
            <p>{items[2].desc}</p>
          </div>
          <div className='text-center z-30'>
            <span className='bg-blue-100 px-2 border-4 border-blue-500 border-opacity-40 rounded-full cursor-pointer text-sm'>4</span>
            <h1 className='py-2 font-medium text-lg opacity-70'>{items[3].title}</h1>
            <p>{items[3].desc}</p>
          </div>
        </div>
        <div className='bg-blue-500 bg-opacity-40 w-full h-[2px] absolute left-0 top-3 z-10'></div>
        </div>
      </div>
    )
  }

export default Timeline


