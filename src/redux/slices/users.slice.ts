import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { User } from '../../types/types'

interface UserState {
    user: User,
}

const initialState: UserState = {
    user: {
        id: '',
        displayName: '',
        email: '',
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer