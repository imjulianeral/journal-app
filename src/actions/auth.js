import { types } from '../types/types'
import { firebase, googleAuthProvider } from '../firebase/fireConfig'

export const login = (uid, displayName) => ({
  type: types.LOGIN,
  payload: { uid, displayName },
})

export const startLoginEmailPassword = (email, password) => {
  return async dispatch => {
    const {
      user: { displayName, uid },
    } = await firebase.auth().signInWithEmailAndPassword(email, password)

    dispatch(login(uid, displayName))
  }
}

export const startGoogleLogin = (email, password) => {
  return async dispatch => {
    const {
      user: { displayName, uid },
    } = await firebase.auth().signInWithPopup(googleAuthProvider)

    dispatch(login(uid, displayName))
  }
}
