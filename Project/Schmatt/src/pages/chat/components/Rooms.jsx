import React from "react";
import RoomButton from "./RoomButton";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase-configSchmatt";
import handler from "@/pages/api/helloSchmatt";
import { ref } from "firebase/storage";

const Rooms = ({
  selectedRoom,
  setSelectedRoom,
  refresh,
  setRefresh,
  scroll,
  setRoomPopupIsOpen,
}) => {
  const [input, setInput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      roomName: "",
    },
  });

  const [nameOfRoom, setNameOfRoom] = useState("");

  const onSubmit = async (data, e) => {
    e.preventDefault();

    // Sjekker om rom navnet allerede er der
    const roomQuery = query(
      collection(db, "rooms"),
      where("displayName", "==", data.roomName)
    );
    const roomQuerySnapshot = await getDocs(roomQuery);
    if (!roomQuerySnapshot.empty) {
      setRoomPopupIsOpen(true);
      return;
    }

    // Create the new room
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    console.log("Room created! Name:", data.roomName);
    if (input === "General") {
      alert("Cannot make new general room.");
      return;
    }
    await addDoc(collection(db, "rooms"), {
      displayName: data.roomName,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "rooms"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let rooms = [];
      querySnapshot.forEach((doc, data) => {
        rooms.push({ ...doc.data(), id: doc.id });
      });
      setRooms(rooms);
      console.log(nameOfRoom);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className=" w-1/5 h-full border-border-color border-r-2 ">
      <p className="p-2 bg-common border-t border-border-color">Current room: {selectedRoom}</p>
      {/* room/new person tab */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-common py-4 px-2 rounded-b-lg mb-1 border-border-color border-[1px]"
      >
        <input
          className="bg-common"
          type="text"
          placeholder="New room..."
          {...register("roomName", { required: "Provide room name" })}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" bg-button-active w-1/3 rounded-md " type="submit">
          Create
        </button>
      </form>
      {/* removed until private rooms are made. */}
      {/* <form className=" bg-common py-4 px-2 rounded-lg border-border-color border-[1px] mt-1 mb-5">
        <input className="bg-common" type="text" placeholder="New person..." />
        <button className=" bg-button-active w-1/3 rounded-md " type="submit">
          Add
        </button>
      </form> */}
      <RoomButton 
        room="General"
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
        refresh={refresh}
        setRefresh={setRefresh}
        scroll={scroll} 
      />
      {rooms.map((room) => (
        <RoomButton
          room={room.displayName}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          refresh={refresh}
          setRefresh={setRefresh}
          scroll={scroll}
        />
      ))}
    </div>
  );
};

export default Rooms;
