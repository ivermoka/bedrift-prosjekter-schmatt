import React from 'react'
import RoomButton from './RoomButton'
import { useState } from 'react'

const Rooms = () => {
  const [rooms, setRooms] = useState(["Room 1", "Room 2", "Room 3"]);
  const [newRoomName, setNewRoomName] = useState("");

  function handleCreateRoom(e) {
    e.preventDefault();
    if (newRoomName.trim() === "") return;
  
    setRooms([...rooms, newRoomName]);
    setNewRoomName("");
    console.log(rooms, newRoomName)
  }


  return (
    
    <div className=' w-1/5 h-full border-border-color border-r-2 '>
      {/* room/new person tab */}
      <form  className=' bg-common py-4 px-2 rounded-lg border-border-color border-[1px]'>
        <input className='bg-common' type='text' id="new-room-name" value={newRoomName} onChange={(e) => setNewRoomName(e.target.value)} placeholder='New room...' />
        <button className=' bg-button-active w-1/3 rounded-md ' type='submit'>Create</button>
      </form>
      <form className=' bg-common py-4 px-2 rounded-lg border-border-color border-[1px] mt-1 mb-5'>
        <input className='bg-common' type='text' placeholder='New person...' />
        <button className=' bg-button-active w-1/3 rounded-md ' type='submit'>Add</button>
      </form>

      {/* rooms */}
      {rooms.map((roomName) => (
        <RoomButton key={roomName} />
      ))}
    </div>
  )
}

export default Rooms