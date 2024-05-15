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
      const existingUser = response.find((user) => user.isLogined);
      setActiveUser(existingUser ? existingUser : null);
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
    const existingUser = usersSnapshot.find((user) => user.isLogined);
    if (existingUser) {
      existingUser.isLogined = false;
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersSnapshot));
      setActiveUser(null);
      setUsers([...usersSnapshot]);
    }
  };

  return { loginUser, logoutUser, activeUser };
};
