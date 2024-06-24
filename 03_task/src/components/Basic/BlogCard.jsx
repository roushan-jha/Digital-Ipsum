import React from 'react'
import rectangle from "../../assets/rectangle.png"
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import share from '../../assets/share.png'


const BlogCard = () => {
  return (
    <div>
        <img src={rectangle} alt="placeholder" />
        <div className='flex gap-3 items-center py-4'>
            <h1 className='font-medium opacity-80'>Development</h1>
            <p className='font-medium text-sm opacity-50'>23 September 2020</p>
        </div>
        <h1 className='font-semibold text-3xl pr-8 opacity-80'>How to make website look more attractive with illustrations</h1>
        <p className='py-4 opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, nesciunt aut? Excepturi voluptas numquam beatae reiciendis inventore laudantium consequuntur natus officia maiores aliquid debitis delectus animi corrupti unde ratione quo provident</p>
        <div className='flex gap-60 items-center'>
            <p className='text-blue-500 font-medium border-b-4 pb-[1px] border-blue-500'>Read more</p>
            <div className='flex gap-3'>
                <div>
                    <img src={like} alt="Like icon" />
                </div>
                <div>
                    <img src={comment} alt="Comment icon" />
                </div>
                <div>
                    <img src={share} alt="Share icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard