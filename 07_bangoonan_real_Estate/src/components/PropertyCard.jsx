import React from 'react'
import ArrowRight from '../svg/ArrowRight'

const PropertyCard = ({tag}) => {
  return (
    <div className='w-1/4 flex flex-col rounded-xl border-[1px] border-slate-200'>
        <div className='w-full relative'>
            <div className='w-full rounded-t-xl h-[200px] bg-primary'></div>
            <div className='absolute top-4 left-4'>
                <Tag tag={tag} />
            </div>
        </div>
        <div className='h-auto flex flex-col gap-2 px-3 py-6'>
            <p className='text-sm'>$4,980</p>
            <h3 className='font-medium'>Stunning Oceanfront Condo</h3>
            <p className='opacity-60 text-sm'>12 Miami Beach, FL</p>
            <div className='flex justify-between gap-2'>
                <div className='flex items-center gap-[2px]'>
                    <ArrowRight />
                    <p className='text-sm'>2 Beds</p>
                </div>
                <div className='flex items-center gap-[2px]'>
                    <ArrowRight />
                    <p className='text-sm'>2 Beds</p>
                </div>
                <div className='flex items-center gap-[2px]'>
                    <ArrowRight />
                    <p className='text-sm'>2 Beds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

const Tag = ({tag}) => {
    return (
        <div className='w-auto text-sm text-center px-3 py-[2px] rounded-md bg-secondary'>For {tag}</div>
    )
}

export default PropertyCard