import React from 'react'

const Task = ({title, time, color, image}) => {
  return (
    <div className={`flex flex-col gap-3 p-4 ${color} rounded-xl`}>
        <h5>{title}</h5>
        <p>{time.from}-{time.to} AM</p>
        <div>
            <img src={image} alt="Count" />
        </div>
    </div>
  )
}

export default Task