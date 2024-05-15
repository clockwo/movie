import logo from '@/assets/icons/logo.svg';
import styles from './Navbar.module.css';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootStore } from '@/app/providers/store/store';
import { logout } from '@/app/providers/store/users.slice';

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { navigateToHome } = useAppNavigation();
  const { loginedUser, users } = useSelector((state: RootStore) => state.users);
  const movies = useSelector((state: RootStore) => state.movies);
  const userName = users.find((user) => user.id === loginedUser);
  const moviesLength: number =
    movies.find((movie) => movie.user === loginedUser)?.movies.length || 0;

  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbar}>
      <img
        onClick={navigateToHome}
        src={logo}
        alt="Logo"
        width={49}
        height={40}
      />
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
          <span className={styles.moviesLength}>{moviesLength}</span>
        </NavLink>

        {loginedUser && (
          <a className={styles.link} href="#">
            {userName?.name}
          </a>
        )}

        <NavLink
          to={'/auth/login'}
          onClick={onLogoutClick}
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
        >
          {loginedUser ? 'Выйти' : 'Войти'}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;