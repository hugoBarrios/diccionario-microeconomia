import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDXd1QOuqGTZrX0hQPxvVdJQ-FfQWvHM8E",
    authDomain: "testfirebase-32330.firebaseapp.com",
    databaseURL: "https://testfirebase-32330.firebaseio.com",
    projectId: "testfirebase-32330",
    storageBucket: "testfirebase-32330.appspot.com",
    messagingSenderId: "524528985243",
    appId: "1:524528985243:web:4d0c7146781a538b0b523e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};