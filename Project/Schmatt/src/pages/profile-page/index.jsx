import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { auth } from "./../../firebase-config";
import getUser from "./../../user";
import Navbar from "../navbar/navbar";

export default function Profile() {
  const user = getUser();

  return (
    <>
      <Navbar />
      <div className="bg-rich-black h-screen flex justify-center items-center">
        <div className="w-2/3 h-1/2">

        </div>
      </div>
    </>
    
  );
}

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="bg-white/[0.7] opacity-90 w-42 h-20 border-2 border-black border-dashed flex items-center text-center px-8"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
