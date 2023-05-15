import React, { useState } from "react";
import getUser from "@/userSchmatt";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/firebase-configSchmatt";
import { Timestamp } from "firebase/firestore";

const ForumPost = ({ key, message, selectedForum, title, content }) => {
  const user = getUser();
  const postScore = doc(db, "forum-posts", message.id);
  const [clickedUpPreviously, setClickedUpPreviously] = useState(false);
  const [clickedDownPreviously, setClickedDownPreviously] = useState(false);

  async function addScore() {
    if (clickedUpPreviously) {
      await updateDoc(postScore, {
        score: increment(-1),
      });
      setClickedUpPreviously(false);
      setClickedDownPreviously(false);
      console.log("clickedUpDown");
      return;
    } else {
      await updateDoc(postScore, {
        score: increment(1),
      });
      setClickedUpPreviously(true);
      setClickedDownPreviously(false);
      console.log("clickedUp");
    }
  }
  async function subtractScore() {
    if (clickedDownPreviously) {
      await updateDoc(postScore, {
        score: increment(1),
      });
      setClickedUpPreviously(false);
      setClickedDownPreviously(false);
      console.log("clickedDownUp");
      return;
    } else {
      await updateDoc(postScore, {
        score: increment(-1),
      });
      setClickedUpPreviously(false);
      setClickedDownPreviously(true);
      console.log("clickedDown");
    }
  }
  const formattedTime = message.timestamp
    ? new Timestamp(
        message.timestamp.seconds,
        message.timestamp.nanoseconds
      ).toDate()
    : null;
  let timestampString = formattedTime
    ? `${formattedTime.getHours()}:${formattedTime.getMinutes()} ${formattedTime.toDateString()}`
    : "";

  return (
    <div>
      <div className=" px-2 w-full min-h-[120px] bg-forum-background border-border-color border rounded-md flex flex-row items-center gap-10">
        <div className="flex flex-col items-center h-full w-1/6">
          <svg
            className="cursor-pointer"
            onClick={addScore}
            fill="#ffffff"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"></path>
            </g>
          </svg>
          <p className=" select-none cursor-default">{message.score}</p>
          <svg
            className="cursor-pointer"
            onClick={subtractScore}
            fill="#ffffff"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col w-5/6 h-5/6">
          <div className="h-1/6 w-full flex flex-row items-end justify-between">
            <h1 className=" text-3xl">{title}</h1>
            <span className=" text-xs">Posted by {message.name}</span>
          </div>
          <div className="flex w-full h-4/6">{content}</div>
          <img className=" max-w-[50%]" src={message.image} />
          <div className="h-2 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
