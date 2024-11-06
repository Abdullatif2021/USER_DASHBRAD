import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = (page: number) =>
  createSelector(
    selectUserState,
    (state: UserState) => state.users[page] || []
  );

export const selectTotalUsers = createSelector(
  selectUserState,
  (state: UserState) => state.totalUsers
);
