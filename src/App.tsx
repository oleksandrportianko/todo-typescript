import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main/main.page'

import { checkUserAuthentication } from './utils/firebase/firebase'

import { setUserData } from './redux/slices/users.slice'

import { AppWrapper } from './styles'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCurrentUser = async () => {
      const res = checkUserAuthentication()
      console.log(res)
    }
    getCurrentUser()
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
