import { useEffect, useState } from 'react';

import type { User } from '@/shared/interfaces/user.interface';

const USERS_STORAGE_KEY = 'users';

export const useAuth = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (storedUsers) {
      const response: User[] = JSON.parse(storedUsers);
      const existingUser = response.find((user) => user.isLoggedInUser);
      setActiveUser(existingUser ? existingUser : null);
      setUsers(response);
    }
  }, []);

  const loginUser = (userName: string) => {
    const usersSnapshot = users.map((user) => {
      return { ...user, isLoggedInUser: false };
    });
    const existingUser = usersSnapshot.find((user) => user.name === userName);
    if (existingUser) {
      existingUser.isLoggedInUser = true;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersSnapshot));
      setActiveUser(existingUser);
      setUsers([...usersSnapshot]);
    } else {
      const newUser = { name: userName, isLoggedInUser: true };
      const updatedUsersData = [...usersSnapshot, newUser];
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsersData));
      setActiveUser(newUser);
      setUsers(updatedUsersData);
    }
  };

  const logoutUser = () => {
    const usersSnapshot = [...users];
    const existingUser = usersSnapshot.find((user) => user.isLoggedInUser);
    if (existingUser) {
      existingUser.isLoggedInUser = false;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersSnapshot));
      setActiveUser(null);
      setUsers([...usersSnapshot]);
    }
  };

  return { loginUser, logoutUser, activeUser };
};
