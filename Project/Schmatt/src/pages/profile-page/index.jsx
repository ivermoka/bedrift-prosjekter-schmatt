import { auth } from "./../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div className="w-screen h-screen bg-rich-black flex justify-center items-center">
      <div className="bg-button-active w-1/3 h-5/6 flex flex-col p-10">
        {/*Image and username*/}
        <div className="h-40 w-full flex items-end">
          <div className="self-center w-1/2 aspect-square flex flex-col ">
            <img
              className="aspect-square w-full self-center"
              src={"userIcon_placeholder.png"}
            />
            <button className="border border-border-color bg-rich-black rounded-md">
              Change picture
            </button>
          </div>
          <h1 className="mb-6 text-7xl text-text-color">{user.displayName}</h1>
        </div>
      </div>
    </div>
  );
}
