import React from 'react'
import Rooms from './components/Rooms'
import User from './components/User'
import SendMessage from './components/sendMessage'
import Message from './components/Message'
import Chat from './components/Chat'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import {query, collection, orderBy, onSnapshot} from "firebase/firestore" ; 
import Navbar from '../navbarfolder/navbar'



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
      <div className='overflow-hidden max-h-screen'>
        <Navbar />
        <div className=' w-screen h-screen bg-rich-black flex flex-row'>
          
          <Rooms />
          <Chat />
          <User />
          
          
        </div>
      </div>
      
      
        
    </>
    
  )
  
}

export default index