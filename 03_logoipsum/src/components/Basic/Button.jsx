import React, { useEffect, useState } from 'react'
import CheckCircleSvg from './CheckCircleSvg'
import ChevronRightSvg from './ChevronRightSvg'

const Button = ({svg, text, color}) => {
    const [displayCircle, setDisplayCircle] = useState(false);
    useEffect(() => {
        if (svg === "checkcircle") {
            setDisplayCircle(true);
        } else {
            setDisplayCircle(false);
        }
    }, [svg]);
  return (
        <button className='bg-transparent border-white border-[1px] text-white px-3 py-2 flex items-center gap-3 rounded-lg text-md' style={{borderColor: `${color}`, color: `${color}`}}>
            {displayCircle ? <CheckCircleSvg color={color || "white"} /> : <ChevronRightSvg color={color || "white"} />}
            <p>{text}</p>
        </button>
  )
}

export default Button