import { useState } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:3002/api/admins/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password}),
      })
      if (response.status === 200) {
        auth.login(username, password, true)
        navigate('/admin')

      } else {
        alert('Improper Username or Password')
        
      }
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className = "form-div">

      <div className="form-title">
        <h1>
          Admin Login
        </h1>
        <div className="line"></div>
      </div>

      <form className="form-main" onSubmit={handleLogin}>

        <label>
          <h1>Username:</h1>
          <input
            type="text"
            className="username-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label>
          <h1>Password:</h1>
          <input
            type="password"
            className="password-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login


