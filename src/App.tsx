import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/main/main.page'

import { AppWrapper } from './styles'

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
