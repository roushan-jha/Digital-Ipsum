import React from 'react'
import Overview from '../components/Overview'
import About from '../components/About'
import Agents from '../components/Agents'
import Clients from '../components/Clients'
import GetSource from '../components/GetSource'

const AboutPage = () => {
  return (
    <div>
      <div className='h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center'>
        <h1 className='font-bold text-5xl text-white'>About Us</h1>
        <p className='font-medium text-white'>Home / About Us</p>
      </div>
      <Overview />
      <About />
      <Agents />
      <Clients />
      <GetSource />
    </div>
  )
}

export default AboutPage