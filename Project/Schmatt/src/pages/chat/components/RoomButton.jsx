import React from 'react'
import { useState } from 'react';

const RoomButton = () => {
    const [button, setButton] = useState(true);

    function changeButton() {
        setButton(button =>!button)
    }

    const buttonClass = button ? 'bg-button-active text-white scale-x-100 duration-75' : 'w-[90%]  scale-x-102 duration-75 w-full mt-5 p-5 rounded-sm';
  return (
    <button onClick={changeButton} className={`mt-5 w-[90%] p-5 rounded-sm ${buttonClass}`}>
        <p>Placeholder</p>
    </button>
  )
}

export default RoomButton