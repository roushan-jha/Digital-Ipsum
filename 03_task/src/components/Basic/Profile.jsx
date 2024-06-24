import React from 'react'
import square from "../../assets/square.png"


const Profile = () => {
  return (
    <div className='flex gap-4 items-center bg-gray-50 p-4'>
        <div>
            <img src={square} alt="placeholder" />
        </div>
        <div>
            <h1 className='font-semibold text-xl opacity-90'>Andrew Collighman</h1>
            <p className='opacity-70'>Front end developer</p>
        </div>
    </div>
  )
}

export default Profile