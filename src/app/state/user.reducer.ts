import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: { [page: number]: any[] };
  totalUsers: number;
  loading: boolean;
}

export const initialState: UserState = {
  users: {},
  totalUsers: 0,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users, total, page }) => ({
    ...state,
    users: { ...state.users, [page]: users },
    totalUsers: total,
    loading: false,
  })),
  on(UserActions.loadUsersFailure, (state) => ({ ...state, loading: false }))
);
