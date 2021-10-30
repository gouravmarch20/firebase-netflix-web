import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { GlobalStyles } from './global-styles'
// --- FIREBASE
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
//

// import firebaseConfig from './lib/firebase.prod'
// import { seedDatabase } from './seed'
//
// const firebaseConfigData = firebase.initializeApp(firebaseConfig)
// seedDatabase(firebaseConfigData)
// ! retry
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
