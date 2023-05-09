import React from "react";
import { useState } from "react";

const RoomButton = ({ setSelectedRoom, room, refresh, setRefresh, ref }) => {
  function handleRoomClick() {
    setSelectedRoom(room);
    setRefresh(!refresh);
  }

  const [button, setButton] = useState(true);

  const buttonClass = button
    ? "bg-common text-white scale-x-100 duration-75"
    : " scale-x-[109%] translate-x-4 duration-75 p-5 rounded-sm";
  return (
    <button
      id="room-button"
      onClick={handleRoomClick}
      className={` bg-common relative border-[1px] duration-100 border-border-color w-[90%] p-5 rounded-sm active:scale-x-[109%] active:translate-x-4 active:bg-button-active `}
    >
      <p>{room}</p>
    </button>
  );
};

export default RoomButton;
