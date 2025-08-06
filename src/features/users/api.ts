import { User, CreateUserRequest, UpdateUserRequest } from './types';

// Mock API service - in a real app, these would make HTTP requests
export const usersApi = {
  getUsers: async (): Promise<User[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock data
    return [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        role: 'moderator',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  },

  getUserById: async (id: string): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const users = await usersApi.getUsers();
    const user = users.find((u) => u.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  },

  createUser: async (userData: CreateUserRequest): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return newUser;
  },

  updateUser: async (userData: UpdateUserRequest): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const existingUser = await usersApi.getUserById(userData.id);
    const updatedUser: User = {
      ...existingUser,
      ...userData,
      updatedAt: new Date().toISOString(),
    };
    return updatedUser;
  },

  deleteUser: async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // In a real API, this would delete the user
    console.log(`User with id ${id} deleted`);
  },
};
