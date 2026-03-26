import { useState } from 'react'
import './Login.css'

function Login({ onGoToSignUp }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email Login</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Sign in</button>
        </form>
        <p className="footer-text">
          Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onGoToSignUp() }}>Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
