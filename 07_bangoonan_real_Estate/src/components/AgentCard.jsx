import React from 'react'

const AgentCard = ({agent, about}) => {
  return (
    <div className='w-1/4 flex flex-col gap-3'>
        <div className='bg-primary h-[200px] rounded-md'></div>
        <div className='flex flex-col gap-3'>
            <div>
                <h2 className='font-medium'>{agent}</h2>
                <p className='text-xs'>{about}</p>
            </div>
            <button className='w-2/3 px-6 py-3 border-[1px] border-black border-opacity-70 rounded-md'>Contact Agent</button>
        </div>
    </div>
  )
}

export default AgentCard