// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1RmrrU0zg5eQiUe7M-FtPafMVgYrprkw',
  authDomain: 'chocoplanet-9332b.firebaseapp.com',
  projectId: 'chocoplanet-9332b',
  storageBucket: 'chocoplanet-9332b.appspot.com',
  messagingSenderId: '1017421104298',
  appId: '1:1017421104298:web:9d73c18452eca83c68bcd3',
  measurementId: 'G-SH109YHWBR',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
