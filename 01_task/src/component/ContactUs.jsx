import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full'>
        <div className='text-center'>
            <h1 className='font-medium text-3xl pb-4'>Let's get in Touch</h1>
            <p className='font-light text-md'>Far far away, behind the word mountains, far from the countries</p>
            <p className='font-light text-md'>Vokalia and Consonantia, there lives the blind texts.</p>
        </div>
        <div className='w-full relative px-20'>
            <div className='p-10 w-full flex justify-end relative z-40'>
                <form className='px-8 pb-10 flex flex-col gap-4 w-1/2 border-b-4 border-b-blue-500 bg-white shadow-lg rounded-sm'>
                    <input type="text" placeholder='Email address' className='p-3 rounded-xl border-gray-300 border-2' />
                    <input type="text" placeholder='Subject' className='p-3 rounded-xl border-gray-300 border-2' />
                    <textarea name="message" id="message" placeholder="Your Message" className='p-3 rounded-xl border-gray-300 border-2 h-32' ></textarea>
                    <button className='bg-blue-600 text-white text-md px-10 py-3 w-48 shadow-lg shadow-blue-400 rounded-md mt-4 hover:bg-blue-400'>Send Message</button>
                </form>
            </div>
            <div className='w-full flex justify-start left-0 top-0 z-30 absolute'>
                <img src="src\assets\Illustration-3.png" width={'43%'} alt="Illustration-1"/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs