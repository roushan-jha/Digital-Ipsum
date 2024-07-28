import React from 'react'

const FeaturedProperties = () => {
  return (
    <div className="px-32 bg-slate-200 flex justify-between">
        <div className="w-2/5 h-[80vh] bg-primary"></div>
        <div className="w-3/5 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">Featured Properties</h2>
              <p className="opacity-60 text-sm">
                Faucibus massa lorem purus sit in nunc.
              </p>
            </div>
            <div className="h-[1px] bg-primary bg-opacity-10"></div>
            <div className="flex flex-col gap-2">
              <button className="w-[30%] bg-secondary px-6 py-2 font-medium text-sm rounded-md">
                For Sale
              </button>
              <div className="flex justify-between items-center gap-6">
                <div>
                  <h3 className="font-medium text-xl">
                    Luxurious Modern House
                  </h3>
                  <p className="text-sm opacity-60">36 Future, CO</p>
                </div>
                <p className="font-semibold text-3xl">$ 4,490</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/3 h-[150px] bg-white rounded-md text-sm flex justify-center items-end pb-3 opacity-60">
                3 Beds
              </div>
              <div className="w-1/3 h-[150px] bg-white rounded-md text-sm flex justify-center items-end pb-3 opacity-60">
                3 Baths
              </div>
              <div className="w-1/3 h-[150px] bg-white rounded-md text-sm flex justify-center items-end pb-3 opacity-60">
                800 sqft
              </div>
            </div>
            <button className="w-2/3 px-6 py-3 bg-primary text-white font-medium rounded-md">
              Schedule A Tour
            </button>
          </div>
        </div>
      </div>
  )
}

export default FeaturedProperties