import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { User } from '../../types/types'

interface UserState {
    userData: User,
}

const initialState: UserState = {
    userData: {
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
            state.userData = action.payload
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer