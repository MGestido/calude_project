import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [page, setPage] = useState('login')

  return page === 'login'
    ? <Login onGoToSignUp={() => setPage('signup')} />
    : <SignUp onGoToLogin={() => setPage('login')} />
}

export default App
