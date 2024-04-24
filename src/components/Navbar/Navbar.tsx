import logo from '@/assets/icons/logo.svg';
import styles from './Navbar.module.css';
import { useContext } from 'react';
import { UserContext } from '@/context/user.context';

const Navbar = () => {
  const { activeUser, logoutUser } = useContext(UserContext);
  return (
    <div className={styles.navbar}>
      <img src={logo} />
      <div className={styles.links}>
        <a className={styles.link} href="#">
          Поиск фильмов
        </a>
        <a className={styles.link} href="#">
          Мои фильмы
        </a>
        {activeUser && (
          <a className={styles.link} href="#">
            {activeUser.name}
          </a>
        )}
        <a
          className={styles.link}
          onClick={activeUser ? logoutUser : undefined}
          href="#"
        >
          {activeUser?.isLogined ? 'Выйти' : 'Войти'}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
