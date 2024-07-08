import React from 'react'
import Details from './Details'
import binance from '../../assets/binance.png'
import bitcoin from '../../assets/bitcoin.png'
import etherum from '../../assets/etherum.png'




const RevenueDetails = () => {
  return (
    <div className='mt-6 flex flex-col gap-3'>
        <div className='flex justify-between text-sm opacity-80 px-2'>
            <h5>Token Name</h5>
            <h5>Type</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Total Price</h5>
        </div>
        <div className='flex flex-col gap-2'>
            <Details image={binance} coin={'Binance'} symbol={'BNB'} type='Buy' price={'$132.05'} quantity={'1000'} totalPrice={'$132,000.60'} />
            <Details image={etherum} coin={'Etherum'} symbol={'ETH'} type='Buy' price={'$52,000.05'} quantity={'51'} totalPrice={'$62,415.60'} />
            <Details image={bitcoin} coin={'Bitcoin'} symbol={'BTC'} type='Sell' price={'$132.05'} quantity={'0.4'} totalPrice={'$24,000.60'} />
            <Details image={etherum} coin={'Etherum'} symbol={'ETH'} type='Buy' price={'$1510.05'} quantity={'51'} totalPrice={'$62,415.60'} />
        </div>
    </div>
  )
}

export default RevenueDetails