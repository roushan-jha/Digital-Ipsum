import arrow from '../../assets/Arrow.png'

const Button = ({text, bcolor, tcolor}) => {
    
  return (
    <div className='flex justify-between items-center py-2 pr-2 pl-4 w-40 
    rounded-3xl border-2 border-slate-200' style={{backgroundColor: `${bcolor}`, color:`${tcolor}`}} >
        <div className='text-sm font-medium font-satoshi'>{text}</div>
        <div className='flex justify-end'>
            <img src={arrow} alt="Arrow Image" className='w-1/2' />
        </div>
    </div>
  )
}

export default Button