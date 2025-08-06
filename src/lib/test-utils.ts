import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '@/features/users/usersSlice';

export function createTestStore() {
  return configureStore({
    reducer: {
      users: usersSlice.reducer,
    },
  });
}

export type TestStore = ReturnType<typeof createTestStore>;
