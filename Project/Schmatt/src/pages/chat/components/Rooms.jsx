import React from "react";
import RoomButton from "./RoomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Rooms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      roomName: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Room created! Name:", data.roomName);
  };
  return (
    <div className=" w-1/5 h-full border-border-color border-r-2 ">
      {/* room/new person tab */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-common py-4 px-2 rounded-lg border-border-color border-[1px]"
      >
        <input
          className="bg-common"
          type="text"
          placeholder="New room..."
          {...register("roomName", { required: "Provide room name" })}
        />
        <button className=" bg-button-active w-1/3 rounded-md " type="submit">
          Create
        </button>
      </form>
      <form className=" bg-common py-4 px-2 rounded-lg border-border-color border-[1px] mt-1 mb-5">
        <input className="bg-common" type="text" placeholder="New person..." />
        <button className=" bg-button-active w-1/3 rounded-md " type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Rooms;
