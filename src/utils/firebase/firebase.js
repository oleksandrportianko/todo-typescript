
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnCKjv9YDRc_XKPc6lxdhFkZJ3Uxq18Ak",
    authDomain: "todo-list-31b84.firebaseapp.com",
    projectId: "todo-list-31b84",
    storageBucket: "todo-list-31b84.appspot.com",
    messagingSenderId: "676913797576",
    appId: "1:676913797576:web:de40dd233c27fca827c8fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const googleSignInWithPopup = () => {
    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log('credential', credential)
        const token = credential.accessToken;
        console.log('token', token)
        const user = result.user;
        console.log('user', user)
    }).catch((error) => {
        console.log(error.message)
    });
}

export const signOutHandle = () => {
    signOut(auth).then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log('sign out error')
    });
}
