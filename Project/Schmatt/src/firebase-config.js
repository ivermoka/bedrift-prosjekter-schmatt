import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { getStorage, ref } from "firebase/storage";

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhop4GpoqB4IiziyBV5ZbXwlpjODOOo2U",
  authDomain: "schmatt-5ea5a.firebaseapp.com",
  projectId: "schmatt-5ea5a",
  storageBucket: "schmatt-5ea5a.appspot.com",
  messagingSenderId: "802169341254",
  appId: "1:802169341254:web:f04fe9898edfdfc1fcd147",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const storageRef = ref(storage);

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
