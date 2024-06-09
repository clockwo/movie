import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { loadState } from "./localStorage";
import { Movie } from "@/shared/interfaces/movie.interface";

export const MOVIES_PERSISTENT_STATE = "moviesData";

export interface MoviesState {
  user: string;
  movies: Movie[];
}

interface MoviePayload {
  movie: Movie;
  user: string;
}

const initialState: MoviesState[] =
  loadState<MoviesState[]>(MOVIES_PERSISTENT_STATE) ?? [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<MoviePayload>) => {
      const userIndex = state.findIndex(
        (user) => user.user === action.payload.user,
      );
      if (userIndex !== -1) {
        const movieIndex = state[userIndex].movies.findIndex(
          (movie) => movie.id === action.payload.movie.id,
        );
        if (movieIndex !== -1) {
          state[userIndex].movies.splice(movieIndex, 1);
        } else {
          state[userIndex].movies.push(action.payload.movie);
        }
      } else {
        state.push({
          user: action.payload.user,
          movies: [action.payload.movie],
        });
      }
    },
  },
});

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
