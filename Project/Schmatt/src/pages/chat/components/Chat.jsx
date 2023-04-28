import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import {query, collection, orderBy, onSnapshot} from "firebase/firestore" ; 



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
        <div className=' w-[65%] border-r-[1px] border-border-color h-full'>
          {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          <SendMessage />
          
        </div>
    </>
  )
}

export default Chat;