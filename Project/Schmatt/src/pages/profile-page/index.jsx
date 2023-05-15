import React, { useCallback } from "react";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { storage, auth, storageRef } from "./../../firebase-config";
import getUser from "./../../user";
import Navbar from "../navbar/navbar";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ChangePassword from "./../../dialog/change-password-popup";

export default function Profile() {
  const user = getUser();
  const [dropzoneState, setDropzoneState] = useState(false);

  const [changePasswordPopup, setChangePasswordPopup] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-rich-black h-screen">
        <ChangePassword
          changePasswordPopup={changePasswordPopup}
          setChangePasswordPopup={setChangePasswordPopup}
        />
        <div className="h-full w-2/4 ml-48 flex">
          <div
            className="w-96 h-full flex flex-col gap-6"
            id="profile-picture-container"
          >
            <div className="bg-white w-96 h-96 mt-28 rounded-full">
              <img
                className="h-full w-full rounded-full"
                src={user.photoURL || "userIcon_placeholder.png"}
                alt="profile-picture"
              />
            </div>
            {dropzoneState && <MyDropzone />}
            <button
              onClick={() => {
                setDropzoneState(!dropzoneState);
              }}
              className="bg-white w-28 h-10 text-text-color font-light text-sm"
            >
              Change pfp
            </button>
          </div>
          <div className="w-96 h-full" id="user-credentials">
            <div className="text-lg text-text-color mt-28 ml-4 flex flex-col gap-4">
              <span>Username: {user.displayName}</span>
              <span>Mail: {user.email}</span>
              <span>Password: {user.password}</span>
              <button
                onClick={() => {
                  setChangePasswordPopup(true);
                }}
                className="bg-white w-32 h-10 text-text-color font-light text-sm"
              >
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MyDropzone() {
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploading(true);

    // Upload file to Firebase Storage
    const storageRef = ref(storage, "profile-pictures/" + file.name);
    await uploadBytes(storageRef, file);

    // Get download URL of uploaded file
    const downloadURL = await getDownloadURL(storageRef);

    // Update user's profile picture with download URL
    updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    });
    await updateDoc(auth.currentUser, {
      pfp: downloadURL,
    })

    setUploading(false);
    setUploadComplete(true);
    console.log(downloadURL);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const refreshPage = () => {
    window.location.reload;
  };

  return (
    <>
      <div
        {...getRootProps()}
        className="bg-white/[0.7] select-none cursor-pointer opacity-90 w-42 h-20 border-2 border-black border-dashed flex items-center justify-center text-center px-8"
      >
        <input {...getInputProps()} />
        {uploading ? (
          <p>Uploading...</p>
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop or click to select a file</p>
        )}
      </div>
      {uploadComplete && (
        <button
          onClick={() => {
            refreshPage;
          }}
          className="bg-white w-full h-10 text-text-color font-light text-sm"
        >
          Upload complete. Refresh to see the changes.
        </button>
      )}
    </>
  );
}
