import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './slices/todos.slice'
import userReducer from './slices/users.slice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch