import React from 'react'

const User = ({displayName}) => {
  
  return (
    <div className='mt-2 w-[95%] h-[50px] bg-common pl-4  flex p-1 items-center rounded-lg'>
      <img src={'userIcon_placeholder.png'} className='w-[40px] h-[40px] bg-white rounded-full'></img>
      <h1 className='pl-5'>
        {displayName}
      </h1>
      
      
    </div>
  )
}

export default User