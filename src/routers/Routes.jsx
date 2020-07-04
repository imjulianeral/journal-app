import React from 'react'
import { Router, Redirect } from '@reach/router'

import AuthRouter from './AuthRouter'
import Journal from '../components/journal/Journal'

export default function Routes() {
  return (
    <Router>
      <Journal path="/" />
      <AuthRouter path="/auth/*" />
      <Redirect from="/*" to="/auth/login" noThrow />
    </Router>
  )
}
