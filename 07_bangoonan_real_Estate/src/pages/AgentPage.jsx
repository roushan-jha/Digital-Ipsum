import React from 'react'
import Countries from '../components/Countries'
import Agents from '../components/Agents'
import AgentCard from '../components/AgentCard'

const AgentPage = () => {
  return (
    <div className='font-primary'>
      <div className='h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center'>
        <h1 className='font-bold text-5xl text-white'>Agents</h1>
        <p className='font-medium text-white'>Home / Agents</p>
      </div>
      <Countries />
      <Agents padding_t={'pt-0'} padding_b={'pb-0'} />
      <div className='px-32 pt-10 flex gap-6'>
        <AgentCard agent="Samantha White" about="Senior Agent" />
        <AgentCard agent="David Lee" about="Commercial Specialist" />
        <AgentCard agent="Maria Gomez" about="Multilingual Realtor" />
        <AgentCard agent="Michael Johnson" about="Luxury Home Expert" />
      </div>
      <div className='p-32'>
        <div className='bg-slate-200 flex justify-between rounded-xl p-8'>
          <div className='w-3/5 bg-primary h-[50vh] rounded-lg'></div>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <h2 className='w-3/5 font-semibold text-3xl text-center'>Become A Real Estate Agent</h2>
            <p className='opacity-60'>Posuere id quam lorem dignissim.</p>
            <button className="w-1/2 px-6 py-3 bg-primary text-white font-medium rounded-md">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentPage