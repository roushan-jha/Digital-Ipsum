import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalander = () => {
    const [date, setDate] = useState(new Date());

    const changeDate = (date) => {
        setDate(date);
    }
  return (
    <div className='w-full rounded-xl shadow-md'>
        <Calendar 
        onChange={changeDate} 
        value={date}
        className='border-none p-2 opacity-80'
        tileClassName={({ date, value }) => {
            if (date.toDateString() === new Date().toDateString()) {
              return 'bg-[#00E396] text-white rounded-full border-2 border-blue-500';
            }
            if (value && date.toDateString() === value.toDateString()) {
              return 'bg-blue-500 text-white rounded-full border-2 border-red-500';
            }
            return '';
          }} />
    </div>
  )
}

export default ReactCalander