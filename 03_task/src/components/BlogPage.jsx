import React from 'react'
import BlogCard from './Basic/BlogCard'
import { SlMagnifier } from 'react-icons/sl'
import square from '../assets/square.png'
import PaginateBlogCard from './Basic/PaginateBlogCard'

const BlogPage = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <h1 className='font-semibold text-5xl text-center pt-20 pb-8 opacity-90'>About Us</h1>
        <p className='text-center text-lg opacity-80 w-1/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since.</p>
      </div>
      <div className='flex gap-20 mt-16'>
        <div className='w-3/5 ml-24'>
          <div className='flex flex-col gap-12'>
            <PaginateBlogCard />
          </div>
        </div>
        <div className='w-2/5 mr-24 flex flex-col gap-20'>
          <div className='flex flex-col gap-2'>
            <p className='font-medium opacity-70'>Search</p>
            <div className='w-4/5 flex items-center border-[1px] border-slate-400 rounded-lg pr-4'>
              <input className='w-full py-2 px-2' type="text" placeholder='Search here...' />
              <SlMagnifier className='opacity-70' size={20} color='gray' />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-medium'>Categories</h1>
            <div className='text-blue-500 font-medium flex flex-col gap-3'>
              <p className='cursor-pointer'>Artificial Intelligence (3)</p>
              <p className='cursor-pointer'>Augmented Reality (4)</p>
              <p className='cursor-pointer'>Development (10)</p>
              <p className='cursor-pointer'>Startup (5)</p>
              <p className='cursor-pointer'>Technology (12)</p>
              <p className='cursor-pointer'>UI/UX Designs (2)</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-medium opacity-90'>Recent Post</h1>
            <div className='flex gap-6 itmes-center'>
              <div>
                <img width={100} src={square} alt="placeholder" />
              </div>
              <h2 className='w-4/5 self-center font-medium text-lg opacity-90'>How to make website look more attractive with illustrations.</h2>
            </div>
            <div className='flex gap-6 itmes-center'>
              <div>
                <img width={100} src={square} alt="placeholder" />
              </div>
              <h2 className='w-4/5 self-center font-medium text-lg opacity-90'>How to make website look more attractive with illustrations.</h2>
            </div>
            <div className='flex gap-6 itmes-center'>
              <div>
                <img width={100} src={square} alt="placeholder" />
              </div>
              <h2 className='w-4/5 self-center font-medium text-lg opacity-90'>How to make website look more attractive with illustrations.</h2>
            </div>
            <div className='flex gap-6 itmes-center'>
              <div>
                <img width={100} src={square} alt="placeholder" />
              </div>
              <h2 className='w-4/5 self-center font-medium text-lg opacity-90'>How to make website look more attractive with illustrations.</h2>
            </div>
          </div>
          <div>
            <h1 className='font-medium'>Tags</h1>
            <div className='p-6 w-full flex flex-col gap-6 font-medium opacity-80'>
              <div>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>popular</span>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Design</span>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Development</span>
              </div>
              <div>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Source code</span>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Devops</span>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Color</span>
              </div>
              <div>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>SEO</span>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Marketing</span>
                <span className='py-2 px-3 bg-gray-50 rounded-full mr-4'>Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage