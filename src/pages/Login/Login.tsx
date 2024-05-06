import Input from '@/components/Input/Input';
import styles from './Login.module.css';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import { useContext, useRef } from 'react';
import { UserContext } from '@/context/user.context';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigateToHome } = useAppNavigation();

  const onLoginClick = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (value) {
        loginUser(value);
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
