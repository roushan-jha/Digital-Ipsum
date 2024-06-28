import React from 'react'
import mockup_phone from "../assets/Mockup Phone.png"
import invest_icon from "../assets/invest.png"
import growth_icon from "../assets/growth.png"
import preson_icon from "../assets/person.png"
import exchange_icon from "../assets/exchange.png"
import circle from "../assets/circle.png"
import lock_icon from "../assets/lock.png"
import diamond_icon from "../assets/diamond.png"
import Button from './Basic/Button'
import Card from './Basic/Card'
import FAQs from './Basic/FAQs'
import TryResources from './Basic/TryResources'

const ProductPage = () => {

  const headings = [
    "Investing Simplified", 
    "Exclusively for investment",
    "Build your wealth"
  ];

  const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis nam magni omnis placeat!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis nam magni omnis placeat!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis nam magni omnis placeat!",
  ];

  return (
    <div>
      <div>
        <div className='w-full h-screen bg-gray-800 flex flex-col justify-end items-start text-white px-28 pb-44'>
          <h1 className='font-semibold text-6xl py-8'>Investing made easy</h1>
          <p className='text-lg font-light w-1/2 pr-4 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam dicta non laboriosam exercitationem ab numquam tempora eos cum voluptate.</p>
          <div className='flex gap-4'>
              <Button svg="checkcircle" text="View on App Store" />
              <Button svg="chevronright" text="View on Google Play" />
          </div>
        </div>
        <div className='absolute top-56 right-48'>
          <img className='w-[380px]' src={mockup_phone} alt="Image Placeholder" />
        </div>
      </div>
      <div className='mt-32 px-32 py-16'>
        <div>
          <h1 className='font-semibold text-5xl py-8'>Investing Simplified</h1>
          <p className='text-lg font-light w-1/2 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem id accusantium!</p>
        </div>
        <div className='w-full h-auto mt-8 flex justify-center gap-10 items-center'>
          <Card image={invest_icon} heading={headings[0]} info={paragraphs[0]} />
          <Card image={growth_icon} heading={headings[1]} info={paragraphs[1]} />
          <Card image={preson_icon} heading={headings[2]} info={paragraphs[2]} />
        </div>
        <div className='text-center py-10'>
          <button className='py-2 px-3 border-[1px] border-blue-500 font-medium text-blue-500 rounded-lg'>View all features</button>
        </div>
      </div>
      <div>
        <div className='px-20 py-16'>
            <div className='flex justify-center gap-2'>
                <p className='w-[160px] text-lg font-medium text-center opacity-50'>Feacture One</p>
                <p className='w-[160px] text-lg font-medium opacity-90 text-center border-b-2 border-b-blue-500 pb-[2px]'>Feacture Two</p>
                <p className='w-[160px] text-lg font-medium text-center opacity-50'>Feacture Three</p>
            </div>
            <div className='w-full mt-16 h-screen flex justify-evenly'>
                <div className='w-1/3 self-start'>
                    <h1 className='font-semibold text-5xl leading-snug pb-8'>One feacture that you'll love</h1>
                    <p className='font-light text-lg pb-8'>Creating a very beautiful website design in accordance with the fundamental user experience which is examined more deeply by the UX Designers.</p>
                    <button className='py-2 px-3 border-[1px] border-blue-500 font-medium text-blue-500 rounded-lg'>Learn more</button>
                </div>
                <div className='w-1/3 flex justify-center'>
                    <img src={mockup_phone} alt="Mobile Image" />
                </div>
                <div className='flex flex-col w-1/3 self-end gap-10'>
                    <div className='flex justify-center gap-3'>
                        <div>
                            <img className='w-[80px]' src={exchange_icon} alt="icon" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-medium text-3xl'>Fast and easy</h1>
                            <p className='font-light text-lg'>Make the appearance of a mobile application that has quality and increases convenience</p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <div>
                            <img className='w-[80px]' src={lock_icon} alt="icon" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-medium text-3xl'>Simple enough</h1>
                            <p className='font-light text-lg'>Help create a website and redesign it so that it becomes a website that is more trendy</p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <div>
                            <img className='w-[50px]' src={diamond_icon} alt="icon" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-medium text-3xl'>Latest trend</h1>
                            <p className='font-light text-lg'>Create customizable illustrations with attractive designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-16 bg-gray-800 h-screen mt-14'>
            <div className='w-1/2 flex justify-end items-start'>
                <div className='bg-white w-[430px] h-[480px] flex flex-col gap-8 p-10 rounded-lg'>
                    <img className='w-[100px]' src={circle} alt="Placeholder" />
                    <p className='font-normal opacity-70'>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
                    <div>
                        <h1 className='font-medium text-lg'>Clay Johnson</h1>
                        <p className='font-normal opacity-60 text-sm'>Business Director</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center py-20 pr-24 items-start text-white'>
                <h1 className='font-semibold text-6xl py-8'>Let's get Started!</h1>
                <p className='text-lg font-light pb-8'>Tanahair is the friendliest and most efficient company I have ever used.
                The whole thing takes time to introduce the product and as a result.</p>
                <div className='flex gap-4'>
                    <Button svg="checkcircle" text="View on App Store" />
                    <Button svg="chevronright" text="View on Google Play" />
                </div>
            </div>
        </div>
      </div>
      <div className='flex px-32'>
        <div className='py-28 w-1/2 flex justify-end pr-8'>
          <img src={mockup_phone} alt="Mockup Phone" />
        </div>
        <div className='w-1/2 px-6 flex flex-col gap-6'>
          <div className='border-b-2 border-x-2 px-4 pt-4 pb-6 rounded-b-xl'>
            <p className='px-8 opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens</p>
          </div>
          <div className='flex flex-col gap-3 px-4 py-6 bg-blue-500 text-white rounded-xl'>
            <div className='flex gap-3 font-semibold text-2xl'>
              <h1>02</h1>
              <h1>Provide your information</h1>
            </div>
            <p className='px-10 opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens</p>
          </div>
          <div className='flex flex-col gap-3 border-2 px-4 py-6 rounded-xl'>
            <div className='flex gap-3 font-semibold text-2xl'>
              <h1 className='opacity-30'>03</h1>
              <h1>Follow all the steps</h1>
            </div>
            <p className='px-10 opacity-80'>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens</p>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 text-white flex flex-col justify-center items-center p-16'>
        <h1 className='font-semibold text-5xl leading-tight w-1/2 text-center'>See how much you could make with our apps</h1>
        <p className='text-xl font-light py-6'>Crafting Magnificent Design with Us</p>
        <button className='bg-white font-medium text-blue-500 py-4 mt-8 px-10 rounded-lg'>Calculate your investment</button>
      </div>
      <FAQs />
      <TryResources />
    </div>
  )
}

export default ProductPage