import React from "react";
import { useState, useCallback } from "react";
import { auth, db, storage } from "../../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const style = {
  form: `backdrop-blur-sm pt-[1px] h-14 w-[63%] flex text-xl absolute bottom-0 m-2 justify-between flex-row`,
  input: `w-[93%] backdrop-blur-sm opacity-75 pl-5 rounded-full text-l text-common p-3 bg-button-active text-white outline-none border-none`,
  button: `p-3 bg-button-active rounded-full cursor-pointer opacity-75`,
};

const SendMessage = ({
  scroll,
  selectedRoom,
  refresh,
  setRefresh,
  scrollRef,
}) => {
  const [input, setInput] = useState("");
  const [addImage, setAddImage] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const sendMessage = async (e) => {
    scrollRef.current.scroll({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    // check if any character in the input has Unicode value greater than 255
    const hasEmoji = input.split("").some((char) => char.charCodeAt(0) > 255);
    if (hasEmoji) {
      alert("Please enter a valid message without emojis");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
      room: selectedRoom,
      image: imageURL
    });
    // ref.current.scrollIntoView({ behavior: "smooth" }); //funker ikke akk nå
    setInput("");
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <svg onClick={() => {setAddImage(true)}} className={style.button} fill="#626060" width="55px" height="55px" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" stroke="#626060" stroke-width="0.45"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"></path></g></svg>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Your text..."
        maxLength="200"
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
      <Transition
        appear
        show={addImage}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog
          onClose={() => setAddImage(false)}
          className="bg-state-blue opacity-90 fixed h-max-[20%] left-[22%] bottom-[8%] z-10 w-1/3 p-6 rounded-t-lg rounded-br-lg"
        >
          <Dialog.Panel className="flex flex-col gap-4 items-center">
            <Dialog.Title className="text-3xl font-bold">Add image</Dialog.Title>
            <MyDropzone setImageURL={setImageURL} />
            <button
              className="bg-delif-blue hover:bg-iris duration-300 p-2 rounded-lg w-1/2"
              onClick={() => setAddImage(false)}
              type="submit"
            >
              Got It!
            </button>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </form>
  );
};
function MyDropzone({setImageURL}) {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploading(true);

    // Upload file to Firebase Storage
    const storageRef = ref(storage, "images/" + file.name);
    await uploadBytes(storageRef, file);

    // Get download URL of uploaded file
    const downloadURL = await getDownloadURL(storageRef);
    setImageURL(downloadURL)

    setUploading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const refreshPage = () => {
    window.location.reload;
  };

  return (
    <>
      <div
        {...getRootProps()}
        className="bg-white/[0.7] opacity-90 w-42 h-20 border-2 border-black border-dashed flex items-center text-center px-8"
      >
        <input {...getInputProps()} />
        {uploading ? (
          <p>Uploading...</p>
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      
    </>
  );
}


export default SendMessage;
