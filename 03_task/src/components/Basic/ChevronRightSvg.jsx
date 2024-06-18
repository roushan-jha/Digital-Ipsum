import React from 'react'

const ChevronRightSvg = ({color}) => {
  
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 20C4.986 20 0.5 15.514 0.5 10C0.5 4.486 4.986 0 10.5 0C16.014 0 20.5 4.486 20.5 10C20.5 15.514 16.014 20 10.5 20ZM10.5 2C6.089 2 2.5 5.589 2.5 10C2.5 14.411 6.089 18 10.5 18C14.911 18 18.5 14.411 18.5 10C18.5 5.589 14.911 2 10.5 2ZM7.793 13.293L9.207 14.707L13.914 10L9.207 5.293L7.793 6.707L11.086 10L7.793 13.293Z" fill={color} />
    </svg>
  )
}

export default ChevronRightSvg