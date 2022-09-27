import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore'

import { FirebaseUser } from './../../types/types';

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
const db = getFirestore(app);

// On auth state changed listener
export const onAuthStateChangedListener = async (callback: () => void) => onAuthStateChanged(auth, callback)

// Function for receive current loginned user
export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
         unsubscribe()
         resolve(userAuth)
      },
         reject
      )
   })
}

// Function handler google sign in with popup
export const googleSignInWithPopup = async () => signInWithPopup(auth, provider)


// Sign out handler function
export const signOutHandle = () => {
    signOut(auth).then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log('sign out error')
    });
}

// Function used for creation new user in firebase doc when user loggined in and doesn`t exist in db
export const createUser = async (user: FirebaseUser): Promise<void> => {
    const docRef = doc(db, "users", user.uid)
    
    try {
        await setDoc(docRef, {
            id: user.uid,
            displayname: user.displayName,
            email: user.email,
        });
    } catch (error) {
        console.log("Error adding document: ", error);
    }
}

// Handle User after login with Google, if exists will be redirected or created into doc
export const handleUserAfterLogin = async (user: FirebaseUser) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        createUser(user)
    }
}
