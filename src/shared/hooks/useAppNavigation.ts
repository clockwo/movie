import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateToHome = useCallback((): void => {
    navigate('/');
  }, []);

  return {
    navigateToHome,
  };
};
