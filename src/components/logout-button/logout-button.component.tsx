import { useDispatch } from 'react-redux'

import { setUserData } from '../../redux/slices/user.slice'
import { signOutHandle } from '../../utils/firebase/firebase'

import { LogoutButtonHeader } from './logout-button.styles'

const LogoutButton = () => {
    const dispatch = useDispatch()
    
    // Handle user logout, we call firebase logout
    // after logout setting empty user data
    const logoutHandler = async (): Promise<void> => {
        try {
            await signOutHandle()
            dispatch(setUserData({ id: '', displayName: '', email: '' }))
        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <LogoutButtonHeader onClick={logoutHandler}>
            Log out
        </LogoutButtonHeader>
    )
}

export default LogoutButton