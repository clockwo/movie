import { configureStore } from '@reduxjs/toolkit';

import { saveState } from './localStorage';
import moviesSlice, { MOVIES_PERSISTENT_STATE } from './movies.slice';
import usersSlice, { USER_PERSISTENT_STATE } from './users.slice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    users: usersSlice,
  },
});

store.subscribe(() => {
  saveState(store.getState().users, USER_PERSISTENT_STATE);
  saveState(store.getState().movies, MOVIES_PERSISTENT_STATE);
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
