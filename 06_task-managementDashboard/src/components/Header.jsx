import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Notification from './svg/Notification'
import placeholder from '../assets/img-placeholder.png'

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-8">
      <h1 className="text-4xl font-primary font-semibold text-black opacity-80">Dashboard</h1>
      <div className="relative flex items-center rounded-xl bg-white">
        <input
          type="text"
          className="px-4 py-3 text-primary border-none rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-sm placeholder-primary placeholder-opacity-50"
          placeholder="Search Task"
        />
        <div className='absolute right-2 p-2 rounded-lg bg-primary flex items-center justify-center'>
          <FaSearch className="text-white" />
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <Notification />
        <div>
          <h1 className='font-medium'>Christina Parker</h1>
          <p className='text-sm text-primary text-center'>Graphic Designer</p>
        </div>
        <div>
          <img src={placeholder} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Header;
