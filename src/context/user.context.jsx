import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const UserContext = createContext({
  user: null,
});

const UserContextProvider = ({ children }) => {
  const { activeUser, loginUser, logoutUser } = useAuth();

  return (
    <UserContext.Provider value={{ activeUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
