import React from 'react';
import Calendar from './Calendar';
import TaskSection from './TaskSection';

const MainSection = () => {
  return (
    <div className="p-4 flex">
      <div className='w-2/3'>
        <div className="bg-purple-300 p-4 rounded-md text-white">
          <h2>Welcome to your all event calendar.</h2>
          <p>Here, you can see all the upcoming meetings, events, and create new ones.</p>
        </div>
        <Calendar />
      </div>
      <TaskSection />
    </div>
  );
};

export default MainSection;
