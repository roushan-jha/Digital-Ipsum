import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonClass = (buttonId) => {
    return activeButton === buttonId
      ? 'bg-black text-white'
      : 'opacity-90';
  };
  return (
    <div className='px-32 py-8 bg-primary text-white flex justify-between items-center font-primary'>
        <Link to={'/'} className='font-medium text-3xl'>BNGOON</Link>
        <div className='flex justify-between gap-4'>
            <Link onClick={() => handleButtonClick(1)} className={`${getButtonClass(1)} rounded-xl px-4 py-3`} to={"/"} >Home</Link>
            <Link onClick={() => handleButtonClick(2)} className={`${getButtonClass(2)} rounded-xl px-4 py-3`} to={"/about"} >About Us</Link>
            <Link onClick={() => handleButtonClick(3)} className={`${getButtonClass(3)} rounded-xl px-4 py-3`} to={"/property"} >Property</Link>
            <Link onClick={() => handleButtonClick(4)} className={`${getButtonClass(4)} rounded-xl px-4 py-3`} to={"/service"} >Services</Link>
            <Link onClick={() => handleButtonClick(5)} className={`${getButtonClass(5)} rounded-xl px-4 py-3`} to={"/agent"} >Agent</Link>
            <Link onClick={() => handleButtonClick(6)} className={`${getButtonClass(6)} rounded-xl px-4 py-3`} to={"/contact"} >Contact Us</Link>
        </div>
        <button className='px-4 py-3 bg-secondary rounded-md text-black'>Schedule a visit</button>
    </div>
  )
}

export default NavBar