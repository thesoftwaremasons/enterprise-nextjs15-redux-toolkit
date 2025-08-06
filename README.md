# Enterprise Next.js 15 + Redux Toolkit

A comprehensive, enterprise-grade Next.js 15 application built with Redux Toolkit and TypeScript, showcasing modern web development best practices and scalable architecture patterns.

## 🏗️ Architecture Overview

This project demonstrates enterprise-level patterns and practices:

- **Next.js 15** with App Router for modern React development
- **Redux Toolkit (RTK)** for predictable state management
- **TypeScript** throughout for type safety and developer experience
- **Feature-based architecture** for scalability and maintainability
- **Comprehensive testing** with Jest and React Testing Library
- **Code quality tools** with ESLint and Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with Redux Provider
│   ├── page.tsx           # Home page with user management
│   └── globals.css        # Global styles
├── features/              # Feature-based modules
│   └── users/             # Users feature module
│       ├── components/    # Feature-specific components
│       ├── __tests__/     # Feature tests
│       ├── api.ts         # API service layer
│       ├── selectors.ts   # Redux selectors
│       ├── types.ts       # TypeScript types
│       ├── usersSlice.ts  # Redux slice with async thunks
│       └── index.ts       # Feature exports
├── hooks/                 # Custom hooks
│   └── redux.ts          # Typed Redux hooks
├── lib/                   # Utilities and configuration
│   ├── store.ts          # Redux store configuration
│   ├── StoreProvider.tsx # Redux Provider wrapper
│   └── test-utils.ts     # Testing utilities
└── types/                # Global TypeScript types
```

## 🚀 Features

### ✅ Complete CRUD Operations
- **Create** new users with validation
- **Read** users with loading states
- **Update** existing user information
- **Delete** users with confirmation

### ✅ Modern Redux Patterns
- **Redux Toolkit** with createSlice and createAsyncThunk
- **Typed hooks** (useAppSelector, useAppDispatch)
- **Memoized selectors** with createSelector
- **Proper error handling** and loading states

### ✅ Enterprise Architecture
- **Feature-based folder structure** for scalability
- **Separation of concerns** (API, state, components, types)
- **Reusable components** with proper TypeScript interfaces
- **Async state management** with thunks

### ✅ Developer Experience
- **TypeScript** for type safety and IntelliSense
- **ESLint** for code quality and consistency
- **Prettier** for automatic code formatting
- **Jest** for unit and integration testing

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thesoftwaremasons/enterprise-nextjs15-redux-toolkit.git
   cd enterprise-nextjs15-redux-toolkit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## 🧪 Testing Strategy

### Unit Tests
- **Redux slices** - Test state transitions and async thunks
- **Selectors** - Test memoized data derivation
- **Components** - Test UI behavior and user interactions

### Integration Tests
- **Feature workflows** - Test complete user journeys
- **API integration** - Test service layer interactions

### Testing Utilities
- Custom test store setup for isolated testing
- Reusable test utilities and helpers
- Comprehensive test coverage reporting

## 🎯 Key Patterns Demonstrated

### 1. Feature-Based Architecture
```typescript
// Each feature is self-contained
features/users/
├── components/     # UI components
├── api.ts         # Service layer
├── types.ts       # TypeScript definitions
├── usersSlice.ts  # Redux state management
├── selectors.ts   # Data derivation
└── index.ts       # Public API
```

### 2. Typed Redux Hooks
```typescript
// Custom typed hooks for type safety
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

### 3. Async State Management
```typescript
// Modern Redux patterns with RTK
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      return await usersApi.getUsers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

### 4. Memoized Selectors
```typescript
// Efficient data derivation with reselect
export const selectUsersByRole = createSelector(
  [selectUsers, (state: RootState, role: string) => role],
  (users, role) => users.filter(user => user.role === role)
);
```

## 🔧 Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with modern patterns
- **TypeScript** - Type-safe JavaScript

### State Management
- **Redux Toolkit** - Modern Redux development
- **React Redux** - React bindings for Redux
- **Reselect** - Memoized selectors (included in RTK)

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

## 📈 Performance Considerations

### Optimizations Implemented
- **Memoized selectors** prevent unnecessary re-renders
- **Async thunks** handle loading states efficiently
- **Feature-based code splitting** enables lazy loading
- **TypeScript strict mode** catches errors at compile time

### Production Ready
- **Build optimization** with Next.js compiler
- **Bundle analysis** capabilities built-in
- **Performance monitoring** hooks available
- **Error boundaries** for graceful error handling

## 🤝 Contributing

### Development Guidelines
1. Follow the established folder structure
2. Use TypeScript for all new code
3. Write tests for new features
4. Run linting and formatting before commits
5. Follow conventional commit messages

### Code Quality Standards
- **100% TypeScript coverage**
- **ESLint configuration** enforced
- **Prettier formatting** required
- **Test coverage** targets 80%+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with modern web development best practices and enterprise patterns to demonstrate scalable React application architecture.

---

**Ready to build enterprise-grade applications?** This project serves as a comprehensive starting point for your next React project with Redux Toolkit and Next.js 15.
