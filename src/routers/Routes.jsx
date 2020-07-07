import React, { useEffect, useState } from 'react'
import { Router, Redirect } from '@reach/router'
import { useDispatch } from 'react-redux'

import { firebase } from '../firebase/fireConfig'
import { login } from '../actions/auth'
import { startLoadingNotes } from '../actions/notes'
import AuthRouter from './AuthRouter'
import Journal from '../components/journal/Journal'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function Routes() {
  const [isLoading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setAuth(true)

        dispatch(startLoadingNotes(user.uid))
      } else {
        setAuth(false)
      }
      setLoading(false)
    })
  }, [dispatch, setLoading, setAuth])

  if (isLoading) return <h1>Loading...</h1>
  return (
    <Router>
      <PrivateRoute isAuth={isAuth} path="/" component={Journal} />
      <PublicRoute isAuth={isAuth} path="/auth/*" component={AuthRouter} />
      <Redirect from="/*" to="/auth/login" noThrow />
    </Router>
  )
}
