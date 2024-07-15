import React from 'react';
import TaskSection from './TaskSection';
import img from '../assets/IMAGE HERE.png'
import CalendarSection from './CalendarSection';
import ToolBar from './ToolBar';

const MainSection = () => {
  return (
    <div className="p-6 flex gap-6">
      <div className='w-2/3 flex flex-col gap-6'>
        <div className='flex justify-between gap-6 items-center bg-primary p-4 rounded-xl text-white'>
          <div>
            <img src={img} alt="Image" />
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='font-medium text-3xl font-secondary'>Hi Christina Parker!</h2>
            <div className='font-primary'>
              <p>Welcome to your all event calender.</p>
              <p>Here, you can see all the upcoming meetings, 
              event and create new ones.</p>
            </div>
          </div>
        </div>
        <ToolBar />
        <CalendarSection />
      </div>
      <TaskSection />
    </div>
  );
};

export default MainSection;
