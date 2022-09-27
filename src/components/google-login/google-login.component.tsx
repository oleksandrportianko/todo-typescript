import { useDispatch } from 'react-redux'

import { googleSignInWithPopup, handleUserAfterLogin } from '../../utils/firebase/firebase'

import googleSvg from '../../assets/google.svg'

import { GoogleButtonText, GoogleIcon, GoogleLoginButton } from './google-login.styles'
import { setUserData } from '../../redux/slices/user.slice'

const GoogleLogin = () => {
    const dispatch = useDispatch()

    // Fucntion googleLoginHandler used for handle google sign in, after recieve data
    // we set userData to redux, and if user is not saved to docs into firebase we will
    // create a new user 
    const googleLoginHandler = async () => {
        const { user: { uid, displayName, email } } = await googleSignInWithPopup()
        if (displayName && email) {
            await handleUserAfterLogin({ uid, displayName, email })
            dispatch(setUserData({ id: uid, displayName, email }))
        }
    }

    return (
        <GoogleLoginButton onClick={googleLoginHandler}>
            <GoogleIcon src={googleSvg} />
            <GoogleButtonText>
                Log in with Google
            </GoogleButtonText>
        </GoogleLoginButton>
    )
}

export default GoogleLogin