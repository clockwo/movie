import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { loadState } from './localStorage';

export const USER_PERSISTENT_STATE = 'usersData';

export interface User {
  id: string;
  name: string;
}

export interface UsersState {
  loggedInUser: string | null;
  users: User[];
}

const initialState: UsersState = loadState<UsersState>(
  USER_PERSISTENT_STATE
) ?? { loggedInUser: null, users: [] };

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const userIndex = state.users.findIndex(
        (user) => user.name === action.payload
      );

      if (userIndex !== -1) {
        state.loggedInUser = state.users[userIndex].id;
      } else {
        const newUser = {
          id: nanoid(),
          name: action.payload,
        };
        state.users = [...state.users, newUser];
        state.loggedInUser = newUser.id;
      }
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
