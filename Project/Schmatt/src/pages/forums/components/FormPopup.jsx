import React from 'react'
import { useState, useCallback } from 'react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../../../firebase-config";
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const FormPopup = ({ setCreateRoomPopup, selectedForum }) => {
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const [imageURL, setImageURL] = useState("");
    const forum = selectedForum.selectedForum;
    const score = 0;

    const sendMessage = async (e) => {
        console.log("sent", titleInput, contentInput)

        if (forum === "") {
            alert("Please select a forum")
            return
        }

        e.preventDefault();
        if (titleInput === "" || contentInput === "") {
            alert("Please enter a valid message");
            return;
        }
        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, "forum-posts"), {
            title: titleInput,
            textContent: contentInput,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
            forum,
            score,
            image: imageURL
        });
    }
    function handleCreateRoomPopup() {
        setCreateRoomPopup(false)
    }

    return (
        <div className='absolute left-0 right-0 top-0 bottom-0 m-auto w-2/3 h-3/5 rounded-md flex  parent '>
            <form onSubmit={sendMessage} className='flex flex-col text-black items-center h-full w-11/12 pl-10 gap-8 mt-10'>
                <input
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    type="text"
                    placeholder="Your title"
                    className=' w-3/4 h-12 rounded-lg placeholder:text-black pl-2 bg-forum-backround bg-gray-700'
                />
                <MyDropzone setImageURL={setImageURL} />
                <input
                    value={contentInput}
                    onChange={(e) => setContentInput(e.target.value)}
                    type="text"
                    placeholder="Your content"
                    className=' w-3/4 h-1/3 rounded-md placeholder:float-left placeholder:text-black text-start flex justify-start pl-2 bg-gray-500'
                />
                <button  type="submit" className='bg-common rounded-lg p-2 w-full h-20 text-white'>
                    Create post
                </button>
            </form>
            <div className='flex justify-between flex-col'>
                <svg className=' cursor-pointer' onClick={handleCreateRoomPopup} fill="#ffffff" width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"></path></g></svg>

            </div>
        </div>
    )
}
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

export default FormPopup