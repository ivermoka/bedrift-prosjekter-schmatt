import React from "react";
import { useState } from "react";
import { auth, db } from "../../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Message from "@/pages/chat/components/MessageSchmatt";
import FormPopup from "./FormPopup";

const style = {
  form: `backdrop-blur-sm pt-[1px] h-14 w-[63%] flex text-xl absolute bottom-0 m-2 justify-between flex-row`,
  input: `w-[93%] backdrop-blur-sm opacity-75 pl-5 rounded-full text-l text-common p-3 bg-button-active text-white outline-none border-none`,
  button: `p-3 bg-button-active rounded-full opacity-75`,
};

export default function Posts() {
  const [createRoomPopup, setCreateRoomPopup] = useState(false);

  const handleCreateRoomClick = () => {
    setCreateRoomPopup(true);
  };

  return (
    <>
      {createRoomPopup && <FormPopup setCreateRoomPopup={setCreateRoomPopup} />}
      <div>
        <button onClick={handleCreateRoomClick}>Create Room</button>
      </div>
    </>
  );
}
