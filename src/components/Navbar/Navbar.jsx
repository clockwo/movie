import logo from '@/assets/icons/logo.svg';
import styles from './Navbar.module.css';

const Navbar = ({ activeUserName, logoutUser }) => {
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
        {activeUserName && (
          <a className={styles.link} href="#">
            {activeUserName}
          </a>
        )}
        <a onClick={logoutUser} className={styles.link} href="#">
          {!logoutUser ? 'Войти' : 'Выйти'}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
