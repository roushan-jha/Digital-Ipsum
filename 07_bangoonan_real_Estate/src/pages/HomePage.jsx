import React from 'react'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Properties from '../components/Properties'
import Countries from '../components/Countries'
import About from '../components/About'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div>
      <Home />
      <Countries />
      <About />
      <Properties />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default HomePage