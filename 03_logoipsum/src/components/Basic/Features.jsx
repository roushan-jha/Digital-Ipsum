import React from 'react'
import mockup_phone from "../../assets/Mockup Phone.png"
import circle from "../../assets/circle.png"
import exchange_icon from "../../assets/exchange.png"
import lock_icon from "../../assets/lock.png"
import diamond_icon from "../../assets/diamond.png"
import Button from './Button'

const Features = () => {
  return (
    <div>
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
    </div>
  )
}

export default Features