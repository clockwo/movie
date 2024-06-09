import axios from 'axios';
import { createBrowserRouter, defer } from 'react-router-dom';

import RequireAuth from '@/app/providers/router/libs/RequireAuth';
import { RootPage } from '@/app/layout/Root';
import { LoginPage } from '@/pages/Login';
import { MoviePage } from '@/pages/Movie';
import { FavoritePage } from '@/pages/Favorites';
import { ErrorPage } from '@/pages/Error';
import { FeedPage } from '@/pages/Feed';
import { API_KEY, PREFIX } from '@/shared/hooks/useApi';
import type { Movie } from '@/shared/interfaces/movie.interface.ts';

enum Routes {
  home = '/',
  favorites = '/favorites',
  movie = '/movie/:id',
  auth = '/auth',
  login = 'login',
  notFound = '*',
}

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: (
      <RequireAuth>
        <RootPage />
      </RequireAuth>
    ),
    children: [
      {
        path: Routes.home,
        element: <FeedPage />,
      },
      {
        path: Routes.favorites,
        element: <FavoritePage />,
      },
      {
        path: Routes.movie,
        element: <MoviePage />,
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
        path: Routes.notFound,
        element: (
          <ErrorPage
            message="404"
            description="Упс! Такой страницы не существует!"
          />
        ),
      },
    ],
  },

  {
    path: Routes.auth,
    element: <RootPage />,
    children: [
      {
        path: Routes.login,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
