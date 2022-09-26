import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { User } from '../../types/types'

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


export const onAuthStateChangedListener = async (callback: () => void) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
         unsubscribe()
         console.log("User", userAuth)
         resolve(userAuth)
      },
         reject
      )
   })
}
    

export const googleSignInWithPopup = async () => {
    signInWithPopup(auth, provider).then(async (result) => {
        const user = result.user;


        // try {
        //     const docRef = await addDoc(collection(db, "users"), {
        //         id: user.uid,
        //         displayname: user.displayName,
        //         email: user.email
        //     });
        // } catch (error) {
        //     console.log("Error adding document: ", error);
        // }
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
