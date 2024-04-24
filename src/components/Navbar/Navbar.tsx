import logo from '@/assets/icons/logo.svg';
import styles from './Navbar.module.css';
import { useContext } from 'react';
import { UserContext } from '@/context/user.context';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Navbar = () => {
  const { activeUser, logoutUser } = useContext(UserContext);
  const { navigateToHome } = useAppNavigation();

  return (
    <div className={styles.navbar}>
      <img onClick={navigateToHome} src={logo} />
      <div className={styles.links}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
        >
          Поиск фильмов
        </NavLink>

        <NavLink
          to={'/favorites'}
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
        >
          Мои фильмы
        </NavLink>

        {activeUser && (
          <a className={styles.link} href="#">
            {activeUser.name}
          </a>
        )}

        <NavLink
          to={'/login'}
          onClick={activeUser ? logoutUser : undefined}
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
        >
          {activeUser?.isLogined ? 'Выйти' : 'Войти'}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
