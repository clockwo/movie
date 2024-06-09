import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Login.module.css';
import type { AppDispatch } from '@/app/providers/store/store.ts';
import { login } from '@/app/providers/store/users.slice.ts';
import Button from '@/shared/components/Button/Button.tsx';
import Heading from '@/shared/components/Heading/Heading.tsx';
import Input from '@/shared/components/Input/Input.tsx';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation.ts';

const Login = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
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
