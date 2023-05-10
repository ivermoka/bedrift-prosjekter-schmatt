import React, { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase-configSchmatt";
import User from "./User";

const UsernameList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "usernames"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          users = users.filter((user) => user.id !== change.doc.id);
        }
      });
      setUsers(users);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-[16%] h-full flex flex-col overflow-y-scroll">
      {users.map((user) => (
        <User displayName={user.displayName || ""} />
      ))}
    </div>
  );
};

export default UsernameList;
