import { useDispatch } from 'react-redux'

import { setUserData } from '../../redux/slices/user.slice'
import { signOutHandle } from '../../utils/firebase/firebase'

import logoutSvg from '../../assets/logout.svg'

import { LogoutButtonHeader, LogoutImage } from './logout-button.styles'

const LogoutButton = () => {
    const dispatch = useDispatch()
    
    // Handle user logout, firstly call firebase logout method
    // after logout set empty user data
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
            <LogoutImage src={logoutSvg} />
        </LogoutButtonHeader>
    )
}

export default LogoutButton