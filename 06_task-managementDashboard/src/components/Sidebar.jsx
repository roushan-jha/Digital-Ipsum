import React, { useState } from 'react';
import logo from '../assets/Logo.png'
import Dashboard from './svg/Dashboard'
import Logout from './svg/Logout';
import Document from './svg/Document';
import Jobs from './svg/Jobs';
import Message from './svg/Message';
import Schedule from './svg/Schedule';
import Community from './svg/Community';


const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonClass = (buttonId) => {
    return activeButton === buttonId
      ? 'bg-primary text-white'
      : 'opacity-70';
  };

  const changeIconColor = (buttonId) => {
    return activeButton === buttonId ? 'white' : '#6F52ED';
  }


  return (
    <div className="bg-gray-200 h-full py-8 flex flex-col gap-12">
      <div className='flex gap-2 justify-center items-center'>
        <div>
          <img width={38} src={logo} alt="Logo" />
        </div>
        <h2 className='font-extrabold font-primary text-2xl'>MyTask</h2>
      </div>
      <div className='flex flex-col items-center gap-6 font-primary'>
        <div className={`w-44 flex justify-start gap-4 items-center ${getButtonClass(1)} rounded-xl px-4 py-3`}>
          <Dashboard color={changeIconColor(1)} />
          <h5 onClick={() => handleButtonClick(1)} className='cursor-pointer'>Dashboard</h5>
        </div>
        <div className={`w-44 flex justify-start gap-6 items-center ${getButtonClass(2)} rounded-xl px-4 py-3`}>
          <Jobs color={changeIconColor(2)} />
          <h5 onClick={() => handleButtonClick(2)} className='cursor-pointer'>Jobs</h5>
        </div>
        <div className={`w-44 flex justify-start gap-4 items-center ${getButtonClass(3)} rounded-xl px-4 py-3`}>
          <Schedule color={changeIconColor(3)} />
          <h5 onClick={() => handleButtonClick(3)} className='cursor-pointer'>Schedule</h5>
        </div>
        <div className={`w-44 flex justify-start gap-4 items-center ${getButtonClass(4)} rounded-xl px-4 py-3`}>
          <Community color={changeIconColor(4)} />
          <h5 onClick={() => handleButtonClick(4)} className='cursor-pointer'>Community</h5>
        </div>
        <div className={`w-44 flex justify-start gap-4 items-center ${getButtonClass(5)} rounded-xl px-4 py-3`}>
          <Message color={changeIconColor(5)} />
          <h5 onClick={() => handleButtonClick(5)} className='cursor-pointer'>Message</h5>
        </div>
        <div className={`w-44 flex justify-start gap-6 items-center ${getButtonClass(6)} rounded-xl px-4 py-3`}>
          <Document color={changeIconColor(6)} />
          <h5 onClick={() => handleButtonClick(6)} className='cursor-pointer'>Document</h5>
        </div>
        <div className={`w-44 flex justify-start gap-6 items-center ${getButtonClass(7)} rounded-xl px-4 py-3`}>
          <Logout color={changeIconColor(7)} />
          <h5 onClick={() => handleButtonClick(7)} className='cursor-pointer'>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
