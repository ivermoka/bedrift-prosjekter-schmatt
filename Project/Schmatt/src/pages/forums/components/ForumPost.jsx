import React from 'react'
import getUser from '@/userSchmatt'
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from '@/firebase-configSchmatt';

const ForumPost = ({key, message, selectedForum, title, content}) => {
  const user = getUser()
  const postScore = doc(db, "forum-posts", message.id)

  async function addScore(){
    await updateDoc(postScore, {
      score: increment(1)
    });
  }
  async function subtractScore(){
    await updateDoc(postScore, {
      score: increment(-1)
    });
  }

  return (
    <div>
        <div className=" px-2 w-full h-auto bg-forum-background border-border-color border rounded-md flex flex-col gap-4">
            <div className='flex justify-between h-10 w-full'>
                <p>{selectedForum}</p>
                <p>Posted by {message.name}</p>
            </div>
            <div className='flex flex-col items-center gap-10 px-24 pb-10'>
                {/* <p >{message.name}</p> */}
                <h1 className=' text-3xl'>{title}</h1>
                
                {/* <p>{message.text}</p> */}
                <p>{content}</p>
                {/* <p className={style.timestamp}>{formattedTime}</p> */}
            </div>
            <div className='flex justify-evenly h-10 w-full'>
                <div className='h-1/4 w-1/4 flex flex-row'>
                  <svg onClick={addScore} fill="#ffffff" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"></path></g></svg>
                  <svg onClick={subtractScore} fill="#ffffff" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path></g></svg>
                  <p>{message.score}</p>
                </div>
                <p>Posted by {user.displayName}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ForumPost