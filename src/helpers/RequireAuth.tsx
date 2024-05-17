import { UserContext } from '@/context/user.context';
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { activeUser } = useContext(UserContext);

  if (activeUser === null) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return children;
};

export default RequireAuth;
