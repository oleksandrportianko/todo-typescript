import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main/main.page'

import { getCurrentUser } from './utils/firebase/firebase'
import { FirebaseUser } from './types/types'

import { setUserData } from './redux/slices/user.slice'

import { AppWrapper } from './styles'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const checkForCurrentUser = async () => {
      try {
        const { uid, displayName, email } = await getCurrentUser() as FirebaseUser
        dispatch(setUserData({ id: uid, displayName, email }))
      } catch (error) {
        console.log('User is not loggined in')
      }
    }

    checkForCurrentUser()
  }, [dispatch])

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
