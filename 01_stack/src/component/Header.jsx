import React from 'react'
import NavBar from './NavBar'
import Decoration_1 from "../assets/Decoration1.png"
import rectangle_29 from "../assets/Rectangle 29.png"
import repeatGrid from "../assets/Repeat Grid.png"

const Header = () => {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        <div className=' w-full h-screen'>
          <div className='bg-auto bg-no-repeat' style={{backgroundImage: `url(${Decoration_1})`}}>
              <div className='p-10 pl-24 h-screen flex items-center relative z-40 w-full'>
                <div className='flex items-center bg-auto bg-no-repeat' style={{backgroundImage: `url(${repeatGrid})`}} >
                  <div className='p-10'>
                    <p className='text-md font-light py-4 px-2'>Stack is Digital Market Agency</p>
                    <div className='font-medium text-black text-5xl'>
                      <p>We Create Impact</p>
                      <p className='mt-4 mb-4'>through Digital</p>
                      <span className='bg-center bg-no-repeat pr-3 pb-1' style={{backgroundImage: `url(${rectangle_29})`}}>Market</span>
                    </div>
                    <button className='bg-blue-600 text-white text-md px-10 py-3 shadow-lg shadow-blue-400 rounded-md mt-7 hover:bg-blue-400'>Let's Talk</button>
                  </div>
                </div>
              </div>
              <div className='flex justify-end pt-8 pb-8 object-cover absolute top-24 z-30 w-full'>
                <img src="src\assets\Illustration-2.png" alt="Illustration-2"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Header