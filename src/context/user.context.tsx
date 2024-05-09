import { createContext, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import type { ReactNode } from 'react';
import type { User } from '@/interfaces/user.interface';

type UserContextType = {
  activeUser: User | null;
  loginUser: (userName: string) => void;
  logoutUser: () => void;
};

export const UserContext = createContext<UserContextType>({
  activeUser: null,
  loginUser: () => {},
  logoutUser: () => {},
});

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const { activeUser, loginUser, logoutUser } = useAuth();

  return (
    <UserContext.Provider value={{ activeUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
