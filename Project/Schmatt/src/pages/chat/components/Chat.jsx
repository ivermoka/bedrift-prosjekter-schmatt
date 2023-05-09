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
  limit,
} from "firebase/firestore";
import { ref } from "firebase/storage";

const Chat = ({ selectedRoom, refresh, setRefresh }) => {
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);

  const chatRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("room", "==", selectedRoom),
      orderBy("timestamp"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setRefresh(!refresh);
      chatRef.current.scrollIntoView({ behavior: "smooth" });
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      setNumMessages(messages.length);
    });
    return () => unsubscribe();
  }, [selectedRoom, refresh, numMessages]);

  return (
    <>
      <div
        className="overflow-scroll w-[65%] border-r-[1px] border-border-color min-h-full flex flex-col pb-12 pt-10"
        ref={chatRef}
      >
        <div className="pb-20">
          {messages.map((message) =>
            message.room === selectedRoom ? (
              <Message key={message.id} message={message} />
            ) : null
          )}
        </div>

        <SendMessage
          selectedRoom={selectedRoom}
          refresh={refresh}
          setRefresh={setRefresh}
        />
        <span ref={chatRef}></span>
      </div>
    </>
  );
};

export default Chat;
