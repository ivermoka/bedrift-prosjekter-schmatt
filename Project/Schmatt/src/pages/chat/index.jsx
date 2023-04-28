import React from 'react'
import Rooms from './components/Rooms'
import SendMessage from './components/sendMessage'
import Message from './components/Message'
import Chat from './components/Chat'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import {query, collection, orderBy, onSnapshot} from "firebase/firestore" ; 



const index = () => {
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
      <div className=' w-screen h-screen bg-rich-black flex flex-row'>
        
        <Rooms />
        
        
        <Chat />
          
        
        
      </div>
      
        
    </>
    
  )
  
}

export default index