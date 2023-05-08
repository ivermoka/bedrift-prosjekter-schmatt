import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";

let user = {};

onAuthStateChanged(auth, (currentUser) => {
  user = currentUser || {};
});

export default function getUser() {
  return user;
}
