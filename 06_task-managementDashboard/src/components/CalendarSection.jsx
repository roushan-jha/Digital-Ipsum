import React from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment("2020-08-10T08:00:00").toDate(),
    end: moment("2020-08-10T09:00:00").toDate(),
    title: "Project Design Marketing",
  },
  {
    start: moment("2020-08-10T10:00:00").toDate(),
    end: moment("2020-08-10T10:15:00").toDate(),
    title: "ArchiTech App Client Call",
  },
  {
    start: moment("2020-08-12T07:00:00").toDate(),
    end: moment("2020-08-12T07:30:00").toDate(),
    title: "ArchiTech App Client Call",
  },
  {
    start: moment("2020-08-12T09:00:00").toDate(),
    end: moment("2020-08-12T10:00:00").toDate(),
    title: "Doctor Website Client Call",
  },
  {
    start: moment("2020-08-14T08:00:00").toDate(),
    end: moment("2020-08-14T09:00:00").toDate(),
    title: "ArchiTech App Client Call",
  },
  {
    start: moment("2020-08-14T10:00:00").toDate(),
    end: moment("2020-08-14T11:00:00").toDate(),
    title: "Doctor Website Client Call",
  },
]

const CalendarSection = () => {
  return (
    <div className='p-4 bg-white rounded-2xl'>
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: 550 }}
      toolbar={false}
      defaultView='week'
      views={['day', 'week', 'month']}
      date={moment('2020-08-09').toDate()}
      max={moment("2024-08-08T12:00:00").toDate()}
      min={moment("2024-08-08T07:00:00").toDate()}
    />
  </div>
  )
}

export default CalendarSection
