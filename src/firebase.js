import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPCmUYFcrVpV9NYIn8QVV1W-8NexttuEY",
  authDomain: "safanasirli-a2533.firebaseapp.com",
  projectId: "safanasirli-a2533",
  storageBucket: "safanasirli-a2533.appspot.com",
  messagingSenderId: "355186734404",
  appId: "1:355186734404:web:66de8923ce306a591c1311",
  measurementId: "G-QZMERWQ01S"
})
const db= firebase.firestore();
export { db }

