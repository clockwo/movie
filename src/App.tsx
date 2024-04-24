import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '@/layout/Root/Root';
import styles from './App.module.css';
import Feed from './pages/Feed/Feed';
import Error from './pages/Error/Error';
import UserContextProvider from './context/user.context';
import './reset.css';
import './index.css';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '*',
        element: (
          <Error
            message="404"
            description="Упс! Такой страницы не существует!"
          />
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <div className={styles.wrapper}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
};

export default App;
