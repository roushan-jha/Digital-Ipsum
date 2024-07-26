import React from 'react'
import AgentCard from './AgentCard'

const Agents = () => {
  return (
    <div className='p-32 font-primary'>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>Our Exclusive Agents</h1>
                    <p className='opacity-60'>Posuere id quam lorem dignissim.</p>
                </div>
                <p className='font-medium text-lg'>Become Our Agent</p>
            </div>
            <div className='flex gap-6'>
                <AgentCard agent="Samantha White" about="Senior Agent" />
                <AgentCard agent="David Lee" about="Commercial Specialist" />
                <AgentCard agent="Maria Gomez" about="Multilingual Realtor" />
                <AgentCard agent="Michael Johnson" about="Luxury Home Expert" />
            </div>
        </div>
    </div>
  )
}

export default Agents