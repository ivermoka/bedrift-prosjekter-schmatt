import React from "react";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Navbar from "../navbar/navbar";
import UsernameList from "./components/UsernameList";
import { ref } from "firebase/storage";
import { useRef } from "react";
import RoomAlreadyExistsPopup from "./../../dialog/room-popup";

const index = () => {
  const [roomPopupIsOpen, setRoomPopupIsOpen] = useState(false); //Room already exists popup state
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const [selectedRoom, setSelectedRoom] = useState("General");

  const [refresh, setRefresh] = useState(false); //Rendere messages

  return (
    <>
      <RoomAlreadyExistsPopup
        roomPopupIsOpen={roomPopupIsOpen}
        setRoomPopupIsOpen={setRoomPopupIsOpen}
      />
      <div className="overflow-hidden max-h-screen">
        <Navbar />
        <div className="mt-14 w-screen h-screen bg-rich-black flex flex-row">
          <Rooms
            refresh={refresh}
            setRefresh={setRefresh}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            scrollRef={scrollRef}
            setRoomPopupIsOpen={setRoomPopupIsOpen}
          />
          <Chat
            selectedRoom={selectedRoom}
            refresh={refresh}
            setRefresh={setRefresh}
            scrollRef={scrollRef}
          />
          <UsernameList />
        </div>
      </div>
    </>
  );
};

export default index;
