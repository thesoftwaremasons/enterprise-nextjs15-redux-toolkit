'use client';

import { useState } from 'react';
import { UserList, UserForm } from '@/features/users/components';
import { User } from '@/features/users/types';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleCreateUser = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setEditingUser(null);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Enterprise Next.js 15 + Redux Toolkit
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  A feature-rich user management system demonstrating enterprise-grade architecture
                </p>
              </div>
              <button
                onClick={handleCreateUser}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add User
              </button>
            </div>

            {isFormOpen && (
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {editingUser ? 'Edit User' : 'Create New User'}
                </h2>
                <UserForm
                  user={editingUser}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Users</h2>
              <UserList
                onEditUser={handleEditUser}
                onViewUser={(user) => console.log('View user:', user)}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Features Demonstrated</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900">Redux Toolkit</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Modern Redux with createSlice and createAsyncThunk
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900">TypeScript</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fully typed components, hooks, and state management
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900">Feature-based Architecture</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Organized by features with clear separation of concerns
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900">CRUD Operations</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Complete Create, Read, Update, Delete functionality
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900">Async State Management</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Loading states, error handling, and optimistic updates
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900">Tailwind CSS</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Modern utility-first CSS framework for styling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
