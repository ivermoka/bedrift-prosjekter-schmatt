import React from "react";
import Rooms from "./components/Rooms";
import SendMessage from "./components/sendMessage";
import Message from "./components/Message";
import Chat from "./components/Chat";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Navbar from "../navbar/navbar";
import UsernameList from "./components/UsernameList";
import { ref } from "firebase/storage";

const index = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      console.log(messages);
    });
    return () => unsubscribe();
  }, []);

  const [selectedRoom, setSelectedRoom] = useState("General");

  const [refresh, setRefresh] = useState(false); //Rendere messages

  return (
    <>
      <div className="overflow-hidden max-h-screen">
        <Navbar />
        <div className="mt-14 w-screen h-screen bg-rich-black flex flex-row">
          <Rooms
            refresh={refresh}
            setRefresh={setRefresh}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
          <Chat
            selectedRoom={selectedRoom}
            refresh={refresh}
            setRefresh={setRefresh}
          />
          <UsernameList />
        </div>
      </div>
    </>
  );
};

export default index;
