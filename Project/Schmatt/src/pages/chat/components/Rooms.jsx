import React from 'react'
import RoomButton from './RoomButton'

const Rooms = () => {
  return (
    <div className=' w-1/5 h-full border-border-color border-r-2 '>
      {/* room/new person tab */}
      <form className=' bg-delif-blue py-4 px-2 rounded-lg border-border-color border-[1px]'>
        <input className='bg-delif-blue' type='text' placeholder='New room...' />
        <button className=' bg-iris w-1/3 rounded-md ' type='submit'>Create</button>
      </form>
      <form className=' bg-delif-blue py-4 px-2 rounded-lg border-border-color border-[1px] mt-1 '>
        <input className='bg-delif-blue' type='text' placeholder='New person...' />
        <button className=' bg-iris w-1/3 rounded-md ' type='submit'>Add</button>
      </form>

      {/* rooms */}
      <RoomButton />
    </div>
  )
}

export default Rooms