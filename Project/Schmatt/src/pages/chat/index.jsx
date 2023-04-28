import React from 'react'
import Rooms from './components/Rooms'
import Layout from '../Layout'
import SendMessage from './components/sendMessage'
import Message from './components/Message'
import SignIn from './components/SignIn'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import {query, collection, orderBy, onSnapshot} from "firebase/firestore" ; 
import { useAuthState, auth } from "firebase/auth"



const index = () => {
  const [user] = useAuthState(auth);
  // const [messages, setMessages] = useState([]);
  
  // useEffect(() => {
  //   const q = query(collection(db, 'messages'), orderBy('timestamp'));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let messages = [];
  //     console.log("test1")
  //     querySnapshot.forEach((doc) => {
  //       messages.push({ ...doc.data(), id: doc.id });
  //       console.log("test")
  //     });
  //     setMessages(messages);
  //     console.log(messages)
  //   });
  //   return () => unsubscribe();
  // }, []);
  return (
    <>
      <div className=' w-screen h-screen bg-rich-black flex flex-row'>
        <SignIn />
        <Rooms />
        
        {user ? <Chat /> : null}
        
      </div>
      
        
    </>
    
  )
  
}

export default index