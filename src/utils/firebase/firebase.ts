import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore'

import { FirebaseUser, Todo } from './../../types/types';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUT_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
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
            todos: []
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

// Function for append new todo to the firebase doc
export const addNewTodo = async (userId: string, todo: Todo): Promise<void> => {
    if (!userId) return

    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()

    const updatedTodoList = [...userData?.todos, todo]
    const updatedUserData = {...userData, todos: updatedTodoList}

    await setDoc(docRef, updatedUserData)
}

// Function for receive list of user todos
export const getTodoList = async (userId: string): Promise<Todo[] | undefined> => {
    if (!userId) return
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()

    return userData?.todos
}

// Function for remove all user todos
export const removeAllTodos = async (userId: string): Promise<void> => {
    if (!userId) return
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()

    const updatedUserData = {...userData, todos: []}

    await setDoc(docRef, updatedUserData)
}

// Function used for delete user todo by id
export const deleteTodoById = async (userId: string, todoId: string): Promise<void> => {
    if (!userId) return
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()

    const updatedListTodos = userData?.todos.filter((todo: Todo) => todo.id !== todoId)

    const updatedUserData = {...userData, todos: updatedListTodos}

    await setDoc(docRef, updatedUserData)
}

// This fucntion used for update status of todo: active or done
export const updateTodoStatus = async (userId: string, todoId: string, status: string): Promise<void> => {
    if (!userId) return
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()

    const updatedListTodos = userData?.todos.map((todo: Todo) => todo.id === todoId ? {...todo, status} : todo)

    const updatedUserData = {...userData, todos: updatedListTodos}

    await setDoc(docRef, updatedUserData)
}

// This function used for update text of the todo
export const updateTodoText = async (userId: string, todoId: string, text: string): Promise<void> => {
    if (!userId) return
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()

    const updatedListTodos = userData?.todos.map((todo: Todo) => todo.id === todoId ? {...todo, text} : todo)

    const updatedUserData = {...userData, todos: updatedListTodos}

    await setDoc(docRef, updatedUserData)
}