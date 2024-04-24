import { useEffect, useState } from 'react';
import type { User } from '@/interfaces/user.interface';

const USERS_STORAGE_KEY = 'users';

export const useAuth = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (storedUsers) {
      const response = JSON.parse(storedUsers);
      setUsers(response);
    }
  }, []);

  const loginUser = (userName: string) => {
    const usersSnapshot = users.map((user) => {
      return { ...user, isLogined: false };
    });
    const existingUser = usersSnapshot.find((user) => user.name === userName);
    if (existingUser) {
      existingUser.isLogined = true;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersSnapshot));
      setActiveUser(existingUser);
      setUsers([...usersSnapshot]);
    } else {
      const newUser = { name: userName, isLogined: true };
      const updatedUsersData = [...usersSnapshot, newUser];
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsersData));
      setActiveUser(newUser);
      setUsers(updatedUsersData);
    }
  };

  const logoutUser = () => {
    const usersSnapshot = [...users];
    const activeUser = usersSnapshot.find((user) => user.isLogined);
    if (activeUser) {
      activeUser.isLogined = false;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersSnapshot));
      setActiveUser(null);
      setUsers([...usersSnapshot]);
    }
  };

  return { loginUser, logoutUser, activeUser };
};
