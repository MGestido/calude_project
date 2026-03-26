import { useState } from 'react'
import './Login.css'

function SignUp({ onGoToLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ name, email, password })
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
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
          <button type="submit" className="submit-btn">Sign up</button>
        </form>
        <p className="footer-text">
          Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onGoToLogin() }}>Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
