import type { RootStore } from '../store';

export const loginedUserSelector = (state: RootStore) =>
  state.users.loggedInUser;
