import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PaginateBlogCard = () => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        selectPageHandler(page);
    }, [page])

    const renderBlogCard = ({item}) => {
        return (
            <div key={item}>
                <BlogCard />
            </div>
        )
    }

    const selectPageHandler = ({selectedPage}) => {
        if(
            selectedPage >= 1 &&
            selectedPage <= items.length / 3 &&
            selectedPage !== page
        )
        setPage(selectedPage);
    }

  return (
    <>
      {items.length > 0 && (
        items.slice(page * 3 - 3, page * 3).map((item) => {
            return renderBlogCard(item)
          })
      )}
      {
        items.length > 0 && (
            <div className='w-full flex justify-end items-center gap-8 p-2'>
                <span onClick={() => selectPageHandler(page - 1)} className={`font-medium opacity-90 cursor-pointer text-blue-500 ${page > 1 ? "": "opacity-0"}`}>Previous</span>
                {
                    [...Array(items.length / 3)].map((_, i) => {
                        return (
                            <span className={`cursor-pointer ${page === (i+1) ? "py-2 px-4 bg-blue-500 rounded-lg": " "}`} onClick={() => selectPageHandler(i + 1)} key={i}>{i + 1}</span>
                        )
                    }) 
                }
                <span onClick={() => selectPageHandler(page + 1)} className={`font-medium opacity-90 cursor-pointer text-blue-500 ${page < items.length / 3 ? "": "opacity-0"}`}>Next</span>
            </div>
        )
      }  
    </>
  )
}

export default PaginateBlogCard