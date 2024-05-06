import type { RootStore } from '@/store/store';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { loginedUser } = useSelector((state: RootStore) => state.users);
  if (!loginedUser) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return children;
};

export default RequireAuth;
