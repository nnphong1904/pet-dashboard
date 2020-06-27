import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDY--hmvDGtJbhD9WeQhvITzVogWzi8b6I",
  authDomain: "find-your-pets-f7384.firebaseapp.com",
  databaseURL: "https://find-your-pets-f7384.firebaseio.com",
  projectId: "find-your-pets-f7384",
  storageBucket: "find-your-pets-f7384.appspot.com",
  messagingSenderId: "54645131302",
  appId: "1:54645131302:web:1ce04d7a7e8bbff1e87ee7",
  measurementId: "G-J02K39B7EJ"
}

firebase.initializeApp(config)
export default firebase