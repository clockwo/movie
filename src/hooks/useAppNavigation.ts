import { useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateToHome = (): void => {
    navigate('/');
  };

  return {
    navigateToHome,
  };
};
