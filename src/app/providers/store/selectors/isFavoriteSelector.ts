import { createSelector } from '@reduxjs/toolkit';
import type { RootStore } from '../store';

export const isFavoriteSelector = (id: number) =>
  createSelector(
    (state: RootStore) => state.movies,
    (state: RootStore) => state.users.loginedUser,
    (movies, loginedUser) => {
      return movies
        .find((movie) => movie.user === loginedUser)
        ?.movies.some((movie) => movie.id === id);
    }
  );
