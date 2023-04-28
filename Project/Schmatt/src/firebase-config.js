import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhop4GpoqB4IiziyBV5ZbXwlpjODOOo2U",
  authDomain: "schmatt-5ea5a.firebaseapp.com",
  projectId: "schmatt-5ea5a",
  storageBucket: "schmatt-5ea5a.appspot.com",
  messagingSenderId: "802169341254",
  appId: "1:802169341254:web:f04fe9898edfdfc1fcd147"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
