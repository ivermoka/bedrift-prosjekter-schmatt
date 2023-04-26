// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhop4GpoqB4IiziyBV5ZbXwlpjODOOo2U",
  authDomain: "schmatt-5ea5a.firebaseapp.com",
  projectId: "schmatt-5ea5a",
  storageBucket: "schmatt-5ea5a.appspot.com",
  messagingSenderId: "802169341254",
  appId: "1:802169341254:web:f04fe9898edfdfc1fcd147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);