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
  const forum = selectedForum.selectedForum
  
  useEffect(() => {
    console.log(forum);
    const q = query(
      collection(db, "forum-posts"),
      where("forum", "==", forum),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        console.log(doc);
        console.log("yoooooooooooooooo");
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    console.log(messages)
    return () => unsubscribe();
  }, [forum, refresh]);

  console.log(forum)

  return (
    <div>
      {messages.map((message) =>
        message.forum === forum ? (
          <ForumPost selectedForum={selectedForum} key={message.id} message={message} />
        ) : <p>hello</p>
      )}
    </div>
  )
}

export default PostsChat
