import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAU09kSWFvnivS6-yU3dZv3-WmbmX1aeWE",
    authDomain: "diccionario-microeconomia.firebaseapp.com",
    databaseURL: "https://diccionario-microeconomia.firebaseio.com",
    projectId: "diccionario-microeconomia",
    storageBucket: "diccionario-microeconomia.appspot.com",
    messagingSenderId: "558696089850",
    appId: "1:558696089850:web:7e578bd45891c571e6a143",
    measurementId: "G-LRBRCLVMZQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};