import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main/main.page'

import { getCurrentUser } from './utils/firebase/firebase'
import { FirebaseUser } from './types/types'

import { setUserData } from './redux/slices/user.slice'
import { selectUserData } from './redux/slices/user.slice'

import { AppWrapper } from './styles'

function App() {
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)

  useEffect(() => {
    const checkForCurrentUser = async () => {
      const { uid, displayName, email } = await getCurrentUser() as FirebaseUser
      dispatch(setUserData({ id: uid, displayName, email }))
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
