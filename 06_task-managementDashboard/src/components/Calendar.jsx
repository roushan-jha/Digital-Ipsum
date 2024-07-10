import React from 'react';

const Calendar = () => {
  // Placeholder data for the calendar
  const tasks = [
    { day: 'Mon', task: 'Project Design Meeting', time: '08:00-09:00 AM', color: 'bg-purple-200' },
    { day: 'Tue', task: 'ArchTech App Client Call', time: '10:00-10:15 AM', color: 'bg-red-200' },
    { day: 'Wed', task: 'Development Health Website', time: '07:00-07:30 AM', color: 'bg-blue-200' },
    { day: 'Thu', task: 'Doctor Website Client Call', time: '10:00-10:30 AM', color: 'bg-green-200' },
    { day: 'Fri', task: 'New Project Design Meeting', time: '09:00-10:00 AM', color: 'bg-yellow-200' },
  ];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Schedule Task</h3>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
          <div key={idx} className="text-center">
            <div className="text-sm font-bold">{day}</div>
            {tasks.filter(task => task.day === day).map((task, idx) => (
              <div key={idx} className={`p-2 mt-2 rounded-md ${task.color}`}>
                <div>{task.task}</div>
                <div className="text-xs">{task.time}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
