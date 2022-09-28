import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface TodosState {
  
}

const initialState: TodosState = {
  
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    
  },
})

export const {  } = todosSlice.actions

export default todosSlice.reducer