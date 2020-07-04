import React from 'react'
import { Router, Redirect } from '@reach/router'

import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'

export default function AuthRouter() {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Router>
          <Login exact path="/login" />
          <SignUp exact path="/sign-up" />
          <Redirect from="/*" to="/auth/login" noThrow />
        </Router>
      </div>
    </div>
  )
}
