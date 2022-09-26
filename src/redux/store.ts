import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import todosReducer from './slices/todos.slice'
import userReducer from './slices/user.slice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
  middleware: [logger],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch