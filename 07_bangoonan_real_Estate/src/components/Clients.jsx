import React from 'react'
import client_1 from '../assets/Logo Client 1.png'
import client_2 from '../assets/Logo Client 2.png'
import client_3 from '../assets/Logo Client 3.png'
import client_4 from '../assets/Logo Client 4.png'
import client_5 from '../assets/Logo Client 5.png'

const Clients = () => {
  return (
    <div className='bg-slate-200 px-32 py-24'>
        <div className='flex justify-between'>
          <div>
            <img src={client_1} alt="Client Logo" />
          </div>
          <div>
            <img src={client_2} alt="Client Logo" />
          </div>
          <div>
            <img src={client_3} alt="Client Logo" />
          </div>
          <div>
            <img src={client_4} alt="Client Logo" />
          </div>
          <div>
            <img src={client_5} alt="Client Logo" />
          </div>
        </div>
    </div>
  )
}

export default Clients