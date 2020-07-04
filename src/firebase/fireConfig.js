import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAvxABY6qSwCdHu9UCmZWgiqaA5e8CTEes',
  authDomain: 'journal-app-924d4.firebaseapp.com',
  databaseURL: 'https://journal-app-924d4.firebaseio.com',
  projectId: 'journal-app-924d4',
  storageBucket: 'journal-app-924d4.appspot.com',
  messagingSenderId: '63441336393',
  appId: '1:63441336393:web:346bf78f78a4e0a6982798',
  measurementId: 'G-89D07RDRP5',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, firestore, googleAuthProvider }
