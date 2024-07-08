import React from 'react'

const Details = ({image, coin, symbol, type, price, quantity, totalPrice}) => {
  return (
    <div className='flex justify-between items-center bg-slate-100 p-2 rounded-md'>
        <div className='flex gap-3 items-center'>
            <div>
                <img src={image} alt={coin} />
            </div>
            <div>
                <h1 className='font-medium'>{coin}</h1>
                <p className='text-sm opacity-80'>{symbol}</p>
            </div>
        </div>
        {
            type == 'Buy' ? (<p className='text-[#00E396] px-3 text-center'>Buy</p>) : (<p className='text-red-500 bg-red-100 rounded-xl px-3 text-center'>Sell</p>)
        }
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{totalPrice}</p>
    </div>
  )
}

export default Details