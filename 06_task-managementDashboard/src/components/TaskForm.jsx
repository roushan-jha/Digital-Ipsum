import React, { useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarMonth } from "react-icons/md";

const TaskForm = ({closeTaskForm, formData, setFormData, handleFormSubmit}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            closeTaskForm();
        }
    }

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(formData);
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center pb-48 font-primary'>
        <form onSubmit={handleSubmit} className='w-[400px] flex flex-col gap-4 bg-white p-6 rounded-xl relative'>
            <button onClick={() => closeTaskForm(false)} className='place-self-end absolute top-2 right-2'>
                <RxCross2 size={28} />
            </button>
            <div className='flex flex-col gap-4'>
                <h2 className='font-medium text-2xl'>Add New Task</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h5 className='font-medium'>Title</h5>
                        <input onChange={handleFormChange} name='title' required className='focus:ring-2 focus:outline-none focus:ring-primary placeholder:text-sm placeholder-primary placeholder-opacity-60 rounded-md p-2 shadow-md text-primary' type="text" placeholder='type here...' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='font-medium'>Date</h5>
                        <div className='relative flex items-center'>
                            <DatePicker name='date' className='w-[350px] focus:ring-2 focus:outline-none focus:ring-primary placeholder:text-sm placeholder-primary placeholder-opacity-60 rounded-md p-2 shadow-md text-primary' placeholderText='select date...' selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat={'dd-MM-yyyy'} minDate={new Date()} required />
                            <div className='absolute right-2 flex justify-center items-center'>
                                <MdCalendarMonth size={28} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='font-medium'>Time</h5>
                        <div className='flex justify-between'>
                            <input onChange={handleFormChange} name='startTime' required className='w-2/5 focus:ring-2 focus:outline-none focus:ring-primary placeholder:text-sm placeholder-primary placeholder-opacity-60 rounded-md p-2 shadow-md text-primary' type="text" placeholder='from...' />
                            <input onChange={handleFormChange} name='endTime' required className='w-2/5 focus:ring-2 focus:outline-none focus:ring-primary placeholder:text-sm placeholder-primary placeholder-opacity-60 rounded-md p-2 shadow-md text-primary' type="text" placeholder='to...' />
                        </div>        
                    </div>
                </div>
            </div>
            <div className='mt-4 flex justify-center gap-4'>
                <button onClick={() => closeTaskForm(false)} className='w-32 px-4 py-3 bg-red-500 text-white rounded-md'>Cancel</button>
                <button type='submit' onClick={() => closeTaskForm(false)} className='w-32 px-4 py-3 bg-primary text-white rounded-md'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm