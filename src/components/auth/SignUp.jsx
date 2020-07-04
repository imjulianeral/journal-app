import React from 'react'
import { Link } from '@reach/router'

export default function SignUp() {
  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          autoComplete="off"
          className="auth__input"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>

        <Link to="/auth/login" className="link">
          Already registered? Login here
        </Link>
      </form>
    </>
  )
}
