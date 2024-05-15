import RequireAuth from '@/shared/helpers/RequireAuth';
import { PREFIX, API_KEY } from '@/shared/hooks/useApi';
import Root from '@/app/layout/Root/Root';
import Favorites from '@/pages/Favorites/Favorites';
import Feed from '@/pages/Feed/Feed';
import Login from '@/pages/Login/Login';
import Movie from '@/pages/Movie/Movie';
import Error from '@/pages/Error/Error';
import axios from 'axios';
import { createBrowserRouter, defer } from 'react-router-dom';

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

export default router;
