import {
  selectUsers,
  selectUsersLoading,
  selectUsersError,
  selectUserById,
  selectUsersByRole,
} from '@/features/users/selectors';
import { RootState } from '@/lib/store';
import { User } from '@/features/users/types';

describe('users selectors', () => {
  const mockUsers: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'moderator',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    },
  ];

  const mockState: RootState = {
    users: {
      users: mockUsers,
      loading: false,
      error: null,
      selectedUser: mockUsers[0],
    },
  };

  describe('selectUsers', () => {
    it('should return the users array', () => {
      const result = selectUsers(mockState);
      expect(result).toEqual(mockUsers);
    });
  });

  describe('selectUsersLoading', () => {
    it('should return the loading state', () => {
      const result = selectUsersLoading(mockState);
      expect(result).toBe(false);
    });
  });

  describe('selectUsersError', () => {
    it('should return the error state', () => {
      const result = selectUsersError(mockState);
      expect(result).toBeNull();
    });
  });

  describe('selectUserById', () => {
    it('should return the user with the matching ID', () => {
      const result = selectUserById(mockState, '2');
      expect(result).toEqual(mockUsers[1]);
    });

    it('should return undefined for non-existent user ID', () => {
      const result = selectUserById(mockState, 'non-existent');
      expect(result).toBeUndefined();
    });
  });

  describe('selectUsersByRole', () => {
    it('should return users with the specified role', () => {
      const result = selectUsersByRole(mockState, 'user');
      expect(result).toEqual([mockUsers[1]]);
    });

    it('should return empty array for non-existent role', () => {
      const result = selectUsersByRole(mockState, 'non-existent');
      expect(result).toEqual([]);
    });
  });
});
