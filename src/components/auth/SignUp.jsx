import React from 'react'
import { Link } from '@reach/router'
import validator from 'validator'

import useForm from '../../hooks/useForm'

export default function SignUp() {
  const [{ name, email, password, password2 }, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleSignUp = e => {
    e.preventDefault()
    console.log(name, email, password, password2)
    if (isFormValid()) console.log('Correct!')
  }

  const isFormValid = () => {
    if (name.trim().length === 0) return false
    if (email.trim().length === 0 || !validator.isEmail(email)) return false
    if (password !== password2 || password.length < 5) return false

    return true
  }

  return (
    <>
      <h3 className="auth__title">Sign Up</h3>

      <form onSubmit={handleSignUp}>
        <div className="auth__alert-error">error</div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          className="auth__input"
          value={name}
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          autoComplete="off"
          className="auth__input"
          value={password2}
          onChange={handleChange}
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
