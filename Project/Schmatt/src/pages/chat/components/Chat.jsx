import React, {useState, useEffect, useRef} from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../../../firebase';
import {query, collection, orderBy, onSnapshot} from "firebase/firestore" ; 

const style = {
  main: `flex flex-col p-[10px] relative min-h-[100vh] overflow-y-scoll`,
}

const Chat = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      console.log("test1")
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        console.log("test")
      });
      setMessages(messages);
      console.log(messages)
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
        <main className={style.main}>
        
        {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      

        </main>
        {/* Send Message component */}
        <SendMessage />
    </>
    
  )
}

export default Chat;