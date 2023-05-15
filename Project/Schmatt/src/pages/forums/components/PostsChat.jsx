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
  const forum = selectedForum
  
  useEffect(() => {
    const q = query(
      collection(db, "forum-posts"),
      where("forum", "==", forum),
      orderBy("score")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, [forum, refresh]);

  return (
    <div className="flex gap-6 flex-col-reverse">
      {messages.map((message) =>
        message.forum === forum ? (
          <ForumPost title={message.title} content={message.textContent} selectedForum={selectedForum} key={message.id} message={message} />
        ) : null
      )}
    </div>
  )
}

export default PostsChat
