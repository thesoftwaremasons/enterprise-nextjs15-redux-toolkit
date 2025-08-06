import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';

// Base selectors
export const selectUsersState = (state: RootState) => state.users;

// Memoized selectors
export const selectUsers = createSelector([selectUsersState], (usersState) => usersState.users);

export const selectUsersLoading = createSelector(
  [selectUsersState],
  (usersState) => usersState.loading
);

export const selectUsersError = createSelector(
  [selectUsersState],
  (usersState) => usersState.error
);

export const selectSelectedUser = createSelector(
  [selectUsersState],
  (usersState) => usersState.selectedUser
);

// Complex selectors
export const selectUserById = createSelector(
  [selectUsers, (state: RootState, userId: string) => userId],
  (users, userId) => users.find((user) => user.id === userId)
);

export const selectUsersByRole = createSelector(
  [selectUsers, (state: RootState, role: string) => role],
  (users, role) => users.filter((user) => user.role === role)
);

export const selectUsersCount = createSelector([selectUsers], (users) => users.length);

export const selectAdminUsers = createSelector([selectUsers], (users) =>
  users.filter((user) => user.role === 'admin')
);

export const selectActiveUsers = createSelector([selectUsers], (users) =>
  users.filter((user) => user.role !== 'admin')
);
