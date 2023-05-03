import { useState } from "react";
import { auth, storage } from "./../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `users/${user.uid}/profilePicture`);
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setUser((prevUser) => ({
          ...prevUser,
          photoURL: url,
        }));
      });
    });
  };

  return (
    <div className="w-screen h-screen bg-rich-black flex justify-center items-center">
      <div className="bg-button-active w-1/3 h-5/6 flex flex-col p-10">
        {/*Image and username*/}
        <div className="h-40 w-full flex items-end">
          <div className="self-center w-1/2 aspect-square flex flex-col">
            <img
              className="aspect-square w-full self-center"
              src={user.photoURL}
            />
            <label className="border border-border-color bg-rich-black rounded-md">
              <input type="file" onChange={handleImageUpload} hidden />
              Change picture
            </label>
          </div>
          <h1 className="mb-6 text-7xl text-text-color">{user.displayName}</h1>
        </div>
      </div>
    </div>
  );
}
