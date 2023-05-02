import React from "react";
import { auth } from "../../../firebase-config";
import { Timestamp } from "firebase/firestore";

const style = {
  message: `flex items-center drop-shadow-[4xl] mx-3 mb-3 py-2 px-3 rounded-tl-full rounded-tr-full cursor-pointer hover:bg-gray-800 hover:text-gray-8`,
  name: `text-gray-600 text-xs pb-[1px]`,
  sent: `bg-message-sent text-text-color flex-col flex-col text-end float-right rounded-bl-full`,
  sentText: `text-text-color flex-col pr-5 flex-col text-end float-right rounded-bl-full`,
  received: `bg-message-recieved  text-text-color flex-col flex-col text-end float-left rounded-br-full`,
  receivedText: `text-text-color pl-5 flex-col flex-col text-start float-left rounded-br-full`,
};
const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  const messageText =
    message.uid === auth.currentUser.uid
      ? `${style.sentText}`
      : `${style.receivedText}`;

  return (
    <div>
      <div className="w-full h-20">
        <div className={`${messageText}`}>
          <p className={style.name}>{message.name}</p>
          <div className={`${style.message} ${messageClass}`}>
            <p>{message.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
