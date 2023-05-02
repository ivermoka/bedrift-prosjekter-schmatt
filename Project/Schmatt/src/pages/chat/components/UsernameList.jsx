import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase-configSchmatt';
import User from './User';

const UsernameList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'usernames'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users);
      console.log(users);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='w-[16%] h-full flex flex-col'>
      {users.map((user) => (
        <User displayName={user.displayName || ''} />
      ))}
    </div>
  );
};

export default UsernameList;
