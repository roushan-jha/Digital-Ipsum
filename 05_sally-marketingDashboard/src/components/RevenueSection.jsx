import React from 'react'
import RevenueBar from './Basic/RevenueBar'
import RevenueChart from './Basic/RevenueChart'
import RevenueDetails from './Basic/RevenueDetails'

const RevenueSection = () => {
  return (
    <div className='p-4'>
        <RevenueBar />
        <RevenueChart />
        <RevenueDetails />
    </div>
  )
}

export default RevenueSection