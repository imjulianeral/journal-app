import Swal from 'sweetalert2'

import { types } from '../types/types'
import { firebase, googleAuthProvider } from '../firebase/fireConfig'
import { startLoading, finishLoading } from './ui'
import { noteLogout } from './notes'

export const login = (uid, displayName) => ({
  type: types.LOGIN,
  payload: { uid, displayName },
})

export const logout = () => ({
  type: types.LOGOUT,
})

export const startLoginEmailPassword = (email, password) => {
  return async dispatch => {
    dispatch(startLoading())

    try {
      const {
        user: { displayName, uid },
      } = await firebase.auth().signInWithEmailAndPassword(email, password)

      dispatch(login(uid, displayName))
      dispatch(finishLoading())
    } catch (error) {
      console.error(error)
      dispatch(finishLoading())
      Swal.fire('Error', error.message, 'error')
    }
  }
}

export const startGoogleLogin = () => {
  return async dispatch => {
    const {
      user: { displayName, uid },
    } = await firebase.auth().signInWithPopup(googleAuthProvider)

    dispatch(login(uid, displayName))
  }
}

export const startSignUpWithEmailPassword = (email, password, name) => {
  return async dispatch => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      await user.updateProfile({ displayName: name })

      dispatch(login(user.uid, user.displayName))
    } catch (error) {
      console.error(error)
      Swal.fire('Error', error.message, 'error')
    }
  }
}

export const startLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut()

    dispatch(logout())
    dispatch(noteLogout())
  }
}
