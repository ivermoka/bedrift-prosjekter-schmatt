import React from "react";
import { auth } from "../../../firebase-config";
import { Timestamp } from "firebase/firestore";

const style = {
  message: `flex items-center drop-shadow-[4xl] m-4 py-2 px-3 rounded-tl-full rounded-tr-full cursor-pointer hover:bg-gray-800 hover:text-gray-8`,
  name: `mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-message-sent text-text-color flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-message-recieved text-text-color flex-row-reverse text-end float-left rounded-br-full`,
};
const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>

      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
