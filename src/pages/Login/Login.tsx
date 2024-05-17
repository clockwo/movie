import Input from '@/components/Input/Input';
import styles from './Login.module.css';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '@/context/user.context';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store/store';

import { login } from '@/store/users.slice';

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
