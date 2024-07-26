import React from 'react'

const Overview = () => {
  return (
    <div className='p-32 font-primary'>
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between gap-40 items-center'>
                <div className='w-2/5 flex flex-col gap-2 self-start'>
                    <h1 className='font-semibold text-3xl'>Your Trusted Partner in Real Estate</h1>
                    <p className='opacity-60'>Posuere id quam lorem dignissim.</p>
                </div>
                <div className='w-3/5 flex flex-col gap-6'>
                    <p className='font-medium text-sm'>Integer metus eros diam in commodo erat felis. Lorem scelerisque mattis scelerisque ut fames sit. Eget in risus aliquam pulvinar tempor. Tristique sed aliquam eget lorem id et fringilla placerat lobortis.</p>
                    <p className='font-medium text-sm'>Netus posuere sit pretium viverra in id. Mi nec turpis fermentum diam dolor varius. Diam sed nulla nunc ornare lacus a molestie. Amet gravida in dignissim sit erat nisl. Fermentum eu in velit pharetra tincidunt arcu. Lobortis in convallis blandit tellus sit accumsan vitae. Commodo.</p>
                </div>
            </div>
            <div className='h-[1px] bg-primary bg-opacity-10'></div>
            <div className='flex justify-between gap-16 items-center'>
                <div className='w-1/2 h-[260px] bg-primary rounded-xl'></div>
                <div className='w-1/2 h-[260px] flex flex-col justify-center gap-6'>
                    <h3 className='font-medium text-2xl'>Our Expertise</h3>
                    <div className='flex flex-col gap-3'>
                        <div className='w-4/5 flex justify-between items-center hover:bg-slate-100 bg-gray-200 bg-opacity-50 px-4 py-3 rounded-md font-medium'>
                            <p>Real Estate Investment</p>
                            <span className='px-[4px] py-[2px] text-sm bg-secondary rounded-md'>90%</span>
                        </div>
                        <div className=' w-4/5 flex justify-between items-center hover:bg-slate-100 bg-gray-200 bg-opacity-50 px-4 py-3 rounded-md font-medium'>
                            <p>Property Management</p>
                            <span className='px-[4px] py-[2px] text-sm bg-secondary rounded-md'>96%</span>
                        </div>
                        <div className=' w-4/5 flex justify-between items-center hover:bg-slate-100 bg-gray-200 bg-opacity-50 px-4 py-3 rounded-md font-medium'>
                            <p>Real Estate Consulting</p>
                            <span className='px-[4px] py-[2px] text-sm bg-secondary rounded-md'>90%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview