import SendMessage from './SendMessage';
import Message from './Message';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react'
import { db } from '../../../firebase-config';
import {query, collection, orderBy, onSnapshot} from "firebase/firestore" ; 



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      console.log(messages)
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
        <div className=' overflow-scroll w-[65%] border-r-[1px] border-border-color min-h-full flex flex-col pb-12 pt-10'>
            
          {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          
          
          <SendMessage scroll={scroll} />
          <span ref={scroll}></span>
          
        </div>
    </>
  )
}

export default Chat;