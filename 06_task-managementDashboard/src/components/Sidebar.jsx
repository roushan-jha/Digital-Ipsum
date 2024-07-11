import React from 'react';
import logo from '../assets/Logo.png'
import Dashboard from './svg/Dashboard'
import Logout from './svg/Logout';
import Document from './svg/Document';
import Jobs from './svg/Jobs';
import Message from './svg/Message';
import Schedule from './svg/Schedule';
import Community from './svg/Community';


const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-full py-8 flex flex-col gap-12">
      <div className='flex gap-2 justify-center items-center'>
        <div>
          <img width={38} src={logo} alt="Logo" />
        </div>
        <h2 className='font-extrabold font-primary text-2xl'>MyTask</h2>
      </div>
      <div className='flex flex-col items-center gap-6 font-primary'>
        <div className='w-44 flex justify-start gap-4 items-center text-white bg-primary rounded-xl px-4 py-3'>
          <Dashboard />
          <h5 className='cursor-pointer'>Dashboard</h5>
        </div>
        <div className='w-44 flex justify-start gap-6 items-center px-4 py-3'>
          <Jobs />
          <h5 className='cursor-pointer'>Jobs</h5>
        </div>
        <div className='w-44 flex justify-start gap-4 items-center px-4 py-3'>
          <Schedule />
          <h5 className='cursor-pointer'>Schedule</h5>
        </div>
        <div className='w-44 flex justify-start gap-4 items-center px-4 py-3'>
          <Community />
          <h5 className='cursor-pointer'>Community</h5>
        </div>
        <div className='w-44 flex justify-start gap-4 items-center px-4 py-3'>
          <Message />
          <h5 className='cursor-pointer'>Message</h5>
        </div>
        <div className='w-44 flex justify-start gap-6 items-center px-4 py-3'>
          <Document />
          <h5 className='cursor-pointer'>Document</h5>
        </div>
        <div className='w-44 flex justify-start gap-4 items-center px-4 py-3'>
          <Logout />
          <h5 className='cursor-pointer'>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
