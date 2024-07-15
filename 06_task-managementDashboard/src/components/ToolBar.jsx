import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ToolBar = () => {
  return (
    <div className='mt-6 flex justify-between items-center font-primary'>
        <h2 className='font-medium text-2xl'>Schedule Task</h2>
        <div className='flex items-center gap-6'>
            <div className='text-lg'>7 - 13 Auguest 2020</div>
            <button className='flex justify-center items-center gap-3 p-3 text-white bg-primary rounded-md'>
                <p>Week</p>
                <IoIosArrowDown />
            </button>
            <div className='flex h-full justify-between items-center p-3 border border-primary rounded-md text-primary'>
                <div className='border-r border-r-primary pr-2'><FaAngleLeft size={20} /></div>
                <div className='border-l border-l-primary pl-2'><FaAngleRight size={20} /></div>
            </div>
        </div>
    </div>
  )
}

export default ToolBar