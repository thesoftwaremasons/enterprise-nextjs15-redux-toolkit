import {
  usersSlice,
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from '@/features/users/usersSlice';
import { User } from '@/features/users/types';

describe('usersSlice', () => {
  const initialState = {
    users: [],
    loading: false,
    error: null,
    selectedUser: null,
  };

  it('should return the initial state', () => {
    const state = usersSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle clearError', () => {
    const previousState = {
      ...initialState,
      error: 'Test error',
    };
    const state = usersSlice.reducer(previousState, usersSlice.actions.clearError());
    expect(state.error).toBeNull();
  });

  it('should handle setSelectedUser', () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    };
    const state = usersSlice.reducer(initialState, usersSlice.actions.setSelectedUser(user));
    expect(state.selectedUser).toEqual(user);
  });

  it('should handle clearSelectedUser', () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    };
    const previousState = {
      ...initialState,
      selectedUser: user,
    };
    const state = usersSlice.reducer(previousState, usersSlice.actions.clearSelectedUser());
    expect(state.selectedUser).toBeNull();
  });

  describe('async thunks', () => {
    it('should set loading to true when fetchUsers is pending', () => {
      const action = { type: fetchUsers.pending.type };
      const state = usersSlice.reducer(initialState, action);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should set users when fetchUsers is fulfilled', () => {
      const users: User[] = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          role: 'user',
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
        },
      ];
      const action = { type: fetchUsers.fulfilled.type, payload: users };
      const state = usersSlice.reducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.users).toEqual(users);
    });

    it('should set error when fetchUsers is rejected', () => {
      const error = 'Failed to fetch users';
      const action = { type: fetchUsers.rejected.type, payload: error };
      const state = usersSlice.reducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(error);
    });

    it('should add user when createUser is fulfilled', () => {
      const newUser: User = {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'moderator',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
      };
      const action = { type: createUser.fulfilled.type, payload: newUser };
      const state = usersSlice.reducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.users).toContain(newUser);
    });

    it('should update user when updateUser is fulfilled', () => {
      const existingUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
      };
      const updatedUser: User = {
        ...existingUser,
        name: 'John Smith',
        updatedAt: '2024-01-02T00:00:00.000Z',
      };
      const previousState = {
        ...initialState,
        users: [existingUser],
      };
      const action = { type: updateUser.fulfilled.type, payload: updatedUser };
      const state = usersSlice.reducer(previousState, action);
      expect(state.loading).toBe(false);
      expect(state.users[0]).toEqual(updatedUser);
    });

    it('should remove user when deleteUser is fulfilled', () => {
      const user: User = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
      };
      const previousState = {
        ...initialState,
        users: [user],
      };
      const action = { type: deleteUser.fulfilled.type, payload: '1' };
      const state = usersSlice.reducer(previousState, action);
      expect(state.loading).toBe(false);
      expect(state.users).toHaveLength(0);
    });
  });
});
