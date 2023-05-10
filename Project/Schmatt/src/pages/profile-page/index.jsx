import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { auth } from "./../../firebase-config";
import getUser from "./../../user";

export default function Profile() {
  const user = getUser();

  return (
    <div className="bg-rich-black h-screen flex justify-center items-center">
      <div className="bg-delif-blue/[0.7] w-1/3 h-5/6 flex flex-col items-center p-12">
        <MyDropzone />
      </div>
    </div>
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
