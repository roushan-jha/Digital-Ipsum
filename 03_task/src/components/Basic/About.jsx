import React from 'react'
import media from "../../assets/Media Coverage.png"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import c4 from "../../assets/c4.png"
import c5 from "../../assets/c5.png"
import sm_circle from "../../assets/Container.png"
import star from "../../assets/Star.png"
import sm_image from "../../assets/sm-Image Placeholder.png"
import Button from './Button'


const About = () => {
  return (
    <div className='bg-gray-800 mt-8'>
        <center>
            <div className='w-1/2 text-white font-semibold text-5xl leading-snug pt-24 pb-12'>What Are People Saying About Us</div>
        </center>
        <div className='px-32 flex gap-4 pb-36'>
            <div className='w-1/2 bg-white flex gap-6 p-10 rounded-lg'>
                <div className='flex justify-center'>
                    <img src={sm_image} alt="placeholder" />
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <div className='flex gap-2 pb-4'>
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                    </div>
                    <h1 className='font-medium text-2xl'>Great Design!</h1>
                    <p className='opacity-80 py-4'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img src={sm_circle} alt="placeholder" />
                        </div>
                        <div>
                            <h1 className='font-medium text-lg opacity-80'>Mang Oleh</h1>
                            <p className='opacity-60'>Product Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/4 bg-white p-10 rounded-lg'>
                <h1 className='font-medium text-2xl text-center'>Great Design!</h1>
                <p className='opacity-80 text-center py-6'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
                <div className='flex justify-center gap-2 pb-6'>
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <div>
                        <img src={sm_circle} alt="placeholder" />
                    </div>
                    <div>
                        <h1 className='font-medium text-lg opacity-80'>Mang Oleh</h1>
                        <p className='opacity-60'>Product Designer</p>
                    </div>
                </div>
            </div>
            <div className='w-1/4 bg-white p-10 rounded-lg'>
                <h1 className='font-medium text-2xl text-center'>Great Design!</h1>
                <p className='opacity-80 text-center py-6'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
                <div className='flex justify-center gap-2 pb-6'>
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                    <img src={star} alt="Star icon" />
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <div>
                        <img src={sm_circle} alt="placeholder" />
                    </div>
                    <div>
                        <h1 className='font-medium text-lg opacity-80'>Mang Oleh</h1>
                        <p className='opacity-60'>Product Designer</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-10 px-32'>
            <center>
                <div>
                    <img src={media} alt="company logo" />
                </div>
            </center>
            <div className='flex justify-between items-center pb-24'>
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
        <div className='h-screen relative'>
            <div className='w-[72%] bg-gray-400 h-screen'></div>
            <div className='bg-white w-[500px] flex flex-col justify-center items-center px-10 py-20 rounded-xl absolute top-24 right-32'>
                <center>
                    <h1 className='font-semibold text-6xl pb-6'>Wanna try our resource?</h1>
                </center>
                <center className='text-lg font-light pb-10 p-4'>What a brand new resource, You can try our resource and explore how it works</center>
                <div className='flex gap-4'>
                    <Button svg="checkcircle" text="View on App Store" color="blue" />
                    <Button svg="chevronright" text="View on Google Play" color="blue" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About