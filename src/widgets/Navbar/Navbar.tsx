import logo from '@/assets/icons/logo.svg';
import styles from './Navbar.module.css';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootStore } from '@/app/providers/store/store';
import { logout } from '@/app/providers/store/users.slice';
import { useCallback } from 'react';
import { moviesLengthSelector } from '@/app/providers/store/selectors/favoritesLengthSelector';
import { loginedUserSelector } from '@/app/providers/store/selectors/loginedUserSelector';

const Length = () => {
  const moviesLength = useSelector(moviesLengthSelector);
  return <span className={styles.moviesLength}>{moviesLength}</span>;
};

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { navigateToHome } = useAppNavigation();
  const { users } = useSelector((state: RootStore) => state.users);
  const loginedUser = useSelector(loginedUserSelector);
  const userName = users.find((user) => user.id === loginedUser);

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, []);

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
          <Length />
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
