import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from '@reach/router'

import useForm from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'

export default function Login() {
  const dispatch = useDispatch()
  const [{ email, password }, handleChange] = useForm({
    email: '',
    password: '',
  })

  const handleLogin = e => {
    e.preventDefault()

    dispatch(startLoginEmailPassword(email, password))
  }
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          className="auth__input"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          className="auth__input"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks:</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/sign-up" className="link">
          Create New Account
        </Link>
      </form>
    </>
  )
}
