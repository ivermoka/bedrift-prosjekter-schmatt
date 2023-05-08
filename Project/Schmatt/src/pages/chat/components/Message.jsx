import React from "react";
import { auth } from "../../../firebase-config";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";

const style = {
  message: `flex items-center drop-shadow-[4xl] mx-3 mb-3 py-2 px-3 rounded-tl-full rounded-tr-full cursor-pointer hover:bg-gray-800 hover:text-gray-8`,
  name: `text-gray-600 text-xs pb-[1px]`,
  sent: `bg-message-sent text-text-color flex-col text-end rounded-bl-full`,
  sentText: `text-text-color flex-col pr-5 text-end rounded-bl-full justify-self-end`,
  received: `bg-message-recieved  text-text-color flex-col text-start rounded-br-full`,
  receivedText: `text-text-color pl-5 flex-col text-start rounded-br-full justify-self-start`,
  timestamp: `text-gray-500 text-xs float-right`,
};

const Message = ({ message }) => {
  const router = useRouter(); // initialize the useRouter hook
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent} `
      : `${style.received}`;

  const messageText =
    message.uid === auth.currentUser.uid
      ? `${style.sentText}`
      : `${style.receivedText}`;
  // const timestamp = new Timestamp(
  //   message.timestamp.seconds,
  //   message.timestamp.nanoseconds
  // ).toDate();
  // const formattedTime = `${timestamp.getHours()}:${timestamp.getMinutes()} ${timestamp.toDateString()}`;
  return (
    <div>
      <div className="w-full h-20 grid">
        <div className={`flex ${messageText}`}>
          <p className={style.name}>{message.name}</p>
          <div className={`${style.message} ${messageClass}`}>
            <p>{message.text}</p>
            {/* <p className={style.timestamp}>{formattedTime}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
