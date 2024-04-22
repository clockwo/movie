import logo from '@/assets/icons/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
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
        <a className={styles.link} href="#">
          Войти
        </a>
      </div>
    </div>
  );
};

export default Navbar;
