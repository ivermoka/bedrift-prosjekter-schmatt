import React from "react";
import { useState } from "react";

const RoomButton = ({ setSelectedRoom, selectedRoom, room, cum }) => {
  function handleRoomClick() {
    console.log(selectedRoom);
    setSelectedRoom(room);
  }

  const [button, setButton] = useState(true);

  function changeButton() {
    setButton((button) => !button);
  }

  const buttonClass = button
    ? "bg-common text-white scale-x-100 duration-75"
    : " scale-x-[109%] translate-x-4 duration-75 p-5 rounded-sm";
  return (
    <button
      id="room-button"
      onMouseEnter={handleRoomClick}
      onMouseOver={cum}
      className={`relative border-[1px] border-border-color w-[90%] p-5 bg-button-active rounded-sm ${buttonClass}`}
    >
      <p>{room}</p>
    </button>
  );
};

export default RoomButton;
