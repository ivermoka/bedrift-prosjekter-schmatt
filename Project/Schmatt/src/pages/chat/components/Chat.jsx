import SendMessage from "./SendMessage";
import Message from "./Message";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

const Chat = ({ selectedRoom }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("room", "==", selectedRoom),
      orderBy("timestamp")
    );
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
  return (
    <>
      <div className=" overflow-scroll w-[65%] border-r-[1px] border-border-color min-h-full flex flex-col pb-12 pt-10">
        <div className=" pb-20">
          {messages.map((message) => (
            message.room === selectedRoom
              ? (<Message key={message.id} message={message} />) 
              : null
          ))}
        </div>

        <SendMessage scroll={scroll} selectedRoom={selectedRoom} />
        <span ref={scroll}></span>
      </div>
    </>
  );
};

export default Chat;
