import React from 'react'

const CheckCircleSvg = ({color}) => {
    
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 1.875C6.917 1.875 2.375 6.417 2.375 12C2.375 17.583 6.917 22.125 12.5 22.125C18.083 22.125 22.625 17.583 22.625 12C22.625 6.417 18.083 1.875 12.5 1.875ZM12.5 19.875C8.158 19.875 4.625 16.342 4.625 12C4.625 7.658 8.158 4.125 12.5 4.125C16.842 4.125 20.375 7.658 20.375 12C20.375 16.342 16.842 19.875 12.5 19.875ZM11.5 13.409L16.705 8.205L18.295 9.795L11.5 16.591L7.705 12.795L9.295 11.205L11.5 13.409Z" fill={color}/>
    </svg>
  )
}

export default CheckCircleSvg