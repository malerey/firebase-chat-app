import { useState, useEffect } from 'react';
import { getFromDatabase, saveToDatabase } from '../database';

const useAuth = () => {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const connect = (username) => {
    saveToDatabase(`/users/${username}`, true);
    setUserId(username);
  }

  const getUsers = () => {
    getFromDatabase('/users', res => {
      setUsers(Object.keys(res))
    })
  }

  return [userId, users, connect];
}

export default useAuth;


