'use client'

import { useState } from 'react'
import UsersList from '@/features/users/UsersList'
import UserForm from '@/features/users/UserForm'
import type { User } from '@/features/users/usersSlice'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  const handleEditUser = (user: User) => {
    // The user data is already set in the slice via setSelectedUser in UsersList
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const handleCreateUser = () => {
    setShowForm(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Enterprise Next.js 15 with Redux Toolkit
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              A modern enterprise application demonstrating Redux Toolkit state management with TypeScript
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              onClick={handleCreateUser}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add User
            </button>
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Features Demonstrated
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Redux Toolkit</h4>
                <p className="text-sm text-blue-700">Modern Redux with createSlice and async thunks</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">TypeScript</h4>
                <p className="text-sm text-green-700">Full type safety with typed hooks and selectors</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900">Next.js 15</h4>
                <p className="text-sm text-purple-700">Latest Next.js with app directory and React 19</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900">Enterprise Architecture</h4>
                <p className="text-sm text-yellow-700">Feature-based folder structure and best practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Management */}
        <UsersList onEditUser={handleEditUser} />

        {/* User Form Modal */}
        {showForm && <UserForm onClose={handleCloseForm} />}
      </div>
    </div>
  )
}
