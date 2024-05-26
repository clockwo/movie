import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from '../store';
import { loginedUserSelector } from './loginedUserSelector';

export const moviesLengthSelector = createSelector(
  (state: RootStore) => state.movies,
  loginedUserSelector,
  (movies, loginedUser) =>
    movies.find((movie) => movie.user === loginedUser)?.movies.length || 0
);
