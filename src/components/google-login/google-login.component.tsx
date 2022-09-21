import { googleSignInWithPopup } from '../../utils/firebase/firebase'

import {  } from './google-login.styles'

const GoogleLogin = () => {
    const googleLoginHandler = () => {
        googleSignInWithPopup()
    }

    return (
        <button onClick={googleLoginHandler}>
            Google
        </button>
    )
}

export default GoogleLogin