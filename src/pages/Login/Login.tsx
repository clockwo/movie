import Input from '@/shared/components/Input/Input';
import styles from './Login.module.css';
import Button from '@/shared/components/Button/Button';
import Heading from '@/shared/components/Heading/Heading';
import { useRef } from 'react';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/store/store';

import { login } from '@/app/providers/store/users.slice';

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigateToHome } = useAppNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const onLoginClick = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (value) {
        dispatch(login(value));
        navigateToHome();
      }
    }
  };

  return (
    <div className={styles.info}>
      <Heading>Вход</Heading>
      <Input ref={inputRef} placeholder={'Ваше имя'} />
      <Button onClick={onLoginClick}>Войти в профиль</Button>
    </div>
  );
};

export default Login;
