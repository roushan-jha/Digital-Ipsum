import arrow from '../../assets/Arrow.png'

const Button = ({text, bcolor, tcolor}) => {
  
  return (
    <div className='flex justify-between items-center py-2 w-44 pr-2 pl-4 
    rounded-full border-2 border-slate-200' style={{backgroundColor: `${bcolor}`, color:`${tcolor}`}} >
        <div className='text-sm font-medium font-satoshi'>{text}</div>
        <div className='flex justify-end'>
            <img src={arrow} alt="Arrow Image" className='w-[40px]' />
        </div>
    </div>
  )
}

export default Button