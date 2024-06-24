import React, { useState } from 'react'
import { SlMagnifier } from "react-icons/sl";
import { Link } from "react-router-dom"
import location_icom from '../assets/location_on.png'
import blue_circle from '../assets/blue Icon placeholder.png'
import map_illustration from '../assets/Map Illustration.png'

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name}, You sent a message ✉️`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <div className='mt-16'>
        <div className='flex flex-col items-center'>
          <h1 className='font-semibold text-5xl text-center opacity-80 py-8'>Frequently Asked Questions</h1>
          <p className='text-center opacity-70 w-2/5 pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quos quod id? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <center>
          <div className='bg-gray-200 px-6 rounded-xl w-1/2 flex  justify-center items-center mt-8'>
            <input className='w-full p-4 bg-gray-200' type="text" placeholder='Search' />
            <SlMagnifier className='opacity-70' size={20} color='gray' />
          </div>
        </center>
      </div>
      <div className='flex flex-col items-center mt-16'>
        <div className='w-1/2 flex justify-around'>
          <Link className='w-28 text-center px-3 py-2 bg-blue-500 text-white rounded-xl' to={"/contact/general"}>General</Link>
          <Link className='w-28 text-center px-3 py-2 opacity-70 rounded-xl' to={"/contact/payment"}>Payments</Link>
          <Link className='w-28 text-center px-3 py-2 opacity-70 rounded-xl' to={"/contact/service"}>Services</Link>
          <Link className='w-28 text-center px-3 py-2 opacity-70 rounded-xl' to={"/contact/refund"}>Refund</Link>
          <Link className='w-28 text-center px-3 py-2 opacity-70 rounded-xl' to={"/contact/other"}>Other</Link>
        </div>
        <div className='w-4/5 mt-20 flex gap-8'>
          <div className='w-1/2 flex flex-col gap-6'>
            <div className='flex flex-col gap-4 py-4 pl-4 pr-20 rounded-xl bg-gray-50'>
              <h1 className='font-medium text-opacity-90'>What services does TanahAir Offer?</h1>
              <p className='text-opacity-70'>TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.
              </p>
            </div>
            <div className='flex flex-col gap-4 py-4 pl-4 pr-20 rounded-xl bg-gray-50'>
              <h1 className='font-medium text-opacity-90'>What services does TanahAir Offer?</h1>
              <p className='text-opacity-70'>TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.
              </p>
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-6'>
            <div className='flex flex-col gap-4 py-4 pl-4 pr-16 rounded-xl bg-gray-50'>
              <h1 className='font-medium text-opacity-90 pr-2'>Why should i choose a Design studio like TanahAir over full-service agency?</h1>
              <p className='text-opacity-70'>Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer
              </p>
            </div>
            <div className='flex flex-col gap-4 py-4 pl-4 pr-16 rounded-xl bg-gray-50'>
              <h1 className='font-medium text-opacity-90 pr-2'>Why should i choose a Design studio like TanahAir over full-service agency?</h1>
              <p className='text-opacity-70'>Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 mt-24 text-white flex flex-col items-center pb-20'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-semibold text-5xl text-center pt-20'>Can't find what you're looking for?</h1>
          <p className='w-2/5 text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas reiciendis debitis! Facilis culpa molestias vitae!</p>
        </div>
        <form onSubmit={handleSubmit} className='w-1/2 p-4 mt-10 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <p>Name</p>
            <input value={name} onChange={(e) => setName(e.target.value)} className='w-full px-6 py-3 border-[1px] border-slate-400 rounded-lg bg-gray-900' type="text" placeholder='Enter your name' />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Email</p>
            <input vlaue={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-6 py-3 border-[1px] border-slate-400 rounded-lg bg-gray-900' type="text" placeholder='Enter your email' />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Message</p>
            <textarea vlaue={message} onChange={(e) => setMessage(e.target.value)} className='w-full px-6 py-3 border-[1px] border-slate-400 rounded-lg bg-gray-900' type="text" placeholder='Write your message' name="message"></textarea>
          </div>
          <div className='w-full flex justify-end items-center'>
            <button type='submit' className='bg-blue-500 text-sm rounded-lg px-3 py-2'>Send Message</button>
          </div>
        </form>
      </div>
      <div className='h-[460px] bg-auto bg-no-repeat relative' style={{backgroundImage: `url(${map_illustration})`}} >
        <div className='absolute left-[620px] top-32'>
          <img src={location_icom} alt="Location icon" />
        </div>
        <div className='bg-white absolute bottom-8 right-14 w-[540px] h-[120px] flex justify-between items-center rounded-xl pl-4 pr-6 py-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm opacity-55'>Map street</p>
            <h1 className='text-2xl font-medium opacity-90'>John Bucarest St. 199</h1>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-6'>
              <div className='flex gap-2'>
                <div className='w-[22px]'>
                  <img src={blue_circle} alt="placeholder" />
                </div>
                <p className='font-medium'>Facebook</p>
              </div>
              <div className='flex gap-2'>
                <div className='w-[22px]'>
                  <img src={blue_circle} alt="placeholder" />
                </div>
                <p className='font-medium'>Instagram</p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='flex gap-2'>
                <div className='w-[22px]'>
                  <img src={blue_circle} alt="placeholder" />
                </div>
                <p className='font-medium'>Dribbble</p>
              </div>
              <div className='flex gap-2 pl-2'>
                <div className='w-[22px]'>
                  <img src={blue_circle} alt="placeholder" />
                </div>
                <p className='font-medium'>Behance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage