import React from "react";
import { useState } from "react";
import { auth, db } from "../../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `backdrop-blur-sm pt-[1px] h-14 w-[63%] flex text-xl absolute bottom-0 m-2 justify-between flex-row`,
  input: `w-[93%] backdrop-blur-sm opacity-75 pl-5 rounded-full text-l text-common p-3 bg-button-active text-white outline-none border-none`,
  button: `p-3 bg-button-active rounded-full opacity-75`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
      room: currentRoom
    });
    scroll.current.scrollIntoView({ behavior: "smooth" });
    setInput("");
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Your text..."
      />
      <button className={style.button} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33.621"
          height="33.621"
          viewBox="0 0 33.621 33.621"
        >
          <g
            id="Icon_feather-send"
            data-name="Icon feather-send"
            transform="translate(-1.5 -0.879)"
          >
            <path
              id="Path_28"
              data-name="Path 28"
              d="M33,3,16.5,19.5"
              fill="none"
              stroke="#707070"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              id="Path_29"
              data-name="Path 29"
              d="M33,3,22.5,33l-6-13.5L3,13.5Z"
              fill="none"
              stroke="#707070"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      </button>
    </form>
  );
};

export default SendMessage;
