import React from 'react'
import rectangle from "../assets/rectangle.png"
import circle from "../assets/circle.png"
import media from "../assets/Media Coverage.png"
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import sm_image from "../assets/sm-Image Placeholder.png"
import Profile from './Basic/Profile'
import TryResources from './Basic/TryResources'
import Timeline from './Basic/Timeline'


const AboutPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-2/3'>
        <div className='flex flex-col items-center'>
          <h1 className='font-semibold text-5xl text-center pt-20 pb-10 opacity-90'>About Us</h1>
          <p className='text-center text-lg opacity-80 w-3/5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since.</p>
          <div className='py-20'>
            <img src={rectangle} alt="placeholder" />
          </div>
        </div>
        <div className='flex gap-6'>
          <div>
            <h1 className='font-medium text-2xl pb-6'>Our History</h1>
            <p className='opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. SeaWire Web is a wireframe kit that has more than 15 popular categories.</p>
          </div>
          <div>
            <h1 className='font-medium text-2xl pb-6'>Our Vision</h1>
            <p className='opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. SeaWire Web is a wireframe kit that has more than 15 popular categories.</p>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 h-screen w-full flex gap-8 mt-28'>
        <div className='w-1/2 flex justify-end items-center h-screen'>
          <div className='bg-white w-[430px] h-[480px] flex flex-col gap-8 p-10 rounded-lg'>
            <img className='w-[100px]' src={circle} alt="Placeholder" />
            <p className='font-normal opacity-70'>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
            <div>
              <h1 className='font-medium text-lg'>Clay Johnson</h1>
              <p className='font-normal opacity-60 text-sm'>Business Director</p>
            </div>
          </div>
        </div>
        <div className='h-screen w-1/2 flex items-center'>
          <div className='flex flex-col gap-6'>
            <h1 className='font-semibold text-3xl px-4 text-white'>Our Values</h1>
            <div className='flex flex-col gap-3 px-4 py-4 text-white'>
              <div className='flex gap-3 font-semibold text-2xl'>
                <h1>01</h1>
                <h1>Intigrity</h1>
              </div>
              <p className='px-10 w-4/5 opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens</p>
            </div>
            <div className='flex flex-col gap-3 px-4 py-4 text-white'>
              <div className='flex gap-3 font-semibold text-2xl'>
                <h1>02</h1>
                <h1>Totality</h1>
              </div>
              <p className='px-10 w-4/5 opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens</p>
            </div>
            <div className='flex flex-col gap-3 px-4 py-4 text-white'>
              <div className='flex gap-3 font-semibold text-2xl'>
                <h1>03</h1>
                <h1>Creativity</h1>
              </div>
              <p className='px-10 w-4/5 opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center'>
          <h1 className='font-semibold text-5xl text-center pt-20 pb-10 opacity-90'>Our Journey</h1>
          <p className='text-center text-lg opacity-80 w-3/4'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category.</p>
          {/* <Timeline /> */}
          <div className='py-20'>
            <img src={rectangle} alt="placeholder" />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-10 px-32 mt-12 opacity-80'>
            <center>
                <div>
                    <img src={media} alt="company logo" />
                </div>
            </center>
            <div className='flex justify-between items-center pt-8 pb-24'>
                <div>
                    <img src={c1} alt="company logo" />
                </div>
                <div>
                    <img src={c5} alt="company logo" />
                </div>
                <div>
                    <img src={c4} alt="company logo" />
                </div>
                <div>
                    <img src={c3} alt="company logo" />
                </div>
                <div>
                    <img src={c2} alt="company logo" />
                </div>
                <div>
                    <img src={c1} alt="company logo" />
                </div>
            </div>
        </div>
        <div className='mt-12 flex flex-col items-center'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-semibold text-4xl opacity-80 py-4 text-center'>Meet the team</h1>
            <p className='opacity-80'>We will deliver the best job with the best team</p>
          </div>
          <div className='mt-20 flex gap-4 w-1/2 p-4 bg-gray-50'>
            <div className='w-2/5'>
              <img className='w-full' src={sm_image} alt="placeholder" />
            </div>
            <div className='w-3/5 flex flex-col gap-6 justify-center'>
              <div>
                <h1 className='font-semibold text-2xl opacity-90 pb-2'>Tiger Chen</h1>
                <p className='opacity-60 font-medium'>Brand Director</p>
              </div>
              <p className='opacity-80'>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
              <p className='opacity-60 font-medium'>tigerchen@company.com</p>
            </div>
          </div>
          <div className='mt-16 w-1/2 flex flex-col gap-10'>
            <div className='flex justify-between'>
              <Profile />
              <Profile />
            </div>
            <div className='flex justify-between'>
              <Profile />
              <Profile />
            </div>
            <div className='flex justify-between'>
              <Profile />
              <Profile />
            </div>
          </div>
        </div>
        <div className='w-full mt-28'>
          <TryResources />
        </div>
    </div>
  )
}

export default AboutPage