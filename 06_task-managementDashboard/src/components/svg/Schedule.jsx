import React from 'react'

const Schedule = ({color}) => {
  return (
    <div>
      <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.49821 0C5.9855 0 5.56988 0.415619 5.56988 0.928331V3.78494H7.42648V0.928331C7.42648 0.415619 7.01087 0 6.49821 0Z" fill={color}/>
        <path d="M19.4946 0C18.9819 0 18.5662 0.415619 18.5662 0.928331V3.78494H20.4228V0.928331C20.4229 0.415619 20.0073 0 19.4946 0Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4229 3.78494H23.2078C24.7459 3.78494 25.9928 5.0318 25.9928 6.56988V24.2078C25.9928 25.7459 24.7459 26.9928 23.2078 26.9928H2.78494C1.24686 26.9928 0 25.7459 0 24.2078V6.56988C0 5.0318 1.24686 3.78494 2.78494 3.78494H5.56982V7.49821C5.56982 8.01092 5.98544 8.42654 6.49815 8.42654C7.01086 8.42654 7.42648 8.01092 7.42648 7.49821V3.78494H18.5662V7.49821C18.5662 8.01092 18.9818 8.42654 19.4946 8.42654C20.0073 8.42654 20.4229 8.01092 20.4229 7.49821V3.78494ZM23.2078 25.1362C23.7205 25.1362 24.1361 24.7205 24.1361 24.2078V12.1398H1.85661V24.2078C1.85661 24.7205 2.27223 25.1362 2.78494 25.1362H23.2078Z" fill={color}/>
      </svg>
    </div>
  )
}

export default Schedule