import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore'

// import { seedDatabase } from '../seed'

const config = {


  apiKey: process.env.REACT_APP_APIFIREBASE,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: 'netflix-tri',
  storageBucket: 'netflix-tri.appspot.com',
  messagingSenderId: '124191231253',
  appId: '1:124191231253:web:353547b68b35044f12ad1c',
  measurementId: 'G-S5DVSY0SJZ'
}
const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)
// const db = getFirestore(firebase)

export { firebase }
