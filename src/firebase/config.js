import { initilizeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDy_RXhfZvQbMozMxOfVmbBSkdXtJAQ648',
  authDomain: 'rent-hunt.firebaseapp.com',
  projectId: 'rent-hunt',
  storageBucket: 'rent-hunt.appspot.com',
  messagingSenderId: '531535161853',
  appId: '1:531535161853:web:41ef3bcdcdf6ee40be1194',
}

//init firebase
initilizeApp(firebaseConfig)

//init firestore
export const db = getFirestore()
