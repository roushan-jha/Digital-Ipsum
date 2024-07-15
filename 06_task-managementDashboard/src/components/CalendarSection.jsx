import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

const CalendarSection = () => {
  return (
    <div className='p-4 bg-white rounded-2xl'>
      <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 550 }}
      toolbar={false}
      />
    </div>
  )
}

export default CalendarSection
