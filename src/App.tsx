import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import Root from '@/layout/Root/Root';
import styles from './App.module.css';
import Feed from './pages/Feed/Feed';
import Error from './pages/Error/Error';
import './reset.css';
import './index.css';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Movie from './pages/Movie/Movie';
import axios from 'axios';
import { PREFIX, API_KEY } from './hooks/useApi';
import RequireAuth from './helpers/RequireAuth';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Root />
      </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/movie/:id',
        element: <Movie />,
        loader: async ({ params }) => {
          return defer({
            data: axios.get<Movie>(`${PREFIX}/${params.id}`, {
              headers: {
                accept: 'application/json',
                'X-API-KEY': API_KEY,
              },
            }),
          });
        },
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

  {
    path: '/auth',
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
