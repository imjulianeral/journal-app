import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from '@reach/router'
import validator from 'validator'

import useForm from '../../hooks/useForm'
import { setError, removeError } from '../../actions/ui'
import { startSignUpWithEmailPassword } from '../../actions/auth'

export default function SignUp() {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)
  const [{ name, email, password, password2 }, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleSignUp = e => {
    e.preventDefault()
    if (isFormValid())
      dispatch(startSignUpWithEmailPassword(email, password, name))
  }
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('You must write a name'))

      return false
    }
    if (email.trim().length === 0 || !validator.isEmail(email)) {
      dispatch(setError('You must write an email'))

      return false
    }
    if (password !== password2 || password.length < 5) {
      dispatch(
        setError('The passwords must have 6 characters and match each other')
      )

      return false
    }

    dispatch(removeError())
    return true
  }

  return (
    <>
      <h3 className="auth__title">Sign Up</h3>

      <form onSubmit={handleSignUp}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

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
