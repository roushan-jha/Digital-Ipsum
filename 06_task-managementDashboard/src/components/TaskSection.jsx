import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task';
import img_three from '../assets/img_three.png'
import img_five from '../assets/img_five.png'
import img_six from '../assets/img_six.png'
import img_nine from '../assets/img_nine.png'


const TaskSection = () => {
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: {
      from: "",
      to: ""
    }
  });
  const [allTasks, setAllTasks] = useState([]);

    function handleFormSubmit(currentFormData) {
        if (!currentFormData.description || !currentFormData.amount) return;
    
        setAllTasks([
          ...allTasks,
          { ...currentFormData, id: Date.now() },
        ]);
    }

  return (
    <div className='w-1/3 flex flex-col gap-6 font-primary'>
      <button onClick={() => setOpenTaskForm(true)} className='w-full p-4 rounded-full bg-primary text-white font-primary text-2xl'>Create New Task</button>
      <div className='bg-white rounded-2xl h-[130vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-300 p-4 flex flex-col gap-6'>
        <div className='flex justify-between'>
          <h5 className='font-medium text-xl'>Priority Task</h5>
          <span className='cursor-pointer text-primary font-medium'>View All</span>
        </div>
        {openTaskForm && <TaskForm handleFormSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} closeTaskForm={setOpenTaskForm} />}
        <div className='flex flex-col gap-4'>
          <p className='text-lg'>Monday, 8th August 2020</p>
          <Task title={'Project Design Marketing'} time={{from: '08:00', to: '09:00'}} color={'bg-violet-200'} image={img_five} />
          <Task title={'ArchiTech App Client Call'} time={{from: '10:00', to: '10:15'}} color={'bg-red-200'} image={img_six} />
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-lg'>Tuesday, 9th August 2020</p>
          <Task title={'Development Health Website'} time={{from: '07:00', to: '07:30'}} color={'bg-blue-200'} image={img_three} />
          <Task title={'Doctor Website Client Call'} time={{from: '09:00', to: '10:00'}} color={'bg-red-200'} image={img_nine} />
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-lg'>Wednesday, 10th August 2020</p>
          <Task title={'Development Health Website'} time={{from: '07:00', to: '07:30'}} color={'bg-blue-200'} image={img_three} />
          <Task title={'Doctor Website Client Call'} time={{from: '09:00', to: '10:00'}} color={'bg-red-200'} image={img_nine} />
        </div>
      </div>
    </div>
  )
}

export default TaskSection