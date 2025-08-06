export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  email?: string;
  role?: 'admin' | 'user' | 'moderator';
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
}
