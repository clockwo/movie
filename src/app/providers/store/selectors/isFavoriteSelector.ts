import { createSelector } from '@reduxjs/toolkit';

import type { RootStore } from '../store';

export const isFavoriteSelector = (id: number) =>
  createSelector(
    (state: RootStore) => state.movies,
    (state: RootStore) => state.users.loggedInUser,
    (movies, loggedInUser) => {
      return movies
        .find((movie) => movie.user === loggedInUser)
        ?.movies.some((movie) => movie.id === id);
    }
  );
