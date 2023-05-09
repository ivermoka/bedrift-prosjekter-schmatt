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
import ForumPost from "./ForumPost";

const PostsChat = ({selectedForum, refresh}) => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "forum-posts"),
      where("forum", "==", selectedForum),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, [selectedForum, refresh]);
  return (
    <div>
      {messages.map((message) =>
        message.room === selectedForum ? (
          <ForumPost selectedForum={selectedForum} key={message.id} message={message} />
        ) : null
      )}
    </div>
  )
}

export default PostsChat