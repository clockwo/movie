import { createSelector } from '@reduxjs/toolkit';

import { loginedUserSelector } from './loginedUserSelector';
import { RootStore } from '../store';

export const moviesLengthSelector = createSelector(
  (state: RootStore) => state.movies,
  loginedUserSelector,
  (movies, loggedInUser) =>
    movies.find((movie) => movie.user === loggedInUser)?.movies.length || 0
);
